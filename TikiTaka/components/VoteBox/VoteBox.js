import React, {useState,useRef} from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as S from './style';

const VoteBox = () => {
    const addIcon = <Icon name = 'add-circle-outline' size={23} color = 'black'/>
    const deleteIcon = <Icon name = 'trash-outline' size={23} color='red'/>
    
    const [first, setFirst] =useState('');
    const [text,setText] = useState([{val: ''}]);
    let num = 2;

    const handleChange = (i,e) =>{
        const newVal = [...text];
        newVal[i].val = e;
        setText(newVal);
    }
    
    const addField = () => {
        setText([...text, {val:''}])
    }
    
    const removeField = (i) =>{
        const newVal = [...text];
        newVal.splice(i,1);
        setText(newVal);
    }
    return (
        <View style= {{flex: 1}}>
            <S.component style= { styles.shadow }>
                <S.componentTop>
                    <S.styledText>HEY, YOU! VOTE!</S.styledText>
                </S.componentTop>
                <S.componentBottom>
                {/* input fields */}
                    <View style = {styles.inputContainer} >
                        <TextInput
                        style = {styles.input}
                        placeholder={'OPTION'}
                        value = {first} 
                        onChangeText={setFirst}/> 
                    </View>
                    {text.map((element,index) => (
                    <View style = {styles.inputContainer} >
                        <TextInput
                        style = {styles.input}
                        placeholder={'OPTION'}
                        value = {element.val} 
                        onChangeText={value => handleChange(index ,value)}/> 
                        
                        {index ===0 ? null:
                        <TouchableOpacity onPress={() => removeField(index)} style={styles.deleteInput}>
                            <Text>{deleteIcon}</Text>
                        </TouchableOpacity> }
                        
                    </View>
                    ))}
                     
                {/*adding input box*/}
                    <TouchableOpacity style = {styles.addInput} onPress={addField}>
                        <Text>{addIcon}</Text>
                </TouchableOpacity>
                </S.componentBottom>
            </S.component>
        </View>
    );
}

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
    addInput:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontFamily: 'SB 어그로 M'
    },
    inputContainer:{
        flexDirection: 'row',
    },
    input:{
        lineHeight:23,
        paddingVertical:2,
        fontFamily: 'SB 어그로 M',
        borderColor: 'black',
        borderRadius: 15,
        borderWidth:1,
        paddingHorizontal: 10,
        marginTop:10,
        marginLeft:10,
        width:245

    },
    deleteInput:{
        justifyContent:'center',
        alignItems: 'center',
        paddingTop: 8,
        marginLeft:5
    }
})

export default VoteBox;
