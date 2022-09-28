import React, {useState, useContext,useEffect, useRef} from 'react';
import {View, StyleSheet,Modal,Animated} from 'react-native';
import themeContext from '../../config/themeContext.js';

const InfoModal = ({visible, children, scaleValue}) => {
   
    const theme = useContext(themeContext);
    const [showModal, setShowModal] = useState(visible);
    useEffect(()=>{
        toggleModal();
    },[visible])
    const toggleModal = () =>{
        if(visible){
            setShowModal(true)
            Animated.spring(scaleValue, {
                toValue:1,
                duration:300,
                useNativeDriver: true,
            }).start();
        }else{
            setTimeout(() => setShowModal(false), 300);
            Animated.timing(scaleValue,{
                toValue:0,
                duration:300,
                useNativeDriver: true,
            }).start();
        }
    }
    return (
        <Modal transparent visible={showModal}>
            <View style={[styles.modalBackground, {backgroundColor:theme.modalbackground}]}>
                {children}
            </View>
        </Modal>
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
            elevation: 5,
          },
        }),
    },
    modalBackground:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    modalContainer:{
        width: '80%',
        paddingHorizontal:20,
        paddingVertical:30,
        borderRadius:15,
    }
})

export default InfoModal;
