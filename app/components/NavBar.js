import React from 'react'
import { View, Platform, Image, TouchableOpacity, TouchableNativeFeedback } from 'react-native'



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