import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const MailOutline = styled.View`
  width: 25%;
  height: 95px;

  margin: 15px auto;
  border-radius: 25px;
  background-color: #d9d9d9;
`;

export const AddStory = styled.TouchableOpacity`
  width: 70%;
  height: 55px;
  border-radius: 20px;
  margin: 0 auto;
  background-color: #779874;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextStory = styled.Text`
  font-size: 20px;
  margin-left: 10px;
  color: #ffffff;
  font-family: anton-v23-latin-regular-1;
`;

export const AddIcon = styled.Image`
  width: 25px;
  height: 25px;
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
});


