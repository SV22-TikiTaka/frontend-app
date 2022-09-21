/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {View,SafeAreaView, ScrollView,Text} from 'react-native';
import * as S from './style.js';
import closedmail from '../../assets/images/closedmail.png';
import openmail from '../../assets/images/openmail.png';
import Header from '../../components/Header/Header.js';
import {styles} from './style';
import Modal from '../../components/modal/Modal.js';
import Icon from 'react-native-vector-icons/Ionicons';
import {data} from './data.js';
import { closedMail } from './style';

export default function Inbox() {
  const Title = 'INBOX';
  const TitleColor = '#779874';
  const addIcon = <Icon name="add-circle-outline" size={26} color="white" />;
  const closedMail = <Icon name = "mail-outline" size={60} color='black'/>
  const openMail = <Icon name = "mail-open-outline" size={60} color='black'/>

  const [isModalVisible, setModalVisible] = useState(false);
  const [currentLetter, setCurrentLetter] = useState({});
  const [letters, setLetters] = useState(data);

  const toggleModal = (letter = '', index = '') => {
    setModalVisible(!isModalVisible);
    setCurrentLetter(() => letter);

    if (index) {
      let left = letters.slice(0, index);
      let right = letters.slice(index + 1);

      setLetters([...left, {reply: letter.reply, isOpen: true}, ...right]);
    }
  };

  return (
    <S.InboxContainer>
      <Header Title={Title} TitleColor={TitleColor} />
      <ScrollView>
        <View style={styles.gridView}>
          {letters.map((letter, index) => {
            return (
              <>
                <S.MailBox onPress={() => toggleModal(letter, index)}>
                  {letter.isOpen ? <Text>{openMail}</Text> :
                  <Text>{closedMail}</Text>}
                </S.MailBox>
              </>
            );
          })}
        </View>
      </ScrollView>
     
      {isModalVisible ? (
        <Modal currentLetter={currentLetter} toggleModal={toggleModal} />
      ) : null}
    </S.InboxContainer>
  );
}
