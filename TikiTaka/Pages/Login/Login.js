/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useContext} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import logoWname from '../../assets/images/logoWname.png';
import Insta from '../../assets/images/instaLogo.png';
import * as S from './style.js';
import {styles} from './style';
import themeContext from '../../config/themeContext.js';

const Login = ({navigation}) =>{
  const theme = useContext(themeContext);
  return (
    <S.Main style ={{backgroundColor : theme.background}}>
        <S.MainImg source={logoWname} style = {{resizeMode:'contain'}}/>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Home')}>
              <S.InstaImg source={Insta}></S.InstaImg>
              <S.LoginText style ={{color : theme.color}}>Sign in with Instagram</S.LoginText>
           </TouchableOpacity>
    </S.Main>
  );
}
export default Login;