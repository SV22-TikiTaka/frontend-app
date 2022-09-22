import React, {useState,useEffect,useRef,useContext} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {captureRef} from 'react-native-view-shot';
import Share from 'react-native-share'
import themeContext from '../../config/themeContext.js';

import * as S from './style';

const QuestionBox = ({QuestionBoxTitle, QuestionBoxColor, questionType, setquestionType, randomeQuestion}) =>{
    const diceIcon = <Icon name ="shuffle-outline" size={20} color = 'black'/>;
    const shareIcon = <Icon name="paper-plane-outline" size={20} color="#ff8f8f" />;

    const theme =  useContext(themeContext);

    const[showInstagramStory, setShowInstagramStory] = useState(false);
    const viewRef = useRef();

    useEffect(() => {
      {Platform.OS === 'ios'? Linking.canOpenURL('instagram://').then((val) => setShowInstagramStory(val)).catch((err) => console.error(err))
    :Share.isPackageInstalled('com.instagram.android').then(({isInstalled}) => setShowInstagramStory(isInstalled)).catch((err) => console.error(err))}
    })
    const shareQuestionBox = async() => {
      try{
        const uri = await captureRef(viewRef, {
          format: 'png',
          quality:0.7
        });
        if(showInstagramStory){
          await Share.shareSingle({
            stickerImage: uri,
            method: Share.InstagramStories.SHARE_STICKER_IMAGE,
            social: Share.Social.INSTAGRAM_STORIES,
          })
        }
        await Share.open({url: uri});
      } catch(err){
        console.error(err);
      }
    }

    return (
      <View>
        <View ref = {viewRef} style= {[styles.component, styles.shadow , {borderColor:QuestionBoxColor, borderWidth:1}]}>
        <View style = {[styles.componentTop, {backgroundColor: QuestionBoxColor}]}>
            <Image source={QuestionBoxTitle} style = {styles.image} ></Image>
        </View>
        <View style={styles.componentBottom}>
          <TextInput
            style={styles.input}
            onChangeText={setquestionType}
            value={questionType}
            multiline = {true}
            placeholder="Type In Here..."
            maxLength={100}
          />
          <TouchableOpacity style = {styles.shuffle} onPress={randomeQuestion}>
            <Text>{diceIcon}</Text>
          </TouchableOpacity>
        </View>
        </View>
          <S.ShareButton style = {[styles.shadow,{backgroundColor:theme.background}]} onPress = {shareQuestionBox} >
            <S.ButtonText>{shareIcon}</S.ButtonText>
            {showInstagramStory? 
            <S.ButtonText style = {{color:theme.color}}> SHARE TO INSTAGRAM STORY</S.ButtonText> 
            : <S.ButtonText style = {{color:theme.color}}> SHARE</S.ButtonText>}
          </S.ShareButton>
        </View>
    );
};
export default QuestionBox;

const styles = StyleSheet.create({
    shadow: {
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: {
            width: 1.5,
            height: 1.5,
          },
          shadowOpacity: 0.5,
          shadowRadius: 5,
        },
        android: {
          elevation: 8,
        },
      }),
    },
    component:{
        height: 190,
        width: 290,
        borderRadius:15,
        marginBottom: 10,
        marginHorizontal: 20,
    },
    componentTop:{
        flex:4,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        alignItems:'center'
      
    },
    componentBottom:{
        flex:5,
        backgroundColor:'white',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        flexDirection:'column'
    },
    input: {
        textAlignVertical: 'top',
        marginTop:5,
        flex: 1,
        padding: 10,
        fontFamily: 'SBAggroM'
    },
    image:{
        flex:1,
        width: 250,
        height: null,
        resizeMode: 'contain',
    },
    shuffle:{ 
        height:30,
        width:30,
        backgroundColor:'rgba(0,0,0,0.1)',
        borderRadius:15,
        alignSelf:'flex-end',
        alignItems:'center',
        justifyContent: 'center',
        marginBottom:10,
        marginRight:10
    }
})
  