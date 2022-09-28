/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useEffect} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import styled from 'styled-components/native';
import Logo from '../../assets/images/Logo.png';
import Insta from '../../assets/images/instaLogo.png';
import LinearGradient from 'react-native-linear-gradient';
import * as S from './style.js';
import {styles} from './style';
import axios from 'axios';
import Hyperlink from 'react-native-hyperlink';
const link =
  'https:api.instagram.com/oauth/authorize?client_id=1958586991003560&redirect_uri=https://letstikitaka.com/redirect&scope=user_profile,user_media&response_type=code';
export default function Login() {
  useEffect(() => {
    (async () => {
      await axios.get('http://localhost:8000/api/v1/authorize');
    })();
  }, []);

  function openURL(url) {
    //웹피이지 url에 접속
    Linking.openURL(url);
  }
  return (
    <S.Main>
      {/* 중앙 메인 로고 */}
      <S.MainLogo>
        <S.MainImg source={Logo} />
        <S.Name>
          <S.LeftText>TiKi</S.LeftText>
          <S.RightText>TaKa</S.RightText>
        </S.Name>
      </S.MainLogo>

      <S.Sign>
        <LinearGradient
          colors={['#8F8F8F', '#FF8F8F']}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={styles.grediant}>
          {/* 로그인 버튼 */}
          <Hyperlink
            linkStyle={{fontSize: 8, color: '#505050'}}
            onPress={() => openURL(link)}>
            <View style={styles.buttonContainer}>
              <S.InstaImg source={Insta}></S.InstaImg>
              <S.LoginText>Sign In With Instagram</S.LoginText>
            </View>
          </Hyperlink>
        </LinearGradient>
      </S.Sign>
    </S.Main>
  );
}
