/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import * as S from './style.js';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Entypo';
import Sound from 'react-native-sound';

export default function Modal({toggleModal, currentLetter}) {
  const CloseIconPath = '../../assets/images/CloseIcon.png';
  const [toggleSound, setToggleSound] = useState(true);
  const {reply, path = ''} = currentLetter;
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

  let music = new Sound(path, null, error => {
    if (error) {
      console.log('play failed');
    }
  });

  return (
    <S.Modal>
      <BackClickClose onPress={toggleModal}>
        <Close></Close>
      </BackClickClose>
      <S.ReplyBox>
        {(() => {
          if (music) {
            return (
              <>
                <S.ComponentTop>
                  <S.TopText>QUESTION GOES HERE</S.TopText>
                </S.ComponentTop>
                <S.ComponentBottom>
                  <Icon
                    onPress={() => {
                      music.play();
                      setToggleSound(pre => !pre);
                    }}
                    name={toggleSound ? 'controller-play' : 'controller-paus'}
                    size={40}
                  />
                </S.ComponentBottom>
              </>
            );
          } else {
            return (
              <>
                <S.ComponentTop>
                  <S.TopText>QUESTION GOES HERE</S.TopText>
                </S.ComponentTop>
                <S.ComponentBottom>
                  <S.BottomText> {reply}</S.BottomText>
                </S.ComponentBottom>
              </>
            );
          }
        })()}
      </S.ReplyBox>

      <S.ReplyButton onPress={() => alert('hi')} style={styles.buttonContainer}>
        <S.ButtonText>REPLY</S.ButtonText>
      </S.ReplyButton>
    </S.Modal>
  );
}
