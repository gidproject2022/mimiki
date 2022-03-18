import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import Base from './Base'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

const Objects = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
    style={{
        marginTop: 10,
        height: (HEIGHT - 230),
    }}>
      <Base />
      <Base />
      <Base />
      <Base />
      <Base />
      <Base />
      <Base />
      <Base />
    </ScrollView>
  )
}

export default Objects