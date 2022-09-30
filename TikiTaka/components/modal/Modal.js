/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useEffect, useState, useRef, useContext} from 'react';
import styled from 'styled-components/native';
import * as S from './style.js';
import {styles} from './style';
import {Text, TouchableOpacity, Platform, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Sound from 'react-native-sound';
import Share from 'react-native-share';
import {captureRef} from 'react-native-view-shot';
import themeContext from '../../config/themeContext.js';

export default function Modal({toggleModal, currentLetter, modalQuestion}) {
  const theme = useContext(themeContext);
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
  //currentLetter.sound
  //https://tikitaka-s3.s3.ap-northeast-2.amazonaws.com/8

  if (type === 'sound') {
    console.log('내 소리 주소', currentLetter.sound);
    music = new Sound(currentLetter.sound, null, error => {
      if (error) {
        console.log('play failed');
      }
    });
  }

  const [showInstagramStory, setShowInstagramStory] = useState(false);
  const viewRef = useRef();
  useEffect(() => {
    {
      Platform.OS === 'ios'
        ? Linking.canOpenURL('instagram://')
            .then(val => setShowInstagramStory(val))
            .catch(err => console.error(err))
        : Share.isPackageInstalled('com.instagram.android')
            .then(({isInstalled}) => setShowInstagramStory(isInstalled))
            .catch(err => console.error(err));
    }
  });
  const shareModal = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 0.7,
      });
      if (showInstagramStory) {
        await Share.shareSingle({
          stickerImage: uri,
          social: Share.Social.INSTAGRAM_STORIES,
        });
      }
      await Share.open({url: uri});
    } catch (err) {
      console.error(err);
    }
  };

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
  return (
    <S.Modal style={{backgroundColor: theme.modalbackground}}>
      <BackClickClose onPress={toggleModal}>
        <Close></Close>
      </BackClickClose>
      <S.ReplyBox ref={viewRef}>
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
                      if (music) {
                        music?.play();
                      }
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

      <S.ReplyButton onPress={shareModal} style={[styles.buttonContainer]}>
        <S.ButtonText>REPLY</S.ButtonText>
      </S.ReplyButton>
    </S.Modal>
  );
}
