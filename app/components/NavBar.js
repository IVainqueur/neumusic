import React from 'react'
import { SafeAreaView, View, StatusBar, Platform, Image, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Button, Pressable, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { useFonts } from 'expo-font'

import colors from "../config/colors"
import Icon from 'react-native-vector-icons/Ionicons'

const NavBar = ({ styles }) => {
    return (
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
    )
}

export default NavBar