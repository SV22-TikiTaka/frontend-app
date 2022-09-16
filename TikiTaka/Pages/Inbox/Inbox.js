/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import * as S from './style.js';
import closedmail from '../../assets/images/closedmail.png';
import openmail from '../../assets/images/openmail.png';
import Header from '../../components/Header/Header.js';
import {styles} from './style';
import {closedMail} from './style';
import Modal from '../../components/modal/Modal.js';

export default function Inbox() {
  const Title = 'INBOX';
  const TitleColor = '#779874';
  const AddIcon = '../../assets/images/add.png';
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentLetter, setCurrentLetter] = useState({});
  const [letters, setLetters] = useState([
    {
      reply: '가',
      isOpen: true,
    },
    {
      reply: '나',
      isOpen: true,
    },
    {
      reply: '다',
      isOpen: true,
    },
    {
      reply: '라',
      isOpen: false,
    },
    {
      reply: '마',
      isOpen: false,
    },
    {
      reply: '바',
      isOpen: false,
    },
    {
      reply: '사',
      isOpen: true,
    },
  ]);

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
    <View style={{fontFamily: "'anton-v23-latin-regular-1'"}}>
      <Header Title={Title} TitleColor={TitleColor} />
      <ScrollView>
        <View style={S.styles.stylegridView}>
          {letters.map((letter, index) => {
            return (
              <>
                <S.MailBox onPress={() => toggleModal(letter, index)}>
                  <S.closedMail
                    source={
                      letter.isOpen ? openmail : closedmail
                    }></S.closedMail>
                </S.MailBox>
              </>
            );
          })}
        </View>
      </ScrollView>

      <S.MoreMessages style={styles.shadow}>
        <S.AddIcon source={require(AddIcon)}></S.AddIcon>
        <S.StyledText>GET MORE MESSAGES!</S.StyledText>
      </S.MoreMessages>
      {isModalVisible ? (
        <Modal currentLetter={currentLetter} toggleModal={toggleModal} />
      ) : null}
    </View>
  );
}
