import { View, Text } from 'react-native'
import React from 'react'
import Topdirection from '../ui/Topdirection'
import Directions_can from '../ui/Directions_can'
import ForYou from '../ui/ForYou'


const Directions = ({navigation}) => {
  return (
    <View style={{
      marginTop: 0,
      paddingHorizontal: 28,
      backgroundColor: 'white',
      height: '100%',
  }}>
      <Topdirection />
      <Directions_can />
      <ForYou />
    </View>
  )
}

export default Directions