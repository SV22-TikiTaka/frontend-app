/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React from 'react';
 import {View, ScrollView, Image} from 'react-native';
 import * as S from './style.js';
 import closedmail from '../../assets/images/closedmail.png'
 import openmail from '../../assets/images/openmail.png'
 import Navbar from '../../components/navbar/Navbar.js';
 import {styles} from './style';

 export default function Inbox() {
   const AddIcon = '../../assets/images/add.png';

   return (
     <View style={{fontFamily: "'anton-v23-latin-regular-1'"}}>
       <Navbar />
       <ScrollView>
            <View style={S.styles.stylegridView}>
               <S.closedMail source={closedmail}></S.closedMail>
               <S.closedMail source={closedmail}></S.closedMail>
               <S.closedMail source={closedmail}></S.closedMail>
               <S.closedMail source={closedmail}></S.closedMail>
               <S.closedMail source={openmail}></S.closedMail>
               <S.closedMail source={openmail}></S.closedMail>
            </View>
       </ScrollView>
       
       <S.MoreMessages style={styles.shadow}>
         <S.AddIcon source={require(AddIcon)}></S.AddIcon>
         <S.StyledText>
           GET MORE MESSAGES!
         </S.StyledText>
       </S.MoreMessages>
     </View>
   );
 }
 