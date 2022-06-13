import React from 'react'
import { SafeAreaView, View, StatusBar, Platform, Image, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Button, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { useFonts } from 'expo-font'

import colors from "../config/colors"

const LandingScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    readex: require("../assets/fonts/Readex_Pro/static/ReadexPro-Regular.ttf"),
    readexLight: require("../assets/fonts/Readex_Pro/static/ReadexPro-ExtraLight.ttf"),
    postnobills: require("../assets/fonts/post-no-bills/postnobillscolombo-regular.ttf")
  })
  if (!loaded) {
    return null;
  }

  // const NeuMorph = ({children, paddingVertical, paddingHorizontal, borderRadius, style})=>{
  //     return (
  //         <View style={styles.topShadow}>
  //             <View style={styles.bottomShadow}>
  //                 <View style={[style]}>
  //                     {children}
  //                 </View>
  //             </View>

  //         </View>
  //     )
  // }

  return (
    <SafeAreaView style={styles.main}>
      <LinearGradient
        colors={[colors.lightBlue, colors.darkBlue]}
        style={styles.linearGradient}
      >
        {/* The NavBar */}
        <View style={styles.navBar}>
          <Image style={styles.logo} source={require("../assets/neumusicLogo.png")} />
        </View>
        {/* HERO */}
        <View style={styles.mainContainer}>
          <Text style={styles.mainText}>Listen to new music,</Text>
          <Text style={styles.inStyle}>in style</Text>
          <Text style={styles.explanation}>In a new era, comes a new way to listen to music</Text>

          {Platform.OS === "android" ?
            <TouchableNativeFeedback style={styles.touchableButton} onPress={() => { navigation.navigate('HomeScreen') }}>
              <View style={styles.nextButtonShadowProp}>
                <Text style={{ color: colors.white, fontFamily: "readex", fontWeight: "600", fontSize: 20 }}>Start NOW</Text>
              </View>
            </TouchableNativeFeedback> :
            <TouchableOpacity style={styles.touchableButton} onPress={() => { navigation.navigate('HomeScreen') }}>
              <View style={styles.nextButtonShadowProp}>
                <Text style={{ color: colors.white, fontFamily: "readex", fontWeight: "600", fontSize: 20 }}>Start NOW</Text>
              </View>
            </TouchableOpacity>}
        </View>

      </LinearGradient>
    </SafeAreaView>
  )
}

let styles = StyleSheet.create({
  main: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  linearGradient: {
    height: '100%',
    width: '100%',
  },
  navBar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingTop: 20,
  },
  logo: {

  },
  mainContainer: {
    height: "100%",
    width: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "red",

  },
  mainText: {
    fontSize: 60,
    color: colors.white,
    fontFamily: "readex",
    paddingHorizontal: 100,
    textAlign: "center",
    fontWeight: "100",
    lineHeight: 65,
  },
  inStyle: {
    fontSize: 70,
    color: colors.white,
    fontFamily: "postnobills",
    paddingHorizontal: 40,
    textAlign: "center",
    lineHeight: 80,
    marginTop: -4,
  },
  explanation: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 25,
    fontFamily: "readexLight",
    width: 340,
    fontWeight: "100",
  },
  nextButton: {
    color: colors.white,
    backgroundColor: colors.lightBlue,
    paddingHorizontal: 100,
    paddingVertical: 20,
    borderRadius: 10,

  },
  nextButtonShadowProp: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    backgroundColor: colors.darkBlue,
    elevation: 10
  },
  nextButtonText: {
    fontFamily: "readex",
    color: colors.white
  }
})

export default LandingScreen
