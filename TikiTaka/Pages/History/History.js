import React, {useState, useEffect,useContext} from 'react';
//prettier-ignore
import {View,Text,ScrollView,TouchableOpacity,StyleSheet,SafeAreaView,Button,LayoutAnimation,Platform,UIManager,} from 'react-native';
import Header from '../../components/Header/Header';
import * as S from './style.js';
import {styles} from './style';
import {set} from 'react-native-reanimated';
import {DATA} from './data';
import themeContext from '../../config/themeContext.js';

const ExpandableComponent = ({item, onClickFuntion}) => {
  const [layoutHeight, setlayoutHeight] = useState(0);
  const theme =  useContext(themeContext);

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
                style = {{backgroundColor:theme.background}}
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
                style = {{backgroundColor:theme.background}}
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
  const theme =  useContext(themeContext);

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
