/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import Logo from '../../assets/images/Logo.png';
import Insta from '../../assets/images/instaLogo.png';
const Main = styled.View``;

const MainLogo = styled.View`
  margin-top: 220px;
`;

const MainImg = styled.Image`
  width: 85px;
  height: 75px;
  margin: -15px auto;
`;

const InstaImg = styled.Image`
  width: 35px;
  height: 35px;
`;

const Name = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const LeftText = styled.Text`
  font-family: 'Anton';
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  color: #779874;
`;

const RightText = styled(LeftText)`
  color: #ff8f8f;
`;

const Sign = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 170px auto;
  padding: 15px 25px;
  background: rgba(255, 253, 253, 0.8);
  border-radius: 20px;
  border: 1.2px solid blue;
`;

const LoginText = styled.Text`
  font-family: 'Anton';
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  margin-left: 10px;
  color: #070707;
  width: 210px;
`;

export default function Login() {
  return (
    <Main>
      <MainLogo>
        <MainImg source={Logo} />
        <Name>
          <LeftText>TiKi</LeftText>
          <RightText>TaKa</RightText>
        </Name>
      </MainLogo>
      <Sign>
        <InstaImg source={Insta}></InstaImg>
        <LoginText>Sign In With Instagram</LoginText>
      </Sign>
    </Main>
  );
}
