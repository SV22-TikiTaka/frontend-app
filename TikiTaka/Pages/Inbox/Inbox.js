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

  //make datalist and push questions
  useEffect(() => {
    axios
      .get('http://0.0.0.0:8000/api/v1/comments/users/1/text')
      .then(response => {
        const comments = response.data;
        console.log(comments);
        const datalist = [];

        for (let i = 0; i < comments.length - 1; i++) {
          const data = new Object();
          data.isOpen = false;
          data.question_id = comments[i].question_id;
          data.reply = comments[i].content;
          data.type = comments[i].type;

          datalist.push(data);
        }
        setDatalist(datalist);
      });
  }, []);

  const [isModalVisible, setModalVisible] = useState(false);
  const [currentLetter, setCurrentLetter] = useState({});

  const toggleModal = (letter = '', index = '') => {
    setModalVisible(!isModalVisible);

    if (index > -1) {
      let left = Datalist.slice(0, index);
      let right = Datalist.slice(index + 1);
      let letter = Datalist.slice(index, index + 1);
      letter[0].isOpen = true;
      setDatalist([...left, ...letter, ...right]);
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
        <Modal currentLetter={currentLetter} toggleModal={toggleModal} />
      ) : null}
    </S.InboxContainer>
  );
}
