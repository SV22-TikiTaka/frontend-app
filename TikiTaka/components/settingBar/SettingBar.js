import React, {useState} from 'react';

import {Text, View, StyleSheet, Platform} from 'react-native';
import * as S from './style';
const SettingBar = () => {
  const homeIconPath = '../../assets/images/config.png';

  return (
    <S.Nav>
      <S.Title>SETTINGS</S.Title>
      <S.HomeIcon source={require(homeIconPath)}></S.HomeIcon>
    </S.Nav>
  );
};

export default SettingBar;
