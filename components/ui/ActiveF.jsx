import { View, Text } from 'react-native'
import React from 'react'

const ActiveF = () => {
  return (
    <View style={{
        height: 30,
        width: 'auto',
        borderRadius: 10,
        backgroundColor: '#7573FF',
        paddingHorizontal: 7,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 14,
    }}>
        <Text style={{
            color: 'white',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: '500',
            fontFamily: 'Roboto-Medium',
            lineHeight: 16.8,
        }}>Турбазы</Text>
    </View>
  )
}

export default ActiveF