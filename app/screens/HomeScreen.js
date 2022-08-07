import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, StatusBar, Platform, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'


import colors from "../config/colors"
import Icon from 'react-native-vector-icons/Ionicons'
import RecentlyPlayedDIV from '../components/RecentlyPlayedDIV'
import NavBar from '../components/NavBar'
import AllSongs from '../components/AllSongs'

/* The actually functional pages */
import RNFS from 'react-native-fs';


const HomeScreen = (props) => {
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
    const [currentSong, setCurrentSong] = useState(recentlyPlayed[0])

    const [downloadsPath, setDownloadsPath] = useState('')

    useEffect(()=>{
        setDownloadsPath(RNFS.DownloadDirectoryPath)
    }, [])

    return (
        <SafeAreaView style={styles.main}>
            <ScrollView style={{ height: "100%" }}>
                <LinearGradient
                    colors={[colors.lightBlue, colors.darkBlue]}
                    style={styles.linearGradient}
                >
                    <NavBar styles={styles} />
                    <View style={styles.mainDIV}>
                        <RecentlyPlayedDIV styles={styles} recentlyPlayed={recentlyPlayed} />
                        <AllSongs styles={styles} recentlyPlayed={recentlyPlayed} />

                    </View>
                </LinearGradient>
            </ScrollView>
            {/* <PlayControl> */}
            <View style={styles.PlayControlParent}>
                {/* <Song Details> */}
                <View style={styles.PlayControlTextContent}>
                    <Image source={currentSong.imageURI} style={styles.PlayControlImage} />
                    <View >
                        <Text style={styles.PlayControlTitle}>{currentSong.title}</Text>
                        <Text style={styles.PlayControlArtists}>{currentSong.artists}</Text>
                    </View>
                </View>
                <View style={styles.PlayControlButtons}>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Icon style={styles.PlayControlButton} name='play-skip-back' size={16} color={colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Icon style={styles.PlayControlButton} name='play' size={16} color={colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Icon style={styles.PlayControlButton} name='play-skip-forward' size={16} color={colors.white} />
                    </TouchableOpacity>
                </View>
                {/* <Song Details> */}
            </View>
            {/* </PlayControl> */}
        </SafeAreaView>
    )
}

let styles = StyleSheet.create({
    main: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        height: "100%",
        flex: 1
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
        alignSelf: 'stretch',
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
        padding: 15,
        marginRight: 10,
        borderRadius: 10,
        alignItems: 'flex-start',
        flexDirection: "column",
        backgroundColor: colors.darkBlue + "90", // -> 
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
        elevation: 10,
        // backgroundColor: colors.lightBlue + "30",
    },
    Song: {
        flexDirection: "row",
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        justifyContent: "flex-start",
        position: 'relative',
        backgroundColor: colors.lightBlue + "90",
    },
    SongTextContent: {
        marginHorizontal: 10,
    },
    SongImage: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 40
    },
    SongContent: {
        flexDirection: "row",
        alignItems: "center"
    },
    ActionButtons: {
        flexDirection: "row",
        position: 'absolute',
        right: 0,
    },
    SongButton: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: colors.darkBlue + "50",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end",
        marginRight: 10,
    },
    PlayControlParent: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: "100%",
        padding: 10,
        backgroundColor: colors.lightBlue,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    PlayControlTextContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    PlayControlImage: {
        height: 70,
        width: 70,
        borderRadius: 50,
        marginRight: 10
    },
    PlayControlTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.white
    },
    PlayControlButtons: {
        flex: 1,
        flexDirection: 'row',
    },
    PlayControlButton: {
        // height: 30,
        // width: 30,
        padding: 7,
        marginRight: 10,
        borderRadius: 25,
        backgroundColor: colors.darkBlue + "50",
    }
})

export default HomeScreen