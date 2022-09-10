/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React from 'react';
 import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
 
 import LinearGradient from 'react-native-linear-gradient';
 import * as S from './style.js';
 import Navbar from '../../components/navbar/Navbar.js';
 import {styles} from './style';
 
 export default function Inbox() {
   const AddIconPath = '../../assets/images/add.png';
   return (
     <View style={{fontFamily: "'anton-v23-latin-regular-1'"}}>
       <Navbar />
       <S.MailOutline></S.MailOutline>
       <S.AddStory style={styles.shadow}>
         <S.AddIcon source={require(AddIconPath)}></S.AddIcon>
         <S.TextStory>
           GET MORE MESSAGES!
         </S.TextStory>
       </S.AddStory>
     </View>
   );
 }
 