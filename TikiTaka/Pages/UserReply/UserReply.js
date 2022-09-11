/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TouchableHightlight,
} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import * as S from './style.js';
import Navbar from '../../components/navbar/Navbar.js';

const Main = styled.SafeAreaView`
  flex: 1;
  font-family: "'anton-v23-latin-regular-1'";
`;

const Reply = styled.View``;

const ReplyBox = styled.View`
  height: 180px;
  width: 70%;
  background-color: #ffffff;
  margin: 0 auto;
  margin-top: 130px;
  border-radius: 15px;
`;

const Question = styled.View`
  justify-content: center;
  align-items: center;
  height: 80px;
`;

const QuestionText = styled.Text`
  color: white;
  font-size: 18px;
  text-align: center;
`;

const ReplyInput = styled.View`
  height: 100px;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-width: 0.2px;
  border-bottom: gray;
  flex-grow: 1;
  flex-shrink: 1;
`;

const ReplyInputText = styled.TextInput`
  font-size: 18px;
  width: 100%;
  height: 300px;
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;
  font-weight: bold;
  color: black;
`;

const ReplyButton = styled.TouchableHighlight`
  width: 70%;
  height: 60px;
  background-color: red;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
`;

const ReplyButtonText = styled.Text`
  font-size: 24px;
`;

export const styles = StyleSheet.create({
  grediant: {
    height: 65,
    width: '65%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 27,
    marginTop: 50,
  },
  buttonContainer: {
    borderRadius: 24,
    flex: 1.0,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: '97%',
    height: '30%',
    marginTop: 3,
    marginBottom: 3,
    flexDirection: 'row',
  },
  replyBoxGrediant: {
    height: 85,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  replyBoxContainer: {},
});

export default function UserReply() {
  const [replyText, setReplyText] = useState('');

  //text에 쓴거 저장
  const onChangeReply = e => {
    if (e?.target.value) {
      setReplyText(() => e.target.value);
    }
  };

  return (
    <Main>
      <Navbar />
      <ReplyBox style={styles.shadow}>
        <LinearGradient
          colors={['#8F8F8F', '#FF8F8F']}
          start={{x: 1.0, y: 0.0}}
          end={{x: 0.0, y: 1.0}}
          style={styles.replyBoxGrediant}>
          <Question style={styles.replyBoxContainer}>
            <QuestionText>WHAT DO YOU THINK ABOUT MENTOR ANDREW?</QuestionText>
          </Question>
        </LinearGradient>
        <ReplyInput>
          <ReplyInputText
            style={{flexShrink: 1}}
            multiline={true}
            numberOfLines={2}
            maxLength={100}
            onChangeText={() => onChangeReply}></ReplyInputText>
        </ReplyInput>
      </ReplyBox>

      <LinearGradient
        colors={['#8F8F8F', '#FF8F8F']}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 1.0}}
        style={styles.grediant}>
        <ReplyButton style={styles.buttonContainer}>
          <ReplyButtonText>REPLY!</ReplyButtonText>
        </ReplyButton>
      </LinearGradient>
    </Main>
  );
}
