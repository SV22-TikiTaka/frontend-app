import styled from 'styled-components/native';
import {StyleSheet, TouchableOpacity} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: transparent;

  justify-content: center;
  margin-top: 10px;
`;

export const QuestionContainer = styled.TouchableOpacity`
  padding: 10px 10px 10px 20px;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 15px;
  border-width: 2px;
`;
export const QuestionText = styled.Text`
  font-size: 16px;
  font-family: 'SBAggroM';
  font-weight: normal;
  text-transform: uppercase;
`;
export const AnswerContainer = styled.View`
  margin-left: 30px;
  margin-right: 30px;
`;
export const AnswerList = styled.View``;
export const AnswerText = styled.Text`
  font-size: 12px;
  font-family: 'SBAggroM';
  padding: 10px;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#D9D9D9',
    padding: 20,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 16,
    padding: 10,
  },
  separator: {
    height: 0.5,
    backgroundColor: '#c8c8c8',
    width: '100%',
  },
  voteText: {
    fontSize: 16,
    padding: 10,
    color: '#008f7a',
  },
});
