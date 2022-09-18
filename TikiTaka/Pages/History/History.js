import React, {useState, useEffect} from 'react';
//ignore prettier
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Button,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import Header from '../../components/Header/Header';
import * as S from './style.js';
import {styles} from './style';
import {set} from 'react-native-reanimated';

//Dummy content
const DATA = [
  {
    isExpanded: false,
    question: '내 첫인상은 어떤 이미지였어?',
    answer: [
      {id: 1, val: '강아지 상이였어'},
      {id: 2, val: '귀여웠어'},
    ],
  },
  {
    isExpanded: false,
    question: '복권에 당첨된다면?',
    answer: [
      {id: 1, val: '집 살꺼야..'},
      {id: 2, val: '회사 그만두고 세계여행할꺼야'},
      {id: 3, val: '기부할래'},
    ],
  },
  {
    isExpanded: false,
    question: '오늘 밥 뭐 먹을까?',
    answer: [
      {id: 1, val: '간장게장'},
      {id: 2, val: '된장찌개'},
      {id: 3, val: '마라탕'},
    ],
  },
  {
    isExpanded: false,
    question: '아무거나 물어봐!',
    answer: [
      {id: 1, val: '마지막으로 연락한 사람은?'},
      {id: 2, val: '만나는 사람 있어?'},
      {id: 3, val: '오늘 저녁 뭐 먹을꺼야?'},
      {id: 4, val: '고양이 이름 뭐야?'},
      {id: 5, val: '전공이 뭐야?'},
      {id: 5, val: '가장 좋아하는 계절은?'},
    ],
  },
];

const ExpandableComponent = ({item, onClickFuntion}) => {
  const [layoutHeight, setlayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setlayoutHeight(null);
    } else {
      setlayoutHeight(0);
    }
  }, [item.isExpanded]);

  //1첫번쨰 인자는 고유한 key값  2번쨰 인자는 비동기 api호출함수
  //onst comment = useQuery('showComments', showComments);
  //data , error, isLoading:로딩중일때 true 끝나면 false
  //const {data, error, isLoading} = comment;

  //로딩중에 나오는 컴포넌트
  //if (isLoading) return <Component>...</Component>;
  //에러가 생긴다면 나오는 컴포넌트
  //if (error) return <Component>...</Component>;

  return (
    <S.Container>
      <S.QuestionContainer onPress={onClickFuntion}>
        <S.QuestionText>{item.question}</S.QuestionText>
      </S.QuestionContainer>
      <S.AnswerContainer style={{height: layoutHeight, overflow: 'hidden'}}>
        {item.answer.map((item, key) => (
          <S.AnswerList key={key}>
            <S.AnswerText style={styles.text}>
              {key + 1}. {item.val}
            </S.AnswerText>
            <View style={styles.separator} />
          </S.AnswerList>
        ))}
      </S.AnswerContainer>
    </S.Container>
  );
};
const History = () => {
  const Title = 'HISTORY';
  const TitleColor = '#FF8F8F';
  const [data, setData] = useState(DATA);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  const updateLayout = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...data];
    array[index]['isExpanded'] = !array[index]['isExpanded'];
    setData(array);
  };

  return (
    <View style={{fontFamily: 'BlackHanSans-Regular'}}>
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
    </View>
  );
};

export default History;
