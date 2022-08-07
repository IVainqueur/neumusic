import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'


import colors from "../config/colors"
import Icon from 'react-native-vector-icons/Ionicons'

const AllSongs = ({ styles, recentlyPlayed, songs }) => {
    return (
        <View>
            <Text style={{ color: colors.white, fontSize: 20, fontFamily: "readex", marginVertical: 10 }}>All Songs</Text>

            {/* <Songs> */}
            {songs.map((x, index) => {
                return (
                    <View style={styles.Song} key={index}>
                        <Image style={styles.SongImage} source={x.imageURI} />
                        <View style={styles.SongTextContent}>
                            <Text style={styles.cardSongTitle}>{x.title}</Text>
                            <Text style={styles.cardSongArtists}>{x.artists.slice(0, 30) + ((x.artists.length > 30) ? '...' : '')}</Text>
                        </View>
                        <View style={styles.ActionButtons}>
                            <TouchableOpacity activeOpacity={0.6}>
                                <View style={{ ...styles.SongButton }}>
                                    <Icon name='caret-forward-outline' size={20} color={colors.white} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6}>
                                <View style={{ ...styles.SongButton }}>
                                    <Icon name='add-outline' size={20} color={colors.white} />
                                </View>
                            </TouchableOpacity>

                        </View>

                    </View>
                )
            })}
            {/* </Songs> */}
        </View>
    )
}

export default AllSongs