/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import * as S from './style.js';
import Header from '../../components/Header/Header.js';
import {styles} from './style';
import Loading from '../../components/Loading/Loading.js';

export default function Main() {
  const Title = 'CREATE';
  const TitleColor = '#ff8f8f';
  const RollIconPath = '../../assets/images/roll.png';
  const PencilIconPath = '../../assets/images/pencil.png';
  const AddIconPath = '../../assets/images/add.png';
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
          <S.PencilButton style={styles.shadow}>
            <S.RollIcon source={require(RollIconPath)} />
          </S.PencilButton>
          <S.RollButton style={styles.shadow}>
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
