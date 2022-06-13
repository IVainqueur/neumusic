import React from 'react'
import { SafeAreaView, View, StatusBar, Platform, Image, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Button, Pressable, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { useFonts } from 'expo-font'

import colors from "../config/colors"
import Icon from 'react-native-vector-icons/Ionicons'


const HomeScreen = (props) => {
    const [loaded] = useFonts({
        readex: require("../assets/fonts/Readex_Pro/static/ReadexPro-Regular.ttf"),
        readexLight: require("../assets/fonts/Readex_Pro/static/ReadexPro-ExtraLight.ttf"),
        postnobills: require("../assets/fonts/post-no-bills/postnobillscolombo-regular.ttf")
    })
    if (!loaded) {
        return null;
    }
    /*-> Suppose we fetch an array of recently played songs here */
    const recentlyPlayed = [
        {
            title: "Hilarious",
            artists: "Charlie Puth",
            imageURI: require("../assets/001.png")
        },
        {
            title: "Easy On Me",
            artists: "Adele",
            imageURI: require("../assets/002.jpg")
        },
        {
            title: "34 + 35",
            artists: "Ariana Grande ft Meghan Thee Stallion & Doja Cat",
            imageURI: require("../assets/003.jpg")
        },
        {
            title: "STAY",
            artists: "Kid Laroi ft Justin Beiber",
            imageURI: require("../assets/004.jpg")
        },
        {
            title: "Blinding Lights",
            artists: "The Weeknd",
            imageURI: require("../assets/005.png")
        },
        {
            title: "Save Your Tears",
            artists: "The Weeknd ft Ariana Grande",
            imageURI: require("../assets/006.jpg")
        },
        {
            title: "Shivers",
            artists: "Ed Sheeran",
            imageURI: require("../assets/007.png")
        },
        {
            title: "As It Was",
            artists: "Harry Styles",
            imageURI: require("../assets/008.png")
        },
        {
            title: "Super Gremlin",
            artists: "Kodak Black",
            imageURI: require("../assets/009.jpg")
        }
    ]

    return (
        <SafeAreaView style={styles.main}>
            <ScrollView style={{ height: "100%" }}>
                <LinearGradient
                    colors={[colors.lightBlue, colors.darkBlue]}
                    style={styles.linearGradient}
                >
                    {/* The NavBar */}
                    <View style={styles.navBar}>

                        {Platform.OS === "android" ?
                            <TouchableNativeFeedback  >
                                <Icon
                                    name="menu"
                                    size={30} color={colors.white}
                                    style={styles.menuButton}
                                />
                            </TouchableNativeFeedback> :
                            <TouchableOpacity  >
                                <Icon
                                    name="menu"
                                    size={30} color={colors.white}
                                    style={styles.menuButton}
                                />
                            </TouchableOpacity>}
                        <Image style={styles.logo} source={require("../assets/neumusicLogo.png")} />
                    </View>
                    {/* Main DIV */}
                    <View style={styles.mainDIV}>
                        {/* <RecentlyPlayedDIV */}
                        <View style={styles.RecentlyPlayedDIV}>
                            <Text style={{ color: colors.white, fontSize: 20, fontFamily: "readex" }}>Recently Played</Text>
                            {/* <Recently Played Cards */}
                            <ScrollView style={styles.CardGroup} horizontal={true} showsHorizontalScrollIndicator={false}>
                                {/* <Recently Played Card */}
                                {recentlyPlayed.map((x, index) => {
                                    return (
                                        <LinearGradient colors={[colors.lightBlue + "30", colors.darkBlue].reverse()} style={styles.Card} key={index}>
                                            <Image style={styles.CardImage} source={x.imageURI} />
                                            <View style={styles.CardContent}>
                                                <View style={styles.CardTextContent}>
                                                    <Text style={styles.cardSongTitle}>{x.title}</Text>
                                                    <Text style={styles.cardSongArtists}>{x.artists.slice(0, 13) + ((x.artists.length > 13) ? '...' : '')}</Text>
                                                </View>
                                                <TouchableOpacity activeOpacity={0.6}>
                                                    <View style={{ ...styles.CardPlay }}>
                                                        <Icon name='caret-forward-outline' size={30} color={colors.white} />
                                                    </View>
                                                </TouchableOpacity>
                                            </View>

                                        </LinearGradient>
                                    )
                                })}

                            </ScrollView>
                        </View>
                    </View>
                </LinearGradient>
            </ScrollView>
        </SafeAreaView>
    )
}

let styles = StyleSheet.create({
    main: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        height: "100%",
        // backgroundColor: "red"
    },
    mainDIV: {
        height: "100%",
        width: "100%",
        flex: 1,
        flexGrow: 1,
        padding: 10,
    },
    linearGradient: {
        height: '100%',
        width: '100%',
        flex: 1,
        alignSelf: 'stretch'
    },
    navBar: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        paddingVertical: 20,
        backgroundColor: colors.darkBlue + "50",
    },
    menuButton: {
        marginRight: 10
    },
    RecentlyPlayedDIV: {
        flexDirection: "column",
    },
    CardGroup: {
        flexDirection: "row",
        // alignItems: 'center',
        marginVertical: 10,
    },
    Card: {
        overflow: 'hidden',
        width: 230,
        // elevation: 5,
        padding: 15,
        marginRight: 10,
        borderRadius: 10,
        alignItems: 'flex-start',
        flexDirection: "column",
        // backgroundColor: colors.darkBlue + "50", // -> 
    },
    CardImage: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        marginBottom: 10,
        borderRadius: 10
    },
    cardSongTitle: {
        fontSize: 18,
        fontFamily: "readex",
        color: colors.white,
    },
    cardSongArtists: {
        marginTop: -5,
        fontSize: 16,
        fontFamily: "readex",
        color: colors.black + "90" // -> #00000090
    },
    CardContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },
    CardPlay: {
        height: 50,
        width: 50,
        padding: 1,
        borderRadius: 25,
        backgroundColor: colors.darkBlue,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end",
    }
})

export default HomeScreen