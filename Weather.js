import React from "react";
import {StyleSheet, View, Text, StatusBar} from "react-native";
import PropTypes from "prop-types"
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

const weatherOptions={
  Thunderstorm:{
    iconName:"weather-lightning",
    gradient:["#00416A","#E4E5E6"]
  },
  Drizzle:{
    iconName:"weather-rainy",
    gradient:["#00416A","#E4E5E6"]
  },
  Snow:{
    iconName:"weather-snowy",
    gradient:["#00416A","#E4E5E6"]
  },
  Atmosphere:{
    iconName:"weather-rainy",
    gradient:["#00416A","#E4E5E6"]
  },
  Clear:{
    iconName:"weather-sunny",
    gradient:["#00416A","#E4E5E6"]
  },
  Clouds:{
    iconName:"weather-cloudy",
    gradient:["#00416A","#E4E5E6"],
    title:"Clouds",
    subtitle:"it's cloudy"
  },
  Haze:{
    iconName:"weather-haze",
    gradient:["#00416A","#E4E5E6"]
  },
  Mist:{
    iconName:"weather-rainy",
    gradient:["#00416A","#E4E5E6"]
  },
  Dust:{
    iconName:"weather-rainy",
    gradient:["#00416A","#E4E5E6"]
  },
  Rain:{
    iconName: "weather-rainy",
    gradient:["#00416A","#E4E5E6"],
    title:"Rain",
    subtitle:"it's rainy"
  }
};

export default function Weather({temp, condition}) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content"/>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white"/>
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{...styles.halfContainer, ...styles.textContainer}}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  )
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    color:"white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle:{
    color:"white",
    fontWeight: "600",
    fontSize: 24,
  },
  textContainer:{
    paddingHorizontal: 20,
    alignItems: "flex-start",
  }
})
