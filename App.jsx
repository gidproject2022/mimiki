import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';


import Navigation from './Navigation/Navigaiton';
import Autorization from './components/Autorization/Autorization';
import Registration from './components/Registration/Registration';

import firebase from "firebase/app";
import "firebase/auth";

async function loadAppAplication() {
  await Font.loadAsync({
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto': require('./assets/fonts/Roboto-MediumItalic.ttf'),
    'Inspiration': require('./assets/fonts/Inspiration-Regular.ttf'),
  });
}

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const firebaseConfig = {
    apiKey: "AIzaSyA_LxB2CB4q9755gJYSjkCnd6udWUJi49A",
    authDomain: "fire-auth-62a2d.firebaseapp.com",
    projectId: "fire-auth-62a2d",
    storageBucket: "fire-auth-62a2d.appspot.com",
    messagingSenderId: "686435908738",
    appId: "1:686435908738:web:4bf052e5b287188f94089b",
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });
  const [isReady, setIsReady] = useState(false);
  if (!isReady) {
    return (
      <AppLoading 
        startAsync={loadAppAplication} 
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    )
  }

  return (
    <NavigationContainer>
        {isLoggedIn ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Навигация"
              component={Navigation}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Войти"
              component={Autorization}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Регистрация"
              component={Registration}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
  );
}


export default App