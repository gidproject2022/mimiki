import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';


import Navigation from './Navigation/Navigaiton';

async function loadAppAplication() {
  await Font.loadAsync({
    'Roboto': require('./assets/fonts/Roboto-MediumItalic.ttf'),
    'Inspiration': require('./assets/fonts/Inspiration-Regular.ttf'),
  });
}



const App = () => {
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
    <View style={{ width: '100%', height: '100%', overflow: 'hidden'}}>
      <Navigation />
      <Text style={{fontFamily: 'Inspiration', fontSize: 90}} >sdsfsfd</Text>
      <StatusBar style="hidden" />
    </View>
  );
}


export default App