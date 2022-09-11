import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const MailOutline = styled.View`
  width: 25%;
  height: 95px;

  margin: 15px auto;
  border-radius: 25px;
  background-color: #d9d9d9;
`;

export const MoreMessages = styled.TouchableOpacity`
  width: 70%;
  height: 55px;
  border-radius: 20px;
  margin: 30px auto;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #779874;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const StyledText = styled.Text`
  font-size: 20px;
  color: #ffffff;
  font-family: anton-v23-latin-regular-1;
  align-items: center;
`;

export const AddIcon = styled.Image`
  width: 22px;
  height: 22px;
  margin-top: 6px;
`;

export const closedMail = styled.Image`
  width: 25%;
  height: 95px;
  margin: 30px 15px 0px 15px;
`;


export const styles = StyleSheet.create({
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
        elevation: 15,
      },
    }),
    },

    list:{
        flex: 1,
        width:"100%",
        backgroundColor:"transparent",
    },

    stylegridView:{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center"
    },
});


