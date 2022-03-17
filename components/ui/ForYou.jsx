import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

const ForYou = () => {
  return (
    <View style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: (WIDTH - 56)
    }}>
        <View style={{
            width: (WIDTH - 56),
            height: 30,
        }}>
            <Text style={{
                fontFamily: 'Roboto',
                fontWeight: '400',
                fontSize: 24,
                fontStyle: 'normal',
                lineHeight: 28.8,
            }}>Для вас</Text>
        </View>
        <Image style={{
            height: 208,
            width: 166,
            marginTop: 18,
        }} source={require('../../assets/images/places.png')} /><Image style={{
            height: 208,
            width: 166,
            marginTop: 18,
            marginLeft: 23,
        }} source={require('../../assets/images/museums.png')} />
    </View>
  )
}

export default ForYou