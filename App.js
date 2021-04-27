import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from "./Loading";
import Weather from "./Weather";
import {Alert} from 'react-native';
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "d5a87b4e128ed647179df4904bb0ae9f";

export default class extends React.Component {
  state={
    isLoading: true,
  };

  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    this.setState({isLoading: false, condition: "Clear", temp: data.main.temp});

  }

  getLocation = async() => {
    try{
      await Location.getForegroundPermissionsAsync();
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);

    }catch(error){
      Alert.alert("Can't find you",'So sad!');
    }

  }
  componentDidMount() {
    this.getLocation();
  }

  render(){
    const { isLoading, condition, temp } = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}
