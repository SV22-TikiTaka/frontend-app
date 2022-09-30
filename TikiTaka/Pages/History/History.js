import React, {useState, useEffect, useContext} from 'react';
//prettier-ignore
import {View,Text,ScrollView,TouchableOpacity,StyleSheet,SafeAreaView,Button,LayoutAnimation,Platform,UIManager,} from 'react-native';
import Header from '../../components/Header/Header';
import * as S from './style.js';
import {styles} from './style';
import {DATA} from './data';
import themeContext from '../../config/themeContext.js';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ExpandableComponent = ({item, onClickFuntion}) => {
  const [layoutHeight, setlayoutHeight] = useState(0);
  const theme = useContext(themeContext);

  useEffect(() => {
    if (item.isExpanded) {
      setlayoutHeight(null);
    } else {
      setlayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <S.Container>
      {(() => {
        if (item.type === 'normal' ) {
          return (
            <>
              <S.QuestionContainer
                style={{backgroundColor: theme.background, borderColor :'#8f81b5' }}
                onPress={onClickFuntion}>
                <S.QuestionText style ={{color:'#8f81b5'}}>
                  {item.question}
                </S.QuestionText>
              </S.QuestionContainer>
              <S.AnswerContainer
                style={{height: layoutHeight, overflow: 'hidden'}}>
                {item.answer.map((item, key) => (
                  <S.AnswerList key={key}>
                    <S.AnswerText style={[styles.text,{color: '#8f81b5'}]}>
                      {key+1}. {item.val}
                    </S.AnswerText>
                    <View style={styles.separator} />
                  </S.AnswerList>
                ))}
              </S.AnswerContainer>
            </>
          );
        } else if (item.type === 'challenge') {
          return (
            <View>
              <S.QuestionContainer
                style={{backgroundColor: theme.background, borderColor: 'red'}}
                onPress={onClickFuntion}>
                <S.QuestionText style={{color: 'red'}}>
                  {item.question}
                </S.QuestionText>
              </S.QuestionContainer>
              <S.AnswerContainer
                style={{height: layoutHeight, overflow: 'hidden'}}>
                {item.answer.map((item, key) => (
                  <S.AnswerList key={key}>
                    <S.AnswerText style={[styles.text,{color: 'red'}]}>
                      {key+1}. {item.val}
                    </S.AnswerText>
                    <View style={styles.separator} />
                  </S.AnswerList>
                ))}
              </S.AnswerContainer>  
            </View>
          );
        }else if (item.type === 'vote') {
          //{id: 3, val: '토끼', count: 1},
          return (
            <>
              <S.QuestionContainer
                style={{backgroundColor: theme.background, borderColor:'#008f7a'}}
                onPress={onClickFuntion}>
                <S.QuestionText  style={{color: '#008f7a'}}>
                  {item.question}
                </S.QuestionText>
              </S.QuestionContainer>
              <S.AnswerContainer
                style={{height: layoutHeight, overflow: 'hidden'}}>
                {item.answer.map((item, key) => (
                  <S.AnswerList key={key}>
                    <S.AnswerText style={styles.voteText}>
                      {item.val}:{item.count}
                    </S.AnswerText>
                    <View style={styles.separator} />
                  </S.AnswerList>
                ))}
              </S.AnswerContainer>
            </>
          );
        }
      })()}
    </S.Container>
  );
};
const History = () => {
  const Title = 'HISTORY';
  const TitleColor = '#FF8F8F';
  const theme = useContext(themeContext);
  const [userId, setUserId] = useState('');

  AsyncStorage.getItem('user_id', (err, result) => {
    setUserId(JSON.parse(result));
  });
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  const updateLayout = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...data];
    array[index]['isExpanded'] = !array[index]['isExpanded'];
    setData(array);
  };

  const [data,setData] = useState([]);

  //make datalist and push questions
  useEffect(() => {
    (async () =>{
    const response = await axios.get(`https://letstikitaka.com/api/v1/questions/history/${userId}`);
    const questions = response.data;
    const datalist = questions.map(question => {
      return{
        isExpanded:false,
        question: question.question,
        type: question.type,
        answer: question.answer
      }
    })
    setData(datalist) 
    }) ();
  },[]); 

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.background}}>
      <Header Title={Title} TitleColor={TitleColor} />
      <ScrollView>
        {data.map((item, key) => (
          <ExpandableComponent
            key={item.question}
            item={item}
            onClickFuntion={() => {
              updateLayout(key);
            }}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default History;
