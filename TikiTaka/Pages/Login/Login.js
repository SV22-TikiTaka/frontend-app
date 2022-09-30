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
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

//this.props.navigation.navigate('Home')
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: '',
      token: '', 
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('user_token', (err, result) => {
      console.log(result);
      if (result) {
        this.props.navigation.navigate('Home');
      }
    });
  }
  setIgToken = data => {
    axios({
      method: 'get' , 
      url : 'https://letstikitaka.com/api/v1/insta/get-long-token', 
      headers: 
      {'short-token' : data.access_token,}
    }).then(res => {
      console.log(res.data)
      AsyncStorage.setItem('user_token', res.data.access_token, () =>{})
      this.setState({token: res.data.access_token}); 
    });
    AsyncStorage.getItem('user_token', (err, result) => {
      console.log('난 토큰이야' + result);
      this.setState({...result});
  })}
    
    

  render() {
    return this.state.token ? (
      this.props.navigation.navigate('Home')
    ) : (
      <S.Main style={{backgroundColor: 'white'}}>
        <S.MainImg source={logoWname} style={{resizeMode: 'contain'}} />
        {/* onpress = { () =>  navigation.navigate('Home') } */}
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.instagramLogin.show()}>
          <S.InstaImg source={Insta}></S.InstaImg>
          <S.LoginText style={{color: 'black'}}>
            Sign in with Instagram
          </S.LoginText>
        </TouchableOpacity>
        {this.state.failure && (
          <View>
            <Text style={{margin: 10}}>
              failure: {JSON.stringify(this.state.failure)}
            </Text>
          </View>
        )}
        <InstagramLogin
          ref={ref => (this.instagramLogin = ref)}
          appId="1958586991003560"
          appSecret="55affc04e857dcfe5776698aa8b89789"
          redirectUrl="https://letstikitaka.com/redirect"
          scopes={['user_profile']}
          onLoginSuccess={this.setIgToken}
          onLoginFailure={data => console.log(data)}
        />
      </S.Main>
    );
  }
}
