/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import * as S from './style.js';
import Navbar from '../../components/navbar/Navbar.js';
import {styles} from './style';

export default function Main() {
  const RollIconPath = '../../assets/images/roll.png';
  const PencilIconPath = '../../assets/images/pencil.png';
  const AddIconPath = '../../assets/images/add.png';
  return (
    <View style={{fontFamily: "'anton-v23-latin-regular-1'"}}>
      <Navbar />
      <S.Taps>
        <S.Atap style={styles.shadow}></S.Atap>
        <S.Btap style={styles.shadow}></S.Btap>
        <S.Ctap style={styles.shadow}></S.Ctap>
      </S.Taps>
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
          <S.PencilButton style={styles.shadow}>
            <S.RollIcon source={require(RollIconPath)} />
          </S.PencilButton>
          <S.RollButton>
            <S.PencilIcon source={require(PencilIconPath)} />
          </S.RollButton>
        </S.InputBox>
      </S.QuestionBox>
      <S.JustBox></S.JustBox>
      <S.AddStory style={styles.shadow}>
        <S.AddIcon source={require(AddIconPath)}></S.AddIcon>
        <S.TextStory style={{fontFamily: 'anton-v23-latin-regular-1'}}>
          ADD TO YOUR STORY!
        </S.TextStory>
      </S.AddStory>
    </View>
  );
}
