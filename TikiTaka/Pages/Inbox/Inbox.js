/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {View, ScrollView, Image, TouchableOpacity} from 'react-native';
import * as S from './style.js';
import closedmail from '../../assets/images/closedmail.png';
import openmail from '../../assets/images/openmail.png';
import Navbar from '../../components/navbar/Navbar.js';
import {styles} from './style';
import {closedMail} from './style';
import Modall from '../../components/modal/Modall.js';

export default function Inbox() {
  const AddIcon = '../../assets/images/add.png';
  const [isModalVisible, setModalVisible] = useState(false);
  const [letters, setLetters] = useState([]);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={{fontFamily: "'anton-v23-latin-regular-1'"}}>
      <Navbar />
      <ScrollView>
        <View style={S.styles.stylegridView}>
          <S.MailBox onPress={toggleModal}>
            <S.closedMail source={closedmail}></S.closedMail>
          </S.MailBox>
          <S.MailBox onPress={toggleModal}>
            <S.closedMail source={closedmail}></S.closedMail>
          </S.MailBox>
          <S.MailBox onPress={toggleModal}>
            <S.closedMail source={closedmail}></S.closedMail>
          </S.MailBox>
          <S.MailBox onPress={toggleModal}>
            <S.closedMail source={closedmail}></S.closedMail>
          </S.MailBox>
          <S.MailBox onPress={toggleModal}>
            <S.closedMail source={openmail}></S.closedMail>
          </S.MailBox>
          <S.MailBox onPress={toggleModal}>
            <S.closedMail source={openmail}></S.closedMail>
          </S.MailBox>
          <S.MailBox onPress={toggleModal}>
            <S.closedMail source={closedmail}></S.closedMail>
          </S.MailBox>
        </View>
      </ScrollView>

      <S.MoreMessages style={styles.shadow}>
        <S.AddIcon source={require(AddIcon)}></S.AddIcon>
        <S.StyledText>GET MORE MESSAGES!</S.StyledText>
      </S.MoreMessages>
      {isModalVisible ? <Modall toggleModal={toggleModal} /> : null}
    </View>
  );
}
