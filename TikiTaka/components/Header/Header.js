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
  const font5 = 'anton-v23-latin-regular-1';
  //if문안에서 font-size조절 가능해여
  // 폰트1~5 적용했을때 가장이쁜거 골라주세요 저는 4번
  const HeaderTitle = styled.Text`
    font-family: 'BlackHanSans-Regular';
    color: ${props => props.TitleColor};
    margin-top: 11.5px;
    font-size: ${props => {
      if (props.Title === 'CREATE') {
        return '32px';
      } else if (props.Title === 'INBOX') {
        return '34px';
      } else if (props.Title === 'SETTINGS') {
        return '32.5px';
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
