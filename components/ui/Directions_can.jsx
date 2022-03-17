import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

const directions_can = () => {
  return (
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: (WIDTH - 56),
      marginBottom: 30,
    }}>
      <View style={{
        marginTop: 30,
        height: 22,
        width: (WIDTH - 56),
      }}>
        <Text style={{
          fontFamily: 'Roboto',
          fontWeight: '400',
          fontStyle: 'normal',
          fontSize: 18,
          lineHeight: 21.6,
        }}>Путешествия</Text>
      </View>
      <Image source={require('../../assets/images/restorans.png')} style={{
        width: 166,
        height: 78,
        marginRight: 23,
        marginTop: 16,
      }} />
      <Image source={require('../../assets/images/car_arenda.png')} style={{
        width: 166,
        height: 78,
        marginTop: 16,
      }} />
      <Image source={require('../../assets/images/hotels.png')} style={{
        width: 166,
        height: 78,
        marginRight: 23,
        marginTop: 16,

      }} />
      <Image source={require('../../assets/images/taxi.png')} style={{
        width: 166,
        height: 78,
        marginTop: 16,
      }} />
      <Image source={require('../../assets/images/tour_base.png')} style={{
        width: 166,
        height: 78,
        marginTop: 16,
      }} />

    </View>
  )
}

export default directions_can