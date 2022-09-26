/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState, useContext, useEffect} from 'react';
import {View, SafeAreaView, ScrollView, Text, Dimensions} from 'react-native';
import * as S from './style.js';
import Header from '../../components/Header/Header.js';
import {styles} from './style';
import Modal from '../../components/modal/Modal.js';
import Icon from 'react-native-vector-icons/Ionicons';
import {data} from './data.js';
import themeContext from '../../config/themeContext.js';
import styled from 'styled-components/native';
import {showUser} from '../Settings/Settings.js';
import axios from 'axios';

export default function Inbox() {
  const [questionData, setQuestionData] = useState([]);

  (async () => {
    const response = await axios
      .get('http://localhost:8000/api/v1/questions/random?type=challenge')
      .then(res => {
        console.log(res.data);
      });
  })();

  (async () => {
    const response = await axios
      .get('http://localhost:8000/api/v1/comments/questions/1')
      .then(res => {
        console.log(res.data);
      });
  })();

  // useEffect(() => {
  //     await axios
  //       .post('http://localhost:8000/api/v1/questions', {
  //         content: '밥 뭐먹지',
  //         user_id: 1,
  //         type: 'normal',
  //         comment_type: 'comment',
  //       })
  //       .then(res => {
  //         console.log(res.data);
  //       });
  //   })();

  //   (async () => {
  //     await axios
  //       .post('http://localhost:8000/api/v1/questions/vote', {
  //         content: '엄마 vs 아빠',
  //         user_id: 1,
  //         type: 'normal',
  //         comment_type: 'vote',
  //       })
  //       .then(res => {
  //         console.log(res.data);
  //       });
  //   })();
  // }, []);

  const Title = 'INBOX';
  const TitleColor = '#779874';
  const theme = useContext(themeContext);

  const closedMail = <Icon name="mail-outline" size={60} color="black" />;
  const openMail = <Icon name="mail-open-outline" size={60} color="black" />;

  const [isModalVisible, setModalVisible] = useState(false);
  const [currentLetter, setCurrentLetter] = useState({});
  const [letters, setLetters] = useState(data);

  const toggleModal = (letter = '', index = '') => {
    setModalVisible(!isModalVisible);

    if (index) {
      let left = letters.slice(0, index);
      let right = letters.slice(index + 1);
      let letter = letters.slice(index, index + 1);
      letter[0].isOpen = true;
      setLetters([...left, ...letter, ...right]);
    }
    if (letter) {
      setCurrentLetter(() => letter);
    }
  };
  const Layout = styled.View``;

  return (
    <S.InboxContainer style={{backgroundColor: theme.background}}>
      <Header Title={Title} TitleColor={TitleColor} />
      <ScrollView>
        <Layout style={{width: Dimensions.get('window').width * 1}}>
          <View style={styles.gridView}>
            {letters.map((letter, index) => {
              return (
                <S.MailBox
                  key={index}
                  style={{backgroundColor: theme.mailboxcolor}}
                  onPress={() => toggleModal(letter, index)}>
                  {letter.isOpen ? (
                    <Text>{openMail}</Text>
                  ) : (
                    <Text>{closedMail}</Text>
                  )}
                </S.MailBox>
              );
            })}
          </View>
        </Layout>
      </ScrollView>

      {isModalVisible ? (
        <Modal currentLetter={currentLetter} toggleModal={toggleModal} />
      ) : null}
    </S.InboxContainer>
  );
}
