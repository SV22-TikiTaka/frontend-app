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

export default function Modall({toggleModal}) {
  const [replyText, setReplyText] = useState('');

  //text에 쓴거 저장
  const onChangeReply = e => {
    if (e?.target.value) {
      setReplyText(() => e.target.value);
    }
  };

  return (
    <S.Main>
      <S.ReplyBox style={S.styles.shadow}>
        <S.CloseButton onPress={toggleModal}>
          <Text>닫기</Text>
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
          <S.ReplyInputText
            style={{flexShrink: 1}}
            multiline={true}
            numberOfLines={2}
            maxLength={100}
            onChangeText={() => onChangeReply}></S.ReplyInputText>
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
