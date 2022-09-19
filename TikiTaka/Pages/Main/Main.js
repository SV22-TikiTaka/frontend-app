/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  Platform,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import * as S from './style.js';
import Header from '../../components/Header/Header.js';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import QuestionBox from '../../components/QuestionBox/QuestionBox';
import VoteBox from '../../components/VoteBox/VoteBox';
import Challenge from '../../assets/images/Challenge.png';
import Anything from '../../assets/images/Anything.png';

//Random Normal questions dummy data
const NDATA = [
  '아무거나 물어봐!',
  '평소에 나한테 못 한 말은?',
  '내 첫인상은?',
  '다른 사람으로 살 수 있다면 누구로 살아보고싶어?',
  '갖고 싶은 초능력은?',
  '내 장점 3가지!',
  '내 단점 3가지!',
  'MBTI 적고 가!',
];

//Random challenge questions dummy data
const CDATA = [
  '시키는거 다 할게!',
  '살면서 가장 쪽팔렸던 경험?',
  '🔞가장 아찔했던 순간은🔞?',
  '아주 사소한 물건이라도 도둑질해본 적 있다/없다?',
  '하루아침에 성별이 바뀌었다면 제일 먼저 나는…',
  '가장 좋은 관계 타이밍 (아침,점심,저녁)',
];

export default function Main() {
  const Title = 'MAIN';
  const TitleColor = '#ff8f8f';
  const addIcon = <Icon name="add-circle-outline" size={26} color="white" />;

  const arrowRight = (
    <Icon name="chevron-forward-outline" size={20} color="#ff8f8f" />
  );
  const arrowLeft = (
    <Icon name="chevron-back-outline" size={20} color="#ff8f8f" />
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

  //challenge random text
  const [normalindex, setNormalIndex] = useState(0);
  const [normal, setNormal] = useState(null);

  const randomNormal = () => {
    if (normalindex !== NDATA.length - 1) {
      setNormalIndex(normalindex + 1);
      setNormal(NDATA[normalindex]);
    } else {
      setNormalIndex(0);
      setNormal(NDATA[normalindex]);
    }
  };

  //challenge random text
  const [challengeindex, setChallengeIndex] = useState(0);
  const [challenge, setChallenge] = useState(null);

  const randomChallenge = () => {
    if (challengeindex !== CDATA.length - 1) {
      setChallengeIndex(challengeindex + 1);
      setChallenge(CDATA[challengeindex]);
    } else {
      setChallengeIndex(0);
      setChallenge(CDATA[challengeindex]);
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
          setquestionType={setNormal}
          randomeQuestion={randomNormal}
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
          setquestionType={setChallenge}
          randomeQuestion={randomChallenge}
        />
      ),
    },
  ];

  return (
    <S.Main>
      <Header Title={Title} TitleColor={TitleColor} />
      <ScrollView>
        <View style={styles.flatListContainer}>
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
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
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
              style={styles.button}
              onPress={() => {
                if (index === data.length - 1) {
                  return;
                } else {
                  setIndex(index + 1);
                }
              }}>
              <Text> {arrowRight}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <S.AddStory style={styles.shadow}>
          <S.TextStory>{addIcon}</S.TextStory>
          <S.TextStory style={{fontFamily: 'SB 어그로 M'}}>
            ADD TO YOUR STORY !
          </S.TextStory>
        </S.AddStory>
        <S.VoteContainer>
          <VoteBox />
          <S.AddStory style={styles.shadow}>
            <S.TextStory>{addIcon}</S.TextStory>
            <S.TextStory style={{fontFamily: 'SB 어그로 M'}}>
              ADD TO YOUR STORY !
            </S.TextStory>
          </S.AddStory>
        </S.VoteContainer>
      </ScrollView>
    </S.Main>
  );
}
