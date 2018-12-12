import React , { Component } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import Weather from "./Weather";
import SvgUri from 'react-native-svg-uri';


const WEATHER_KEY = "ec3ab88f167d3ab0b0487fdc6ad9644e";
const AIR_KEY = "6sz22MrPmc7B3JWJb";

export default class App extends Component {
  state = {
    isLodaded: false,
    error: null,
    temperature: null,
    name: "Clear",
    clothestemp: "A",
    pollutionDesc: "HAZARDOUS"
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition( 
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude)
        this._getAirPollution(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({
          error:error
        });
      }
    );
  }

  _getWeather = ( lat, lon ) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${WEATHER_KEY}`
    ) 
    .then(response => response.json())
    .then(json => {
      this.setState({
        temperature: Math.floor(json.main.temp - 273.15),
        name: json.weather[0].main,
        isLodaded: true
      })
      this._getClothesDesc(Math.floor(json.main.temp - 273.15));
    });
  };

  _getClothesDesc= ( temperature ) => {
    var clothestemp;
      if( temperature >= 27){
        clothestemp = 'A'
      }
      if( temperature >= 23 && temperature < 27){
        clothestemp = "B"
      }
      if( temperature >= 20 && temperature < 23){
        clothestemp = "C"
      }
      if( temperature >= 17 && temperature < 20){
        clothestemp = "D"
      }
      if( temperature >= 12 && temperature < 17){
        clothestemp = "E"
      }
      if( temperature >= 10 && temperature < 12){
        clothestemp = "F"
      }
      if( temperature >= 6 && temperature < 10){
        clothestemp = "G"
      }
      if( temperature < 6 ){
        clothestemp = "H"
      }
      this.setState({
        clothestemp: clothestemp
      });
  };


_getAirPollution = ( lat, lon ) => {
    fetch(`http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${AIR_KEY}`
    ) 
    .then(response => response.json())
    .then(json => {
      this.setState({
        pollutionAqius: json.data.current.pollution.aqius,
        // time: json.data.current.pollution.ts,
        // criteria: json.data.current.pollution.mainus,
        isLodaded: true
      })
      this._getAirPollutionDesc(json.data.current.pollution.aqius);
    });
  };

_getAirPollutionDesc= ( pollutionAqius ) => {
    var pollutionDesc;
      if( pollutionAqius >= 0 && pollutionAqius <= 50){
        pollutionDesc = "GOOD"
      }
      if( pollutionAqius >= 51 && pollutionAqius <= 100){
        pollutionDesc = "MODERATE"
      }
      if( pollutionAqius >= 101 && pollutionAqius <= 150){
        pollutionDesc = "LITTLEUNHEALTHY"
      }
      if( pollutionAqius >= 151 && pollutionAqius <= 200){
        pollutionDesc = "UNHEALTHY"
      }
      if( pollutionAqius >= 201 && pollutionAqius <= 300){
        pollutionDesc = "VERYUNHEALTHY"
      }
      if( pollutionAqius >= 301 ){
        pollutionDesc = "HAZARDOUS"
      }
      console.log("pollutionDesc1", pollutionDesc);
      this.setState({
        pollutionDesc: pollutionDesc
      });
  };


  render() {
    const { isLodaded, error, temperature, name, clothestemp, pollutionDesc } = this.state;
    return (
      <View style={styles.container} >   
       {isLodaded ? (
        <Weather weatherName={name} temp={temperature} clothestemp={clothestemp} pollutionDesc={pollutionDesc} /> 
       ) : (      
        <View style={styles.loading}>
            <SvgUri style={styles.logo} source={require('./assets/logo-weather.svg')}/>
            <SvgUri style={styles.bottomlogo} source={require('./assets/aikloy.svg')}/>
            {error ? <Text style={styles.errorText}>{error}</Text>: null}
        </View>
       )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6ECED6",
  },
  errorText: {
    color: "red",
    backgroundColor: 'transparent',
    marginBottom: 40
  },
  loading: {
    flex: 1,
    backgroundColor: "#6ECED6",
    justifyContent:"center",
    alignItems: "center",
  },
  logo: {
    flex: 8,
    height: 130,
    width: 114,
    justifyContent:"center",
    alignItems: "center",
  },
  bottomlogo: {
    flex: 1,
    height: 28,
    width: 112,
    justifyContent:"center",
    alignItems: "center",
  }
});
