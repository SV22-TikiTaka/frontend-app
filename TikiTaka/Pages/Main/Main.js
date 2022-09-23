/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState, useRef, useEffect, useContext} from 'react';
//prettier-ignore
import {View,StyleSheet,Text,SafeAreaView,TextInput,Platform,Image,ScrollView,FlatList,TouchableOpacity,} from 'react-native';
import * as S from './style.js';
import Header from '../../components/Header/Header.js';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import QuestionBox from '../../components/QuestionBox/QuestionBox';
import VoteBox from '../../components/VoteBox/VoteBox';
import Challenge from '../../assets/images/Challenge.png';
import Anything from '../../assets/images/Anything.png';
import Loading from '../../components/Loading/Loading.js';
import themeContext from '../../config/themeContext.js';
import axios from 'axios';

Icon.loadFont();

export default function Main() {
  const Title = 'MAIN';
  const TitleColor = '#ff8f8f';
  const theme =  useContext(themeContext);

  const arrowRight = (
    <Icon name="chevron-forward-circle-outline" size={30} color="#ff8f8f" />
);
  const arrowLeft = (
    <Icon name="chevron-back-circle-outline" size={30} color="#ff8f8f" />
  );

  //this is for swiping the component box
  const ref = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated: true,
    });
  }, [index]);

  //normal random text
  const [normalIndex, setNormalIndex] = useState(0);
  const [normal, setNormal] = useState(null);

  const randomNormal = async () => {
    const response = await axios({
      url: 'http://0.0.0.0:8000/api/v1/questions/random?type=normal',
      method: 'get',
    });
    const normalQuestion = response.data;
    if (normalIndex !== normalQuestion.length -1) {
      setNormalIndex(normalIndex + 1);
      setNormal(normalQuestion[normalIndex].content);
    } else {
      setNormalIndex(0);
      setNormal(normalQuestion[normalIndex].content);
    }
  };

  //challenge random text
  const [challengeIndex, setChallengeIndex] = useState(0);
  const [challenge, setChallenge] = useState(null);

  const randomChallenge = async() => {
    const response = await axios({
      url: 'http://0.0.0.0:8000/api/v1/questions/random?type=challenge',
      method: 'get',
    });
    const challengeQuestion = response.data;
    if (challengeIndex !== challengeQuestion.length - 1) {
      setChallengeIndex(challengeIndex + 1);
      setChallenge(challengeQuestion[challengeIndex].content);
    } else {
      setChallengeIndex(0);
      setChallenge(challengeQuestion[challengeIndex].content);
    }
  };
  //박스(일반 질문, 챌린지)
  const data = [
    {
      key: 0,
      box: (
        <QuestionBox
          QuestionBoxTitle={Anything}
          QuestionBoxColor="#8f81b5"
          questionType={normal}
          setQuestionType={setNormal}
          randomQuestion={randomNormal}
        />
      ),
    },
    {
      key: 1,
      box: (
        <QuestionBox
          QuestionBoxTitle={Challenge}
          QuestionBoxColor={'black'}
          questionType={challenge}
          setQuestionType={setChallenge}
          randomQuestion={randomChallenge}
        />
      ),
    },
  ];

  return (
    <S.Main style={{backgroundColor: theme.background }}>
      <Header Title={Title} TitleColor={TitleColor} />
      <ScrollView>
       
        <View style={styles.flatListContainer}> 
        <S.buttonContainer> 
          <TouchableOpacity
              style={styles.buttonLeft}
              onPress={() => {
                if (index === 0) {
                  return;
                } else {
                  setIndex(index - 1);
                }
              }}>
              <Text>{arrowLeft} </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonRight}
              onPress={() => {
                if (index === data.length - 1) {
                  return;
                } else {
                  setIndex(index + 1);
                }
              }}>
              <Text> {arrowRight}</Text>
            </TouchableOpacity>
          </S.buttonContainer>
          <FlatList
            ref={ref}
            initialScrollIndex={index}
            data={data}
            keyExtractor={item => item.key}
            contentContainerStyle={{paddingLeft: 5}}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item, index: findex}) => {
              return <View>{item.box}</View>;
            }}></FlatList>
          </View>
        <S.VoteContainer>
          <VoteBox />
        </S.VoteContainer>
      </ScrollView>
    </S.Main>
  );
}
