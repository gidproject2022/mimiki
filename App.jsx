import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Navigation from './Navigation/Navigaiton';

const App = () => {
  return (
    <View style={{ width: '100%', height: '100%', overflow: 'hidden'}}>
      <Navigation />
      <StatusBar style="hidden" />
    </View>
  );
}


export default App