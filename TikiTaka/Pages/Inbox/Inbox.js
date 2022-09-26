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
  const Title = 'INBOX';
  const TitleColor = '#779874';
  const theme = useContext(themeContext);

  const closedMail = <Icon name="mail-outline" size={60} color="black" />;
  const openMail = <Icon name="mail-open-outline" size={60} color="black" />;
  const [Datalist, setDatalist] = useState([]);
  let [textData, setTextData] = useState([]);
  let [soundData, setSoundData] = useState([]);
  let [voteData, setVoteData] = useState([]);
  //make datalist and push questions
  useEffect(() => {
    (async () =>
      await axios
        .get(`http://0.0.0.0:8000/api/v1/comments/users/1/text`)
        .then(response => {
          const comments = response.data;
          const datalist = [];
          for (let i = 0; i < comments.length - 1; i++) {
            const data = new Object();
            data.isOpen = false;
            data.question_id = comments[i].question_id;
            data.reply = comments[i].content;
            data.type = comments[i].type;

            datalist.push(data);
          }
          setTextData(datalist);
        }))();

    (async () =>
      await axios
        .get(`http://0.0.0.0:8000/api/v1/comments/users/1/sound`)
        .then(response => {
          const comments = response.data;
          const datalist = [];
          for (let i = 0; i < comments.length - 1; i++) {
            const data = new Object();
            data.isOpen = false;
            data.question_id = comments[i].question_id;
            data.sound = comments[i].content;
            data.type = comments[i].type;

            datalist.push(data);
          }
          setSoundData(datalist);
        }))();

    (async () =>
      await axios
        .get(`http://0.0.0.0:8000/api/v1/comments/users/1/vote`)
        .then(response => {
          const comments = response.data;
          const datalist = [];
          for (let i = 0; i < comments.length - 1; i++) {
            const data = new Object();
            data.isOpen = false;
            data.question_id = comments[i].question_id;
            data.count = comments[i].count;
            data.type = 'vote';

            datalist.push(data);
          }
          setVoteData(datalist);
        }))();
  }, []);

  useEffect(() => {
    setDatalist([...textData, ...soundData, ...voteData]);
  }, [textData, soundData, voteData]);

  const [isModalVisible, setModalVisible] = useState(false);
  const [currentLetter, setCurrentLetter] = useState({});
  const [modalQuestion, setModalQuestion] = useState('');
  const toggleModal = (letter = '', index = -1) => {
    setModalVisible(!isModalVisible);

    if (index > -1) {
      //index가 0 이면 false라서 오류났음
      let left = Datalist.slice(0, index);
      let right = Datalist.slice(index + 1);
      let letter = Datalist.slice(index, index + 1);
      letter[0].isOpen = true;
      setDatalist([...left, ...letter, ...right]);
      console.log(letter);
      let questionId = letter[0].question_id;
      (async () =>
        axios
          .get(`http://0.0.0.0:8000/api/v1/questions/${questionId}`)
          .then(res => {
            console.log(res.data);
            setModalQuestion(res.data.content);
          }))();
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
            {Datalist.map((letter, index) => {
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
        <Modal
          modalQuestion={modalQuestion}
          currentLetter={currentLetter}
          toggleModal={toggleModal}
        />
      ) : null}
    </S.InboxContainer>
  );
}
