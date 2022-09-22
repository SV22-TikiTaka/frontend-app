import React, {useContext} from 'react';

import {Text, View, StyleSheet, Platform} from 'react-native';
import styled from 'styled-components/native';
import * as S from './style';
import {styles} from './style';
import themeContext from '../../config/themeContext.js';

const Header = ({Title, TitleColor}) => {
  const theme =  useContext(themeContext);

  //if문안에서 font-size조절 가능해여
  // 폰트1~5 적용했을때 가장이쁜거 골라주세요 저는 4번
  const HeaderTitle = styled.Text`
    font-family: 'SBAggroB' ;
    color: ${props => props.TitleColor};
    font-size: ${props => {
      if (props.Title === 'MAIN') {
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
    <S.Header style={[styles.shadow, {backgroundColor : theme.background, borderColor: theme.borderColor}]}>
      <HeaderTitle TitleColor={TitleColor} Title={Title}>
        {Title}
      </HeaderTitle>
    </S.Header>
  );
};

export default Header;
