import React, {useState} from 'react';

import {Text, View, StyleSheet, Platform} from 'react-native';
import styled from 'styled-components/native';
import * as S from './style';
import {styles} from './style';
const Header = ({Title, TitleColor}) => {
  const font1 = 'Dongle-Bold';
  const font2 = 'Dongle-Light';
  const font3 = 'Dongle-Regular';
  const font4 = 'BlackHanSans-Regular';
  const font5 = 'SEBANG Gothic Bold';
  const font6 = 'Jua-Regular'
  const font7 = 'SB 어그로 B'
  const font8 = 'CookieRun Bold'

  //if문안에서 font-size조절 가능해여
  // 폰트1~5 적용했을때 가장이쁜거 골라주세요 저는 4번
  const HeaderTitle = styled.Text`
    font-family: 'SB 어그로 B' ;
    color: ${props => props.TitleColor};
    font-size: ${props => {
      if (props.Title === 'CREATE') {
        return '25px';
      } else if (props.Title === 'INBOX') {
        return '25px';
      } else if (props.Title === 'SETTINGS') {
        return '25px';
      } else if (props.Title === 'HISTORY') {
        return '25px';
      }
    }};
  `;
  return (
    <S.Header style={[styles.shadow]}>
      <HeaderTitle TitleColor={TitleColor} Title={Title}>
        {Title}
      </HeaderTitle>
    </S.Header>
  );
};

export default Header;
