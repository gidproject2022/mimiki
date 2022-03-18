import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

import { NavigationContext } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';


const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

const directions_can = ({}) => {
  const navigation = React.useContext(NavigationContext);

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
      <TouchableOpacity onPress={() => { navigation.navigate('Рестораны')}}>
        <Image source={require('../../assets/images/restorans.png')} style={{
          width: 166,
          height: 78,
          marginRight: 23,
          marginTop: 16,
        }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.navigate('Аренда машины')}}>
        <Image source={require('../../assets/images/car_arenda.png')} style={{
          width: 166,
          height: 78,
          marginTop: 16,
        }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.navigate('Отели')}}>
        <Image source={require('../../assets/images/hotels.png')} style={{
          width: 166,
          height: 78,
          marginRight: 23,
          marginTop: 16,
        }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.navigate('Такси')}}>
        <Image source={require('../../assets/images/taxi.png')} style={{
          width: 166,
          height: 78,
          marginTop: 16,
        }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.navigate('Турбазы')}}>
        <Image source={require('../../assets/images/tour_base.png')} style={{
          width: 166,
          height: 78,
          marginTop: 16,
        }} />
      </TouchableOpacity>

    </View>
  )
}

export default directions_can