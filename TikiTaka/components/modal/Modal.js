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
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Sound from 'react-native-sound';

export default function Modal({toggleModal, currentLetter, modalQuestion}) {
  const CloseIconPath = '../../assets/images/CloseIcon.png';

  const [toggleSound, setToggleSound] = useState(true);
  const {reply, type} = currentLetter;
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

  let music = '';

  if (type == 'sound') {
    let music = new Sound(reply, null, error => {
      if (error) {
        console.log('play failed');
      }
    });
  }
  const playIcon = <Icon name="play" size={20} color="grey" />;
  const pauseIcon = <Icon name="pause" size={20} color="grey" />;
  //   <Icon
  //   onPress={() => {
  //     if (toggleSound) {
  //       music.play();
  //     }
  //     setToggleSound(pre => !pre);
  //   }}
  //   name={toggleSound ? 'controller-play' : 'controller-paus'}
  //   size={40}
  // />
  console.log(currentLetter);
  return (
    <S.Modal>
      <BackClickClose onPress={toggleModal}>
        <Close></Close>
      </BackClickClose>
      <S.ReplyBox>
        <S.ComponentTop>
          <S.TopText>{modalQuestion}</S.TopText>
        </S.ComponentTop>
        <S.ComponentBottom>
          {(() => {
            if (type == 'text') {
              return <S.BottomText>{reply}</S.BottomText>;
            } else if (type == 'sound') {
              return (
                <TouchableOpacity
                  onPress={() => {
                    if (toggleSound) {
                      music.play();
                    }
                    setToggleSound(pre => !pre);
                  }}>
                  {toggleSound ? (
                    <Text>{playIcon}</Text>
                  ) : (
                    <Text>{pauseIcon}</Text>
                  )}
                </TouchableOpacity>
              );
            } else if (type == 'vote') {
              return currentLetter.count.map((item, index) => {
                return (
                  <S.BottomText>
                    {currentLetter.options[index]} :{' '}
                    {currentLetter.count[index]}
                  </S.BottomText>
                );
              });
            }
          })()}
        </S.ComponentBottom>
      </S.ReplyBox>

      <S.ReplyButton onPress={() => alert('hi')} style={styles.buttonContainer}>
        <S.ButtonText>REPLY</S.ButtonText>
      </S.ReplyButton>
    </S.Modal>
  );
}
