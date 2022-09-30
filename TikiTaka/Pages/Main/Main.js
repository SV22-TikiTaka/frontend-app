/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState, useRef, useEffect, useContext} from 'react';
//prettier-ignore
import {View,Animated,Text,SafeAreaView,TextInput,Platform,Image,ScrollView,FlatList,TouchableOpacity,} from 'react-native';
import * as S from './style.js';
import Header from '../../components/Header/Header.js';
import {styles} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuestionBox from '../../components/QuestionBox/QuestionBox';
import VoteBox from '../../components/VoteBox/VoteBox';
import Challenge from '../../assets/images/Challenge.png';
import Anything from '../../assets/images/Anything.png';
import Loading from '../../components/Loading/Loading.js';
import themeContext from '../../config/themeContext.js';
import axios from 'axios';
import InfoModal from './../../components/modal/InfoModal';
import Stickers from '../../assets/images/Stickers.png';
import linkscreenshot from '../../assets/images/linkscreenshot.png';
import stickerscreenshot from '../../assets/images/stickerscreenshot.png';
import putlink from '../../assets/images/putlink.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
Ionicons.loadFont();

export default function Main() {
  const Title = 'MAIN';
  const TitleColor = '#ff8f8f';
  const theme = useContext(themeContext);

  useEffect(()=>{
    AsyncStorage.getItem('user_token', (err, result) => {
      axios({
        method:'put',
        url:'https://letstikitaka.com/api/v1/users/by-access-token',
        headers: {'access-token' : result,}
      }).then(res => {
        AsyncStorage.setItem('user_id', JSON.stringify(res.data.id), () => {
        })
      })
    })
  },[])
 

  const arrowRight = (
    <Ionicons name="chevron-forward-circle-outline" size={30} color="#ff8f8f" />
  );
  const arrowLeft = (
    <Ionicons name="chevron-back-circle-outline" size={30} color="#ff8f8f" />
  );
  const helpIcon = <Ionicons name="help-outline" size={30} color="white" />;
  const closeIcon = (
    <Ionicons name="close-outline" size={35} color={theme.background} />
  );
  const [visible, setVisible] = useState(false);
  const scaleValue = useRef(new Animated.Value(0)).current;

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
      url: 'https://letstikitaka.com/api/v1/questions/random?type=normal',
      method: 'get',
    });
    const normalQuestion = response.data;
    if (normalIndex !== normalQuestion.length - 1) {
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

  const randomChallenge = async () => {
    const response = await axios({
      url: 'https://letstikitaka.com/api/v1/questions/random?type=challenge',
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
          question={normal}
          setQuestion={setNormal}
          randomQuestion={randomNormal}
          questionType = 'normal'
        />
      ),
    },
    {
      key: 1,
      box: (
        <QuestionBox
          QuestionBoxTitle={Challenge}
          QuestionBoxColor={'black'}
          question={challenge}
          setQuestion={setChallenge}
          randomQuestion={randomChallenge}
          questionType = 'challenge'
        />
      ),
    },
  ];

  return (
    <S.Main style={{backgroundColor: theme.background}}>
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

      <InfoModal visible={visible} scaleValue={scaleValue}>
        <TouchableOpacity
          style={styles.closeIconWrapper}
          onPress={() => {
            setVisible(false);
          }}>
          <Text>{closeIcon}</Text>
        </TouchableOpacity>
        <Animated.View
          style={[
            styles.shadow,
            styles.modalContainer,
            {
              backgroundColor: theme.background,
              transform: [{scale: scaleValue}],
            },
          ]}>
          <Text style={[styles.modalHeader, {color: theme.color}]}>
            How to add link to your instagram story
          </Text>
          <ScrollView style={{marginTop: 10, flexDirection: 'column'}}>
            <Text style={[styles.body, {color: theme.color}]}>
              1. A link is copied to your clipboard when you click on the share
              button.
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={[styles.body, {color: theme.color}]}>2. Click</Text>
              <Image
                style={{
                  height: 17,
                  width: 17,
                  marginHorizontal: 5,
                  resizeMode: 'contain',
                  tintColor: theme.color,
                }}
                source={Stickers}></Image>
              <Text style={[styles.body, {color: theme.color}]}> icon </Text>
            </View>
            <Image
              source={stickerscreenshot}
              style={{width: 273, height: 130, resizeMode: 'center'}}
            />
            <Text style={[styles.body, {color: theme.color}]}>
              3. Click link sticker
            </Text>
            <Image
              source={linkscreenshot}
              style={{
                width: 215,
                height: 130,
                resizeMode: 'cover',
                alignSelf: 'center',
              }}
            />
            <Text style={[styles.body, {color: theme.color}]}>
              4. Paste the link in here (& customize it!)
            </Text>
            <Image
              source={putlink}
              style={{
                width: 215,
                height: 130,
                resizeMode: 'cover',
                alignSelf: 'center',
              }}
            />
            <Text style={[styles.body, {color: theme.color}]}>
              5. Customize your story & share it 😀
            </Text>
          </ScrollView>
        </Animated.View>
      </InfoModal>

      <S.FAB style={styles.FABshadow} onPress={() => setVisible(true)}>
        <Text>{helpIcon}</Text>
      </S.FAB>
    </S.Main>
  );
}
