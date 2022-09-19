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
    type: 'normal',
    answer: [
      {id: 1, val: '강아지 상이였어'},
      {id: 2, val: '귀여웠어'},
    ],
  },
  {
    isExpanded: false,
    question: '복권에 당첨된다면?',
    type: 'normal',
    answer: [
      {id: 1, val: '집 살꺼야..'},
      {id: 2, val: '회사 그만두고 세계여행할꺼야'},
      {id: 3, val: '기부할래'},
    ],
  },
  {
    isExpanded: false,
    question: '오늘 밥 뭐 먹을까?',
    type: 'normal',
    answer: [
      {id: 1, val: '간장게장'},
      {id: 2, val: '된장찌개'},
      {id: 3, val: '마라탕'},
    ],
  },
  {
    isExpanded: false,
    question: '아무거나 물어봐!',
    type: 'normal',
    answer: [
      {id: 1, val: '마지막으로 연락한 사람은?'},
      {id: 2, val: '만나는 사람 있어?'},
      {id: 3, val: '오늘 저녁 뭐 먹을꺼야?'},
      {id: 4, val: '고양이 이름 뭐야?'},
      {id: 5, val: '전공이 뭐야?'},
      {id: 6, val: '가장 좋아하는 계절은?'},
    ],
  },
  //vote
  //id val count
  {
    isExpanded: false,
    question: '강아지 vs 고양이 vs 토끼',
    type: 'vote',
    answer: [
      {id: 1, val: '강아지', count: 3},
      {id: 2, val: '고양이', count: 5},
      {id: 3, val: '토끼', count: 1},
    ],
  },
  {
    isExpanded: false,
    question: '엄마 vs 아빠!',
    type: 'vote',
    answer: [
      {id: 1, val: '엄마', count: 7},
      {id: 2, val: '아빠', count: 10},
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

  return (
    <S.Container>
      {(() => {
        if (item.type === 'normal') {
          return (
            <>
              <S.QuestionContainer
                typeColor={'#FF8F8F'}
                onPress={onClickFuntion}>
                <S.QuestionText typeColor={'#FF8F8F'}>
                  {item.question}
                </S.QuestionText>
              </S.QuestionContainer>
              <S.AnswerContainer
                style={{height: layoutHeight, overflow: 'hidden'}}>
                {item.answer.map((item, key) => (
                  <S.AnswerList key={key}>
                    <S.AnswerText style={styles.text}>
                      {key + 1}. {item.val}
                    </S.AnswerText>
                    <View style={styles.separator} />
                  </S.AnswerList>
                ))}
              </S.AnswerContainer>
            </>
          );
        } else if (item.type === 'vote') {
          //{id: 3, val: '토끼', count: 1},
          return (
            <>
              <S.QuestionContainer
                typeColor={'#008f7a'}
                onPress={onClickFuntion}>
                <S.QuestionText typeColor={'#008f7a'}>
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
    <View>
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
// const History = () => {
//   const Title = 'HISTORY';
//   const TitleColor = '#FF8F8F';
//   const [data, setData] = useState(DATA);

//   if (Platform.OS === 'android') {
//     UIManager.setLayoutAnimationEnabledExperimental(true);
//   }
//   const updateLayout = index => {
//     LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
//     const array = [...data];
//     array[index]['isExpanded'] = !array[index]['isExpanded'];
//     setData(array);
//   };

//   return (
//     <View style={{fontFamily: 'BlackHanSans-Regular'}}>
//       <Header Title={Title} TitleColor={TitleColor} />
//       <ScrollView>
//         {data.map((item, key) => (
//           <ExpandableComponent
//             key={item.question}
//             item={item}
//             onClickFuntion={() => {
//               updateLayout(key);
//             }}
//           />
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

export default History;
