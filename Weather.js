import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropsTypes from "prop-types";
import SvgUri from 'react-native-svg-uri';


const weatherCases = {
    Rain: {
        colors: ['#00C6F8', '#005BEA'],
        title: "비",
        subtitle: "창문 밖을 확인하시죠",
        icon: "weather-rainy"
    },
    Clear: {
        colors: ['#FEF253', '#FF7300'],
        title: "맑음",
        subtitle: "산책하시죠",
        icon: "weather-sunny"
    },
    Thunderstorm: {
        colors: ['#00ECBC', '#007ADF'],
        title: "천둥",
        subtitle: "소리 들리시죠",
        icon: "weather-lightning"
    },
    Clouds: {
        colors: ['#D7D2CC', '#304352'],
        title: "구름많음",
        subtitle: "구름이 굉장히 많아요",
        icon: "weather-cloudy"
    },
    Snow: {
        colors: ['#7DE2FC', '#B9B6E5'],
        title: "눈",
        subtitle: "눈사람 만들러 나가시죠",
        icon: "weather-snowy"
    },
    Drizzle: {
        colors: ['#89F7FE', '#66A6FF'],
        title: "이슬비",
        subtitle: "비인 것 같은데 아닌 것 같음",
        icon: "weather-hail"
    },
    Haze: {
        colors: ['#89F7FE', '#66A6FF'],
        title: "연무",
        subtitle: "사전적의미: (시야를 가리는)희뿌연 것",
        icon: "weather-fog"
    },
    Mist: {
        colors: ['#D7D2CC', '#304352'],
        title: "안개",
        subtitle: "황사아님 안개임",
        icon: "weather-fog"
    }
}


const airCases = {
    GOOD: {
        colors: ['#00C6F8', '#005BEA'],
        decs: "매우좋음"
    },
    MODERATE: {
        colors: ['#FEF253', '#FF7300'],
        decs: "좋음"
    },
    LITTLEUNHEALTHY: {
        colors: ['#00ECBC', '#007ADF'],
        decs: "조금나쁨"
    },
    UNHEALTHY: {
        colors: ['#D7D2CC', '#304352'],
        decs: "나쁨"
    },
    VERYUNHEALTHY: {
        colors: ['#89F7FE', '#66A6FF'],
        decs: "매우나쁨"
    },
    HAZARDOUS: {
        colors: ['#89F7FE', '#66A6FF'],
        decs: "재앙수준"
    }
}


const clothesCases = {
    A: {
        temp: "27˚C ~",
        icon: "",
        desc: "나시티, 반바지, 민소매 원피스"
    },
    B: {
        temp: "23˚C ~ 26˚C",
        icon: "",
        desc: "반팔, 얇은 셔츠, 얇은 긴팔, 반바지, 면바지"
    },
    C: {
        temp: "20˚C ~ 22˚C",
        icon: "",
        desc: "긴팔티, 가디건, 후드티, 면바지, 슬래스, 스키니"
    },
    D: {
        temp: "17˚C ~ 19˚C",
        icon: "",
        desc: "니트, 가디건, 후드티, 맨투맨, 청바지, 면바지, \n슬랙스, 원피스"
    },
    E: {
        temp: "12˚C ~ 16˚C",
        icon: "",
        desc: "자켓, 셔츠, 가디건, 간절기 야상, 살색스타킹 \n(*외투 착용 필수)"
    },
    F: {
        temp: "10˚C ~ 11˚C",
        icon: "",
        desc: "트렌치코트, 간절기 야상, 여러겹 껴입기 \n(*외투 착용 필수)"
    },
    G: {
        temp: "6˚C ~ 9˚C",
        icon: "",
        desc: "코트, 가죽자켓 (*외투 착용 필수)"
    },
    H: {
        temp: "~ 5˚C",
        icon: "",
        desc: "겨울 옷: 야상, 패딩, 목도리 등등 모두 다 \n(*외투 착용 필수)"
    }
}



function Weather({ weatherName, temp, clothestemp }) {
    // if (clothestemp !== null)
    return (
        <LinearGradient
            colors={weatherCases[weatherName].colors}
            style={styles.container} >

            <StatusBar hidden={true} />

            {/* <View style={styles.header}>
                <Text style={styles.airpollutiondescname}>미세먼지: <Text style={styles.airpollutiondesc}> {airCases[pollutionDesc].decs} </Text></Text>
            </View> */}

            <View style={styles.upper}>
                <MaterialCommunityIcons
                    color="white"
                    size={144}
                    name={weatherCases[weatherName].icon}
                />
                <Text style={styles.temp}>{temp}<Text style={styles.degree}> ℃</Text></Text>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>

            <View style={styles.middle}>
                <Text style={styles.notice}>오늘의 옷차림 </Text>
            </View>

            <View style={styles.lower}>
                <View style={styles.iconbox}>
                    <SvgUri style={styles.icons} source={require('./assets/clothes1.svg')}/> 
                    <SvgUri style={styles.icons} source={require('./assets/clothes2.svg')}/> 
                    <SvgUri style={styles.icons} source={require('./assets/clothes3.svg')}/> 
                </View>
                        <Text style={styles.clothestemp}>{clothesCases[clothestemp].temp}</Text>  
            </View>

            <View style={styles.bottom}>
                <Text numberOfLines={5} style={styles.clothes}>{clothesCases[clothestemp].desc}</Text>
            </View>

        </LinearGradient>

    );
}

Weather.PropsTypes = {
    temp: PropsTypes.number.isRequired,
    weatherName: PropsTypes.string.isRequired,
    clothestemp: PropsTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.3,
    },
    airpollutiondescname:{
        fontSize: 10,
    },
    airpollutiondesc: {
        fontSize: 10,
    },
    upper: {
        flex: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    temp: {
        fontSize: 50,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    degree: {
        fontSize: 30,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    middle: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25,
    },
    notice: {
        fontSize: 25,
        backgroundColor: "transparent",
        color: "white",
    },
    title: {
        fontSize: 25,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 5,
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 15,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 15,
    },
    lower: {
        flex: 1.5,
        // alignItems: "flex-start",
        // justifyContent: "flex-end",
        paddingLeft: 25,
        width: 100, 
        height: 70,
        flexDirection: 'row'
    },
    iconbox: {
        flexDirection: "row",
    },
    icons: { 
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    clothestemp: {
        marginTop: 50,
        fontSize: 20,
        backgroundColor: "transparent",
        color: "white",
        
    },
    bottom: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25,
    },
    clothes: {
        fontSize: 15,
        backgroundColor: "transparent",
        color: "white",
        paddingRight: 10,
        marginBottom: 5
    }
})