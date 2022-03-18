import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import SearchBar from '../ui/SearchBar'
import Filters from '../ui/Filters'
import Objects from '../ui/Objects'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

const Car_arenda = ({navigation}) => {
  return (
    <View style={{
        marginTop: 30,
        width: (WIDTH - 56),
        marginHorizontal: 28,
    }}>
        <View style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <TouchableOpacity onPress={() => {
                navigation.goBack();
            }}>
                <Image style={{
                    height: 36,
                    width: 36,
                    position: 'absolute', 
                    left: 5, 
                    top: 20,
                }} source={require('../../assets/images/arrow-left.png')} />
            </TouchableOpacity>
            
            <Text style={{
                textAlign: 'center'
            }}>Аренда машины</Text>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image source={require('../../assets/images/arrow-down.png')}/>
                <Text style={{
                    fontWeight: '400',
                    fontStyle: 'normal', 
                    fontSize: 24,
                    lineHeight: 28.8,
                    fontFamily: 'Roboto',
                    marginLeft: 8,
                }}>
                    Намский улус
                </Text>
            </View>
        </View>
        <SearchBar/>
        <Filters />
        <Objects />
    </View>
  )
}

export default Car_arenda