import React, {useState, useRef,useEffect,useContext} from 'react';
//prettier-ignore
import {View,StyleSheet,TouchableOpacity,Text,TextInput,Platform, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as S from './style';
import {captureRef} from 'react-native-view-shot';
import Share from 'react-native-share';
import themeContext from '../../config/themeContext.js';

const VoteBox = () => {
  const addIcon = <Icon name="add-outline" size={23} color="grey" />;
  const deleteIcon = <Icon name="trash-outline" size={23} color="red"/>;

  const theme =  useContext(themeContext);

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
  const shareIcon = <Icon name="paper-plane-outline" size={20} color="#ff8f8f" />;

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
          social: Share.Social.INSTAGRAM_STORIES,
        })
      }
      await Share.open({url: uri});
    } catch(err){
      console.error(err);
    }
    }

  return (
    <View style={{flex: 1, marginBottom:40,marginTop:20}}>
      <S.component ref = {viewRef} style={styles.shadow}>
        <S.componentTop>
          <S.styledText>HEY, YOU! VOTE!</S.styledText>
        </S.componentTop>
        <S.componentBottom>
          {/* input fields */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={'OPTION'}
              value={first}
              onChangeText={setFirst}
            />
          </View>
          {text.map((element, index) => (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder={'OPTION'}
                value={element.val}
                onChangeText={value => handleChange(index, value)}
              />

              {index === 0 ? null : (
                <TouchableOpacity
                  onPress={() => removeField(index)}
                  style={styles.deleteIcon}>
                  <Text>{deleteIcon}</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}

          {/*adding input box*/}
          {inputNum >= 4 ? null : (
            <TouchableOpacity style={styles.addInput} onPress={addField}>
              <Text>{addIcon}</Text>
            </TouchableOpacity>
          )}
        </S.componentBottom>
      </S.component>
          <S.ShareButton style = {[styles.shadow,{backgroundColor:theme.background}]} onPress = {shareQuestionBox} >
            <S.ButtonText>{shareIcon}</S.ButtonText>
            {showInstagramStory? 
            <S.ButtonText style = {{color:theme.color}}> SHARE TO INSTAGRAM STORY</S.ButtonText> 
            : <S.ButtonText style = {{color:theme.color}}> SHARE</S.ButtonText>}
          </S.ShareButton> 
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
  addInput: {
    borderColor: 'grey',
    borderRadius: 15,
    borderWidth: 2,
    borderStyle: 'dashed',
    paddingHorizontal: 10,
    marginTop: 10,
    marginLeft: 10,
    width: 245,
    paddingVertical: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'SBAggroM',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    lineHeight: 23,
    paddingVertical: 2,
    fontFamily: 'SBAggroM',
    borderColor: 'black',
    borderRadius: 15,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 10,
    marginLeft: 10,
    width: 245,
  },
  deleteIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
    marginLeft: 5,
  },
});

export default VoteBox;
