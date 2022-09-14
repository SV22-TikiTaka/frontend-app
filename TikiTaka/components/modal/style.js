import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export const Main = styled.SafeAreaView`
  flex: 1;
  font-family: anton-v23-latin-regular-1;
  position: absolute;
  width: 100%;
  height: 200%;
  z-index: 1;
  background-color: 'rgba(52, 52, 52, 0.5)';
`;

export const Reply = styled.View``;

export const ReplyBox = styled.View`
  height: 180px;
  width: 70%;
  background-color: #ffffff;
  margin: 0 auto;
  margin-top: 130px;
  border-radius: 15px;
`;

export const Question = styled.View`
  justify-content: center;
  align-items: center;
  height: 80px;
`;

export const QuestionText = styled.Text`
  color: white;
  font-size: 18px;
  text-align: center;
  font-family: anton-v23-latin-regular-1;
`;

export const ReplyInput = styled.View`
  height: 100px;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  flex-grow: 1;
  flex-shrink: 1;
  font-size: 18px;
  width: 100%;
  height: 300px;
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;
  font-weight: bold;
  color: black;
`;

export const ReplyInputText = styled.Text`
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;
  font-weight: bold;
  color: black;
  font-size: 18px;
`;

export const ReplyButton = styled.TouchableHighlight`
  width: 70%;
  height: 60px;
  background-color: red;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  z-index: 10;
`;

export const ReplyButtonText = styled.Text`
  font-size: 24px;
  font-family: anton-v23-latin-regular-1;
`;

export const CloseButton = styled.TouchableHighlight`
  position: absolute;
  z-index: 1;
  right: -5;
  top: -5;
`;

export const CloseButtonImage = styled.Image`
  width: 40px;
  height: 40px;
`;

export const styles = StyleSheet.create({
  gradient: {
    height: 65,
    width: '65%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 27,
    marginTop: 50,
  },
  buttonContainer: {
    borderRadius: 24,
    flex: 1.0,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: '97%',
    height: '30%',
    marginTop: 3,
    marginBottom: 3,
    flexDirection: 'row',
  },
  replyBoxGrediant: {
    height: 80,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  replyBoxContainer: {},
});
