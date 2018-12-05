import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import PropsTypes from "prop-types";

// 미세먼지 농도로 수정 필요
const weatherCases = {
    Rain: {
        colors:['#00C6F8', '#005BEA'],
        title: "비",
        subtitle: "창문 밖을 확인하시죠",
        icon: "ios-rainy"
    },
    Clear: {
        colors:['#FEF253', '#FF7300'],
        title: "맑음",
        subtitle: "산책하시죠",
        icon: "ios-sunny"
    },
    Thunderstorm: {
        colors:['#00ECBC', '#007ADF'],
        title: "천둥",
        subtitle: "소리 들리시죠",
        icon: "ios-thunderstorm"
    },
    Clouds: {
        colors:['#D7D2CC', '#304352'],
        title: "구름많음",
        subtitle: "구름이 굉장히 많아요",
        icon: "ios-cloudy"
    },
    Snow: {
        colors:['#7DE2FC', '#B9B6E5'],
        title: "눈",
        subtitle: "눈사람 만들러 나가시죠",
        icon: "ios-snow"
    },
    Drizzle: {
        colors:['#89F7FE', '#66A6FF'],
        title: "이슬비",
        subtitle: "비인 것 같은데 아닌 것 같음",
        icon: "ios-rainy-outline"
    },
    Haze: {
        colors:['#89F7FE', '#66A6FF'],
        title: "안개",
        subtitle: "황사아님 안개임",
        icon: "ios-rainy-outline"
    },
}


function Weather({ weatherName, temp }){
    console.log(weatherName);
    return(
        <LinearGradient colors={weatherCases["Clear"].colors} style={styles.container} >  
                 <StatusBar hidden={true}/>
                     <View style={styles.upper}>
                        <Ionicons color="white" size={144} name={weatherCases["Clear"].icon} />
                         <Text style={styles.temp}>{temp}˚</Text>
                         <Text style={styles.compare}>어제보다 5˚ 낮음</Text>
                     </View>
                     <View style={styles.middle}> 
                     </View>
                     <View style={styles.lower}>
                         <Text style={styles.title}>{weatherCases["Clear"].title}</Text>
                         <Text style={styles.subtitle}>{weatherCases["Clear"].subtitle}</Text>
                         {/* <Text style={styles.notice}>기온별 옷차림</Text>
                         <Text style={styles.subtitletemp}>12˚C ~ 16˚C</Text>
                         <Text style={styles.subtitleclothes}>자켓, 셔츠, 가디건, 간절기 야상, 살색스타킹 (* 외투 착용 필수)</Text> */}
                     </View>
                 </LinearGradient>

    );
}

Weather.PropsTypes = {
    temp: PropsTypes.number.isRequired
}



export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    temp: {
        fontSize : 48,
        backgroundColor: "transparent",
        color: "white",
        marginTop:  10
    },
    compare: {
        backgroundColor: "transparent",
        color: "white",
        alignItems:"center",
        justifyContent:"center"
    },
    lower: {
        flex:1,
        alignItems:"flex-start",
        justifyContent:"flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize : 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 5,
        fontWeight: "300"
    },
    subtitle: {
        fontSize : 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 25
    },
    subtitletemp: {
        fontSize : 24,
        backgroundColor: "transparent",
        color: "white"
    },
    notice: {
        fontSize : 24,
        backgroundColor: "transparent",
        color: "white"
    },
    subtitleclothes: {
        fontSize : 15,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24
    }
})