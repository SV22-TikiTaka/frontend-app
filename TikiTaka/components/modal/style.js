import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import { componentBottom } from '../VoteBox/style';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export const Modal = styled.SafeAreaView`
  position: absolute;
  width: 100%;
  height: 103%;
  background-color: 'rgba(52, 52, 52, 0.5)';
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ReplyBox = styled.View`
  height: 180px;
  width: 70%;
  border-radius: 15px;
  background-color: transparent;
`;

export const ComponentTop = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #ff8f8f;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  flex:3;
`;

export const TopText = styled.Text`
  color: white;
  font-size: 14px;
  text-align: center;
  font-family: 'SBAggroB';
`;

export const ComponentBottom = styled.View`
  flex:3;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  font-size: 18px;
  background-color: #ffffff;
`;

export const BottomText = styled.Text`
  color: black;
  font-size: 16px;
  font-family: 'SBAggroM';
`;

export const ReplyButton = styled.TouchableHighlight`
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-family: 'SBAggroB';
`;


export const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 20,
    backgroundColor: '#ffffff',
    borderColor: '#ff8f8f',
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 70,
    marginTop: 30,
  },
});
