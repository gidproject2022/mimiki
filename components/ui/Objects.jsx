import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

const Objects = () => {
  return (
    <ScrollView style={{
        marginTop: 20,
        backgroundColor: 'red',
        height: (HEIGHT - 200),
    }}>
      <Text>Objects</Text>
    </ScrollView>
  )
}

export default Objects