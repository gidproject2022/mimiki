import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import Base from './Base'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

const Objects = () => {
  return (
    <ScrollView style={{
        marginTop: 20,
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