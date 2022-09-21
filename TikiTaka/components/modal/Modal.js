/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import styled from 'styled-components/native';
import * as S from './style.js';
import {styles} from './style'

export default function Modal({toggleModal, currentLetter}) {
  const CloseIconPath = '../../assets/images/CloseIcon.png';
  const {reply} = currentLetter;
  const BackClickClose = styled.TouchableWithoutFeedback`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
  `;
  const Close = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
  `;
  return (
    <S.Modal>
      <BackClickClose onPress={toggleModal}>
        <Close></Close>
      </BackClickClose>
      <S.ReplyBox>
          <S.ComponentTop>
            <S.TopText>QUESTION GOES HERE</S.TopText>
          </S.ComponentTop>
        <S.ComponentBottom>
          <S.BottomText> {reply}</S.BottomText>
        </S.ComponentBottom>
      </S.ReplyBox>

        <S.ReplyButton
          onPress={() => alert('hi')}
          style={styles.buttonContainer}>
          <S.ButtonText>REPLY</S.ButtonText>
        </S.ReplyButton>
    </S.Modal>
  );
}
