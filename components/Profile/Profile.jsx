import { View, Text } from 'react-native'
import React from 'react'

import firebase from 'firebase/app';
import "firebase/auth";

const Profile = () => {
  return (
    <View>
      <Text style={{
          textAlign: 'center',
          fontSize: 40,
          marginTop: 100,
      }} onPress={() => firebase.auth().signOut()}>Выход</Text>
    </View>
  )
}

export default Profile