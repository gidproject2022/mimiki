import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();


const Navigation3 = () => {
  return (
      <Stack.Navigator initialRouteName='Начало'>
        <Stack.Screen name="Начало" component={Directions} options={{ headerShown: false }}/>
        <Stack.Screen name="Такси" component={Taxi} options={{ headerShown: false }}/>
        <Stack.Screen name="Аренда машины" component={Car_arenda} options={{ headerShown: false }}/>
      </Stack.Navigator>
  )
}

export default Navigation3