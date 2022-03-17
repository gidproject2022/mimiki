import React from 'react'
import {View, Text} from 'react-native'
import './App.css'
import companyLogo from './Img/setting.png'

const Main = () => {
  return (
    // <View style={{marginTop: 30}}>
    // <Text style={{fontFamily: 'Inspiration', fontSize: 90}}></Text></View>

    <div className='window'>
      <div className='header'>
        <div className="setting">
          <img src={companyLogo} />
        </div>
        <div className="tittleText allJust" style={{fontFamily: 'Roboto', fontWeight: 'bold'}}>Время отдыхать</div>
        <div className="profile"></div>
      </div>
      <div className='scrolling'>

      </div>
      <div className="search">

      </div>
      <div className="list">

      </div>
    </div>

  )
}

export default Main 