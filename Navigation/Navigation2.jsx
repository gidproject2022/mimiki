import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Directions from '../components/Directions/Directions';
import Taxi from '../components/Taxi/Taxi';
import Car_arenda from '../components/Car_arenda/Car_arenda';
import Otels from '../components/Otels/Otels';
import Tour_Bases from '../components/Tour_Bases/Tour_Bases';
import Restorans from '../components/Restorans/Restorans';

const Stack = createNativeStackNavigator();


const Navigation2 = () => {
  return (
      <Stack.Navigator headerShown={false}>
        <Stack.Screen name="Начало" component={Directions} options={{ headerShown: false }}/>
        <Stack.Screen name="Такси" component={Taxi} options={{ headerShown: false }}/>
        <Stack.Screen name="Аренда машины" component={Car_arenda} options={{ headerShown: false }}/>
        <Stack.Screen name="Отели" component={Otels} options={{ headerShown: false }}/>
        <Stack.Screen name="Турбазы" component={Tour_Bases} options={{ headerShown: false }}/>
        <Stack.Screen name="Рестораны" component={Restorans} options={{ headerShown: false }}/>
      </Stack.Navigator>
  )
}

export default Navigation2