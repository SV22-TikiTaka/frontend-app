/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
// prettier-ignore
import {Text,View,Image,StyleSheet,TouchableOpacity,SafeAreaView,TouchableHightlight,Button} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import * as S from './style.js';
import Navbar from '../../components/navbar/Navbar.js';

export default function Modall({toggleModal, currentLetter}) {
  const CloseIconPath = '../../assets/images/CloseIcon.png';
  const {reply} = currentLetter;

  return (
    <S.Main>
      <S.ReplyBox style={S.styles.shadow}>
        <S.CloseButton onPress={toggleModal}>
          <S.CloseButtonImage
            source={require(CloseIconPath)}></S.CloseButtonImage>
        </S.CloseButton>
        <LinearGradient
          colors={['#8F8F8F', '#FF8F8F']}
          start={{x: 1.0, y: 0.0}}
          end={{x: 0.0, y: 1.0}}
          style={S.styles.replyBoxGrediant}>
          <S.Question style={S.styles.replyBoxContainer}>
            <S.QuestionText>QUESTION GOES HERE</S.QuestionText>
          </S.Question>
        </LinearGradient>
        <S.ReplyInput>
          <S.ReplyInputText> {reply}</S.ReplyInputText>
        </S.ReplyInput>
      </S.ReplyBox>

      <LinearGradient
        colors={['#8F8F8F', '#FF8F8F']}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 1.0}}
        style={S.styles.gradient}>
        <S.ReplyButton style={S.styles.buttonContainer}>
          <S.ReplyButtonText>REPLY!</S.ReplyButtonText>
        </S.ReplyButton>
      </LinearGradient>
    </S.Main>
  );
}
