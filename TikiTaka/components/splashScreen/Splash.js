/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  useRef,
  Animated,
} from 'react-native';
import styled from 'styled-components/native';
import Logo from '../../assets/images/Logo.png';
import Insta from '../../assets/images/instaLogo.png';
import LinearGradient from 'react-native-linear-gradient';
import * as S from './style.js';
import {styles} from './style';

export default function Splash() {
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
    </S.Main>
  );
}
