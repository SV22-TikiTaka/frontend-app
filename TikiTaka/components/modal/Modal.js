/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useEffect, useState,useRef} from 'react';
import styled from 'styled-components/native';
import * as S from './style.js';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Entypo';
import Sound from 'react-native-sound';
import Share from 'react-native-share';
import {captureRef} from 'react-native-view-shot';

export default function Modal({toggleModal, currentLetter, modalQuestion}) {
  const CloseIconPath = '../../assets/images/CloseIcon.png';
  const [toggleSound, setToggleSound] = useState(true);
  const {reply, path} = currentLetter;
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

  if (path) {
    music = new Sound(path, null, error => {
      if (error) {
        console.log('play failed');
      }
    });
  }

  const[showInstagramStory, setShowInstagramStory] = useState(false);
    const viewRef = useRef();
    useEffect(() => {
      {Platform.OS === 'ios'? Linking.canOpenURL('instagram://').then((val) => setShowInstagramStory(val)).catch((err) => console.error(err))
    :Share.isPackageInstalled('com.instagram.android').then(({isInstalled}) => setShowInstagramStory(isInstalled)).catch((err) => console.error(err))}
    })
    const shareModal = async() => {
      try{
        const uri = await captureRef(viewRef, {
          format: 'png',
          quality:0.7
        });
        if(showInstagramStory){
          await Share.shareSingle({
            stickerImage: uri,
            social: Share.Social.INSTAGRAM_STORIES,
          })
        }
        await Share.open({url: uri});
      } catch(err){
        console.error(err);
      }
    }

  return (
    <S.Modal>
      <BackClickClose onPress={toggleModal}>
        <Close></Close>
      </BackClickClose>
      <S.ReplyBox ref = {viewRef}>
        <S.ComponentTop>
          <S.TopText>{modalQuestion}</S.TopText>
        </S.ComponentTop>
        <S.ComponentBottom>
          {path ? (
            <Icon
              onPress={() => {
                if (toggleSound) {
                  music.play();
                }
                setToggleSound(pre => !pre);
              }}
              name={toggleSound ? 'controller-play' : 'controller-paus'}
              size={40}
            />
          ) : null}

          {reply ? <S.BottomText>{reply}</S.BottomText> : null}
        </S.ComponentBottom>
      </S.ReplyBox>

      <S.ReplyButton onPress={shareModal} style={styles.buttonContainer}>
        <S.ButtonText>REPLY</S.ButtonText>
      </S.ReplyButton>
    </S.Modal>
  );
}
