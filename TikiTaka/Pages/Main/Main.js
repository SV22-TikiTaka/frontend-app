/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState,useRef,useEffect} from 'react';
import { View, StyleSheet, Text, SafeAreaView, TextInput, Platform, Image,ScrollView, FlatList, TouchableOpacity } from 'react-native';
import * as S from './style.js';
import Header from '../../components/Header/Header.js';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import QuestionBox from '../../components/QuestionBox/QuestionBox';
import Challenge from '../../assets/images/Challenge.png';
import Anything from '../../assets/images/Anything.png';


//박스(일반 질문, 챌린지)
const data = [
  {
    key:0,
    box: <QuestionBox QuestionBoxTitle={Anything} QuestionBoxColor= {'#8f81b5'}/>,
  },
  {
    key:1,
    box: <QuestionBox QuestionBoxTitle={Challenge} QuestionBoxColor= {'black'}/>,
  }
]

export default function Main() {
  const Title = 'MAIN';
  const TitleColor = '#ff8f8f';
  const addIcon = <Icon name = "add-circle-outline" size={26} color='white'/>;

  const arrowRight = <Icon name = "chevron-forward-outline" size={20} color = '#ff8f8f'/>;
  const arrowLeft = <Icon name = "chevron-back-outline" size={20} color = '#ff8f8f'/>;

  const ref = useRef(null);
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated:true
    })
  },[index])
 
  return (
    <View>
      <Header Title={Title} TitleColor={TitleColor} />
      <View style = {styles.flatListContainer}>
          <FlatList 
            ref = {ref}
            initialScrollIndex = {index}
            data = {data}
            keyExtractor = {(item) => item.key}
            contentContainerStyle = {{paddingLeft:5}}
            showsHorizontalScrollIndicator = {false}
            horizontal
            renderItem={({item, index: findex}) => {
              return (
                <View>{item.box}</View> 
              )
            }}>
            </FlatList>
            <View style = {styles.buttonContainer}>
      <TouchableOpacity style = {styles.button}
      onPress={()=>{
        if (index === 0){
          return;
        }else{
          setIndex(index-1);
        }}}>
          <Text>{arrowLeft} </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button}
        onPress={()=>{
        if (index === data.length-1){
          return;
        }else{
          setIndex(index+1);
        }}}>
          <Text> {arrowRight}</Text>
        </TouchableOpacity>
        </View>
      </View>
      <S.AddStory style={styles.shadow}>
        <S.TextStory>{addIcon}</S.TextStory>
        <S.TextStory style={{fontFamily: 'SB 어그로 M'}}>
           ADD  TO  YOUR  STORY !
        </S.TextStory>
      </S.AddStory>

      <S.JustBox>
      </S.JustBox>
      <S.AddStory style={styles.shadow}>
        <S.TextStory>{addIcon}</S.TextStory>
        <S.TextStory style={{fontFamily: 'SB 어그로 M'}}>
           ADD  TO  YOUR  STORY !
        </S.TextStory>
      </S.AddStory>
    </View>
  );
}
