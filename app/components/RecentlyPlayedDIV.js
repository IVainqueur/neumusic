import React from 'react'
import { SafeAreaView, View, StatusBar, Platform, Image, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Button, Pressable, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { useFonts } from 'expo-font'

import colors from "../config/colors"
import Icon from 'react-native-vector-icons/Ionicons'

const RecentlyPlayedDIV = ({ styles, recentlyPlayed }) => {
    return (
        <View style={styles.RecentlyPlayedDIV}>
            <Text style={{ color: colors.white, fontSize: 20, fontFamily: "readex" }}>Recently Played</Text>
            {/* <Recently Played Cards */}
            <ScrollView style={styles.CardGroup} horizontal={true} showsHorizontalScrollIndicator={false}>
                {/* <Recently Played Card */}
                {recentlyPlayed.map((x, index) => {
                    return (
                        <View style={styles.Card} key={index}>
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

                        </View>
                    )
                })}

            </ScrollView>
        </View>
    )
}

export default RecentlyPlayedDIV