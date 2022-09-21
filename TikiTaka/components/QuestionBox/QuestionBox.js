import React, {useState,useEffect,useRef} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { lessThan } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';

const CDATA = 
['시키는거 다 할게!', '살면서 가장 쪽팔렸던 경험?', '🔞가장 아찔했던 순간은🔞?', 
'아주 사소한 물건이라도 도둑질해본 적 있다/없다?','하루아침에 성별이 바뀌었다면 제일 먼저 나는…',
 '가장 좋은 관계 타이밍 (아침,점심,저녁)']


const QuestionBox = ({QuestionBoxTitle, QuestionBoxColor, questionType, setquestionType, randomeQuestion}) =>{
    const diceIcon = <Icon name ="shuffle-outline" size={20} color = 'black'/>;

    return (
        <View style= {[styles.component, styles.shadow , {borderColor:QuestionBoxColor, borderWidth:1}]}>
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
        marginVertical: 10,
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
  