import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Main from '../components/Main/Main';
import Profile from '../components/Profile/Profile';
import Setting from '../components/Settings/Setting';


const Navigation4 = () => {
  return (
    <Stack.Navigator initialRouteName={Main}>
        <Stack.Screen options={{headerShown: false}} name="Главный экран" component={Main} />
        <Stack.Screen options={{headerShown: false}} name="Профиль" component={Profile} />
        <Stack.Screen options={{headerShown: false}} name="Настройки" component={Setting} />
    </Stack.Navigator>
  )
}

export default Navigation4