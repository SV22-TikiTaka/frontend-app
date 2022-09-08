import React, {useState} from 'react';

import {Text, View, StyleSheet, Platform} from 'react-native';

import {Image} from 'react-native';

import * as S from './style';
import {styles} from './style';
const ConfigIconPath = '../../assets/images/config.png';
const Navbar = () => {
  const [leftButton, setLeftButton] = useState(false);
  const [rightButton, setRightButton] = useState(false);

  function leftToggleButton() {
    if (!leftButton) {
      setLeftButton(true);
    }

    setRightButton(false);
  }

  function rightToggleButton() {
    if (!rightButton) {
      setRightButton(true);
    }

    setLeftButton(false);
  }

  return (
    <S.Nav style={styles.shadow}>
      <S.LeftText
        onPress={leftToggleButton}
        style={{color: leftButton ? '#FF8F8F' : '#CFCFCF'}}>
        CREATE
      </S.LeftText>
      <S.LightText
        onPress={rightToggleButton}
        style={{color: rightButton ? '#779874' : '#CFCFCF'}}>
        INBOX
      </S.LightText>
      <S.ConfigView>
        <S.ConfigIcon source={require(ConfigIconPath)} />
      </S.ConfigView>
    </S.Nav>
  );
};

export default Navbar;
