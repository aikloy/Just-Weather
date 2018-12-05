import React , { Component } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import Weather from "./Weather";

const API_KEY = "ec3ab88f167d3ab0b0487fdc6ad9644e";

export default class App extends Component {
  state = {
    isLodaded: false,
    error: null,
    temperature: null,
    name: null
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition( 
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({
          error:error
        });
      }
    );
  }

  _getWeather= ( lat, lon ) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`) 
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main,
        isLodaded: true
      })
    });
  };

  render() {
    const { isLodaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
       {isLodaded ? (
       <Weather weatherName={name} temp={Math.floor(temperature - 273.15)} /> 
       ) : (       
        <View style={styles.loading}>
          <ActivityIndicator />
            <Text style={styles.loadingText}>그냥,날씨 로딩중 좀 기둘 ...</Text>
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
    backgroundColor: '#fff'
  },
  errorText: {
    color: "red",
    backgroundColor: 'transparent',
    marginBottom: 40
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent:"flex-end",
    paddingLeft: 25,
    paddingRight: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 24
  }
});
