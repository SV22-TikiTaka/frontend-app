import React, {useState, useRef, useEffect, useContext} from 'react';
//prettier-ignore
import {View,StyleSheet,TouchableOpacity,Text,TextInput,Platform, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as S from './style';
import {captureRef} from 'react-native-view-shot';
import Share from 'react-native-share';
import themeContext from '../../config/themeContext.js';
import axios from 'axios';
import Clipboard from '@react-native-clipboard/clipboard';

const VoteBox = () => {
  const addIcon = <Icon name="add-circle-outline" size={20} />;
  const deleteIcon = <Icon name="trash-outline" size={20} color="red" />;

  const theme = useContext(themeContext);
  const [voteQuestion, setVoteQueston] = useState("");

  const [first, setFirst] = useState('');
  const [text, setText] = useState([{val: ''}]);
  const [inputNum, setInputNum] = useState(2);

  const handleChange = (i, e) => {
    const newVal = [...text];
    newVal[i].val = e;
    setText(newVal);
  };

  const addField = () => {
    if (inputNum >= 4) {
      return;
    } else {
      setText([...text, {val: ''}]);
      setInputNum(() => inputNum + 1);
    }
  };

  const removeField = i => {
    if (inputNum > 2) {
      setInputNum(() => inputNum - 1);
    }
    const newVal = [...text];
    newVal.splice(i, 1);
    setText(newVal);
  };

  //share to instagram
  const shareIcon = (
    <Icon name="paper-plane-outline" size={20} color="#ff8f8f" />
  );

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
  const shareVoteBox = async () => {
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
  const options = [];
  options.push(first)
  {text.map(val =>{
    options.push(val.val)
  })}
  console.log(options)
  console.log(voteQuestion)
  
  async function createVote() {

    await axios({
      url: 'http://0.0.0.0:8000/api/v1/questions/vote/',
      method: 'post',
      data: {
        content: voteQuestion,
        user_id: 1,
        option: options,
      },
    })
      .then(response => {
        console.log('question created');
      })
      .catch(err => {
        console.log(err);
      });
  }
  const [url, setURL] = useState('');
  async function getUrl() {
    try {
      const result = await axios.get(
        'http://localhost:8000/api/v1/users/url/?user_id=1&question_id=12',
      );
      console.log(result.data);
      setURL(result.data);
      console.log(url)
    } catch (error) {
      console.log(error);
    }
  }
  const copyToClipboard = (input) => {
    Clipboard.setString(input);
    alert('URL Copied to Clipboard!');
  };

  const functionCombined = async () => {
    await shareVoteBox();
    await createVote();
    await getUrl();
  }
  return (
    <View style={{flex: 1, marginBottom: 40, marginTop: 20}}>
      <S.component ref={viewRef} style={styles.shadow}>
        <S.componentTop>
        <TextInput
              style={styles.questioninput}
              placeholder={'INPUT QUESTION'}
              value={voteQuestion}
              onChangeText={setVoteQueston}
              maxLength={20}
              multiline={true}
              cursorColor ='white'
            />
        </S.componentTop>
        <S.componentBottom>
          {/* input fields */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={'OPTION'}
              value={first}
              onChangeText={setFirst}
              maxLength={10}
              cursorColor ='#779874'
              
            />
          </View>
          {text.map((element, index) => (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder={'OPTION'}
                value={element.val}
                onChangeText={value => handleChange(index, value)}
                maxLength={10}
                cursorColor ='#779874'
              />
            </View>
          ))}
        </S.componentBottom>
      </S.component>

      <View style={[styles.utils, {backgrounColor: theme.background}]}>
         {/*adding input box*/}
         {inputNum >= 4 ? 
         <TouchableOpacity style={styles.addOption}>
          <Text style={{color: theme.color}}>{addIcon}</Text>
          <Text style = {[styles.addText,{color: theme.color}]}>ADD OPTION</Text>
        </TouchableOpacity>  : 
          <TouchableOpacity style={styles.addOption} onPress={addField}>
            <Text style={{color: theme.color}}>{addIcon}</Text>
            <Text style = {[styles.addText,{color: theme.color}]}>ADD OPTION</Text>
          </TouchableOpacity>} 
          <View>
          {inputNum >= 3 ?  
          <TouchableOpacity
            onPress={() => removeField(inputNum-2)}
            style={styles.deleteIcon}>
            <Text>{deleteIcon}</Text>
          </TouchableOpacity> : null }
          </View>
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
  text: {
    fontFamily: 'SBAggroM',
  },
  questioninput:{
    lineHeight: 30,
    fontSize:19,
    color:'white',
    fontFamily: 'SBAggroM',
    borderColor: '#779874',
    paddingHorizontal: 33,
    marginHorizontal: 15,
    flex:1,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    lineHeight: 23,
    paddingVertical: 2,
    fontFamily: 'SBAggroM',
    borderColor: '#779874',
    borderRadius: 15,
    borderWidth: 1.5,
    paddingHorizontal: 20,
    marginTop: 10,
    marginHorizontal: 15,
    flex:1
  },
  addOption:{
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:20,

  },
  addText:{
    fontFamily: 'SBAggroM',
    fontSize:11,
    paddingTop:3,
  },
  deleteIcon: {
    justifyContent: 'center',
    marginHorizontal:20,
  },
  utils: {
    marginHorizontal: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 5,
    borderColor: '#ff8f8f',
    marginTop: 10,
  },
});

export default VoteBox;
