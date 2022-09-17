import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

const QuestionBox = ({QuestionBoxTitle, QuestionBoxColor}) =>{
    const[text, onChangeText] =useState(null);
    return (
        <View style= {[styles.component, styles.shadow]}>
        <View style = {[styles.componentTop, {backgroundColor: QuestionBoxColor}]}>
            <Image source={QuestionBoxTitle} style = {styles.image} ></Image>
        </View>
        <View style={styles.componentBottom}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            multiline = {true}
            placeholder="Type In Here..."
            keyboardType="alphabetic"
          />
        </View>
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
      height: 180,
      width: 290,
      borderRadius:15,
      marginTop: 10,
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
    },
    input: {
      padding: 10,
      fontFamily: 'SB 어그로 M'
    },
    image:{
        flex:1,
        width: 270,
        height: null,
        resizeMode: 'contain',
    }
  })
  