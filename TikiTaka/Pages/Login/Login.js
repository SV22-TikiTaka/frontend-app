/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useContext, Component} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import logoWname from '../../assets/images/logoWname.png';
import Insta from '../../assets/images/instaLogo.png';
import * as S from './style.js';
import {styles} from './style';
import InstagramLogin from 'react-native-instagram-login';


export default class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      token: '',
    };
  }

  setIgToken = (data) => {
    console.log('data', data)
    this.setState({ token: data.access_token })
  }
  render () {
    return(
        <S.Main style ={{backgroundColor : 'white'}}>
        <S.MainImg source={logoWname} style = {{resizeMode:'contain'}}/>
        {/* onpress = { () =>  navigation.navigate('Home') } */}
        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.instagramLogin.show()}>
            <S.InstaImg source={Insta}></S.InstaImg>
            <S.LoginText style ={{color : 'black'}}>Sign in with Instagram</S.LoginText>
          </TouchableOpacity>
          <Text style = {{margin: 10, color: 'black'}}>Token :{this.state.token} </Text>
          {this.state.failure && (
          <View>
            <Text style={{ margin: 10 }}>
              failure: {JSON.stringify(this.state.failure)}
            </Text>
          </View>
        )}
          <InstagramLogin 
            ref = {ref => (this.instagramLogin = ref)}
            appId='615031730032307'
            appSecret='97bdb68956f979d4bb21ba82a51e2221'
            redirectUrl = 'https://github.com/'
            scopes = {['user_profile', 'user_media']}
            onLoginSuccess = {this.setIgToken}
            onLoginFailure={(data) => console.log(data)}
          />
    </S.Main> 
    )
  }
}
