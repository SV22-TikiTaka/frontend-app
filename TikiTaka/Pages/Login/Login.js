/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import Logo from '../../assets/images/Logo.png';
import Insta from '../../assets/images/instaLogo.png';
import LinearGradient from 'react-native-linear-gradient';
import * as S from './style.js';
import {styles} from './style';

export default function Login() {
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
          <View style={styles.buttonContainer}>
            <S.InstaImg source={Insta}></S.InstaImg>
            <S.LoginText>Sign In With Instagram</S.LoginText>
          </View>
        </LinearGradient>
      </S.Sign>
    </S.Main>
  );
}
