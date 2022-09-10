/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React from 'react';
 import {Text, View, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
 
 import LinearGradient from 'react-native-linear-gradient';
 import * as S from './style.js';
 import Navbar from '../../components/navbar/Navbar.js';
 import {styles} from './style';
 import { MoreMessage } from './style';

 export default function Inbox() {
   const AddIconPath = '../../assets/images/add.png';
   return (
     <View style={{fontFamily: "'anton-v23-latin-regular-1'"}}>
       <Navbar />
       <S.MailOutline></S.MailOutline>
       <ScrollView horizontal={false} style={S.styles.list}>
            <View style={S.styles.stylegridView}>
                <S.MailOutline></S.MailOutline>
                <S.MailOutline></S.MailOutline>
                <S.MailOutline></S.MailOutline>
                <S.MailOutline></S.MailOutline>
                <S.MailOutline></S.MailOutline>
            </View>
       </ScrollView>
       
       <S.MoreMessages style={styles.shadow}>
         <S.AddIcon source={require(AddIconPath)}></S.AddIcon>
         <S.StyledText>
           GET MORE MESSAGES!
         </S.StyledText>
       </S.MoreMessages>
     </View>
   );
 }
 