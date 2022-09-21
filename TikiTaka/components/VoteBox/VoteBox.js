import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as S from './style';

const VoteBox = () => {
  const addIcon = <Icon name="add-outline" size={23} color="grey" />;
  const deleteIcon = <Icon name="trash-outline" size={23} color="red"/>;

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
  return (
    <View style={{flex: 1}}>
      <S.component style={styles.shadow}>
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
