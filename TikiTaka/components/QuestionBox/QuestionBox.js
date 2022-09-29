import React, {useState, useEffect, useRef, useContext} from 'react';
//prettier-ignore
import {View,Switch,Text,StyleSheet,Image,TextInput,TouchableOpacity,Linking,Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {captureRef} from 'react-native-view-shot';
import Share from 'react-native-share';
import themeContext from '../../config/themeContext.js';
import Clipboard from '@react-native-clipboard/clipboard';

import * as S from './style';
import axios from 'axios';

//prettier-ignore
const QuestionBox = ({QuestionBoxTitle,QuestionBoxColor,question,setQuestion,randomQuestion}) => {
  const shuffleIcon = <Icon name="shuffle-outline" size={20} />;
  const shareIcon = (
    <Icon name="paper-plane-outline" size={20} color="#ff8f8f" />
  );
  const [optionToggle, setOptionToggle] = useState(false);
  const OptionToggleSwitch = () =>
    setOptionToggle(previousState => !previousState);

  const theme = useContext(themeContext);
  const thumbColorOn = Platform.OS === 'android' ? '#ff8f8f' : '#ff8f8f';
  const thumbColorOff = Platform.OS === 'android' ? '#ff8f8f' : '#ff8f8f';
  const trackColorOn = Platform.OS === 'android' ? '#779874' : '#779874';
  const trackColorOff = Platform.OS === 'android' ? '#779874' : '#779874';

  const [showInstagramStory, setShowInstagramStory] = useState(false);
  const viewRef = useRef();
  useEffect(() => {
    {
      Platform.OS === 'ios'
        ? Linking.canOpenURL('instagram://')
            .then(val => setShowInstagramStory(val))
            .catch(err => console.error(err))
        : Share.isPackageInstalled('com.instagram.android')
            .then(({isInstalled}) => setShowInstagramStory(isInstalled))
            .catch(err => console.error(err));
    }
  });
  const shareQuestionBox = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 0.7,
      });
      if (showInstagramStory) {
        await Share.shareSingle({
          stickerImage: uri,
          social: Share.Social.INSTAGRAM_STORIES,
        });
      }
      await Share.open({url: uri});
    } catch (err) {
      console.error(err);
    }
  };

  async function createQuestion() {
    await axios({
      url: 'http://0.0.0.0:8000/api/v1/questions/',
      method: 'post',
      data: {
        content: question,
        user_id: 1,
        type: 'normal',
        comment_type: optionToggle ? 'text' : 'sound',
      },
    })
      .then(response => {
        console.log('question created' + response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

 
  const [url, setURL] = useState('');
  async function getUrl() {
    try {
      const result = await axios.get(
        'http://localhost:8000/api/v1/users/url/?user_id=1&question_id=8',
      );
      console.log(result.data);
      setURL(result.data);
      console.log(url)
    } catch (error) {
      console.log(error);
    }
  } 
  
  const copyToClipboard = (text) => {
    Clipboard.setString(text);
    alert('URL Copied to Clipboard!');
  };

  const functionCombined = async () => {
    await shareQuestionBox();
    await createQuestion();
    await getUrl();
  };

  //content 값이랑 queston type 어떻게 받을지 생각

  return (
    <View>
      <View
        ref={viewRef}
        style={[
          styles.component,
          styles.shadow,
          {borderColor: QuestionBoxColor, borderWidth: 1},
        ]}>
        <View
          style={[styles.componentTop, {backgroundColor: QuestionBoxColor}]}>
          <Image source={QuestionBoxTitle} style={styles.image}></Image>
        </View>
        <View style={styles.componentBottom}>
          <TextInput
            style={styles.input}
            onChangeText={setQuestion}
            value={question}
            multiline={true}
            placeholder="Type In Here..."
            maxLength={100}
          />
        </View>
      </View>

      <View style={[styles.utils, {backgrounColor: theme.background}]}>
        <View style={styles.chosenOption}>
          {optionToggle ? (
            <Text style={[styles.optionText, {color: theme.color}]}>VOICE</Text>
          ) : (
            <Text style={[styles.optionText, {color: theme.color}]}>TEXT</Text>
          )}
        </View>
        <Switch
          onValueChange={OptionToggleSwitch}
          value={optionToggle}
          thumbColor={optionToggle ? thumbColorOn : thumbColorOff}
          trackColor={{false: trackColorOff, true: trackColorOn}}
          ios_backgroundColor={trackColorOff}
        />

        <TouchableOpacity
          style={[styles.shuffle, {backgroundColor: theme.shuffle}]}
          onPress={randomQuestion}>
          <Text style={{color: theme.color}}>{shuffleIcon}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <S.ShareButton
          style={[styles.shadow, {backgroundColor: theme.background}]}
          onPressIn = {() => copyToClipboard(url)} onPress={functionCombined}>
          <S.ButtonText>{shareIcon}</S.ButtonText>
          {showInstagramStory ? (
            <S.ButtonText style={{color: theme.color}}>
              SHARE TO INSTAGRAM STORY
            </S.ButtonText>
          ) : (
            <S.ButtonText style={{color: theme.color}}> SHARE</S.ButtonText>
          )}
        </S.ShareButton>
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
  component: {
    height: 190,
    width: 290,
    borderRadius: 15,
    marginBottom: 15,
    marginHorizontal: 20,
  },
  componentTop: {
    flex: 4,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    alignItems: 'center',
  },
  componentBottom: {
    flex: 5,
    backgroundColor: 'white',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    flexDirection: 'column',
  },
  input: {
    textAlignVertical: 'top',
    marginTop: 5,
    flex: 1,
    paddingHorizontal: 20,
    fontFamily: 'SBAggroM',
  },
  image: {
    flex: 1,
    width: 250,
    height: null,
    resizeMode: 'contain',
  },
  shuffle: {
    height: 25,
    width: 45,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
  },
  utils: {
    marginHorizontal: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 4,
    borderColor: '#ff8f8f',
    marginVertical: 5,
  },
  optionText: {
    fontFamily: 'SBAggroM',
    fontSize: 11,
    marginTop: 2,
    color: 'black',
  },
  chosenOption: {
    width: 45,
    alignItems: 'center',
  },
});
