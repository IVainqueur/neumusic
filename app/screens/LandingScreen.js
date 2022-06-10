import React from 'react'
import { SafeAreaView, View, StatusBar, Platform, Image, Text } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'

import { useFonts } from 'expo-font'

import colors from "../config/colors"

const LandingScreen = (props) => {
  const [loaded] = useFonts({
    Readex_Pro: require('../assets/fonts/Readex_Pro/ReadexPro-VariableFont_wght.ttf'),
    "post-no-bills": require('../assets/fonts/post-no-bills/postnobillscolombo-regular.ttf')
  })
  return (
    <SafeAreaView style={styles.main}>
      <LinearGradient
        colors={[colors.lightBlue, colors.darkBlue]}
        style={styles.linearGradient}
      >
        {/* The NavBar */}
        <View style={styles.navBar}>
            <Image style={styles.logo} source={require("../assets/neumusicLogo.png")}/>
        </View>
        {/* HERO */}
        <View>
            <Text style={styles.mainText}>Listen to new music, <Text style={styles.inStyle}>in style</Text></Text>
        </View>



      </LinearGradient>
    </SafeAreaView>
  )
}

let styles = {
  main: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  linearGradient: {
    height: '100%',
    width: '100%',
  },
  navBar: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    padding: 10,
  },
  logo: {
    height: 60,
    width: "fit-content"
  },
  mainText: {
    fontSize: 30,
    color: colors.white,
    fontFamily: "Readex_Pro",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  inStyle: {
    fontFamily: "post-no-bills"
  }
}

export default LandingScreen
