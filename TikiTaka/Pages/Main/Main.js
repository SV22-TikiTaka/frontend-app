/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {View,Text} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import * as S from './style.js';
import Header from '../../components/Header/Header.js';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Main() {
  const Title = 'CREATE';
  const TitleColor = '#ff8f8f';
  const diceIcon = <Icon name ="shuffle-outline" size={26} color = 'black'/>;
  const pencilIcon = <Icon name = "pencil-outline" size={24} color = 'black'/>;
  const addIcon = <Icon name = "add-circle-outline" size={26} color='white'/>;
  return (
    <View style={{fontFamily: "'anton-v23-latin-regular-1'"}}>
      <Header Title={Title} TitleColor={TitleColor} />
      <S.Tabs>
        <S.Atab style={styles.shadow}></S.Atab>
        <S.Btab style={styles.shadow}></S.Btab>
        <S.Ctab style={styles.shadow}></S.Ctab>
      </S.Tabs>
      <S.QuestionBox style={styles.shadow}>
        <LinearGradient
          colors={['#FF8F8F', '#BCBCBC']}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={{
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}>
          <S.TypeBox />
        </LinearGradient>
        <S.InputBox>
          <S.Question>
            여기에 질문이 들어간다. 대충 이런식으로 글씨가 써지겠지?
          </S.Question>
          <S.buttonContainer>
            <S.Iconbutton style={styles.shadow}>
              <Text>{pencilIcon}</Text>
            </S.Iconbutton>
            <S.Iconbutton style={styles.shadow}>
              <Text>{diceIcon}</Text>
            </S.Iconbutton>
          </S.buttonContainer>
        </S.InputBox>
      </S.QuestionBox>
      <S.JustBox></S.JustBox>
      <S.AddStory style={styles.shadow}>
        <S.TextStory>{addIcon}</S.TextStory>
        <S.TextStory style={{fontFamily: 'SB 어그로 M'}}>
           ADD  TO  YOUR  STORY !
        </S.TextStory>
      </S.AddStory>
    </View>
  );
}
