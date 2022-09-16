import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Tabs = styled.View`
  flex-direction: row;
  height: 35px;
  margin-top: 30px;
  margin-left: 50px;
`;

export const Atab = styled.TouchableOpacity`
  height: 35px;
  width: 60px;
  background-color: #ff8f8f;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin: 0 2px;
`;

export const Btab = styled(Atab)`
  background-color: #ffd8d8;
`;

export const Ctab = styled(Atab)`
  background-color: #b3ffac;
`;

export const QuestionBox = styled.View`
  height: 210px;
  width: 85%;
  margin: 0 auto;
`;

export const TypeBox = styled.View`
  height: 80px;
  width: 100%;
`;

export const InputBox = styled.View`
  box-sizing: border-box;
  height: 120px;
  width: 100%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border: 0.2px solid black;
  flex-direction: column;
  align-items: center;
`;

export const Question = styled.Text`
  width: 90%;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin-top: 10px;
  font-size: 15px;
  font-family: 'SB 어그로 M';
`
export const buttonContainer = styled.View`
  width: 95%;
  align-items: flex-end;
  flex-direction: row;
  justify-content: flex-end;
`
export const Iconbutton =  styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: #d9d9d9;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`
export const AddStory = styled.TouchableOpacity`
  width: 70%;
  height: 55px;
  border-radius: 20px;
  margin: 10px auto;
  flex-direction: row;
  background-color: #ff8f8f;
  justify-content: center;
  align-items: center;
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

export const JustBox = styled.View`
  width: 85%;
  height: 200px;

  margin: 15px auto;
  border-radius: 25px;
  background-color: #d9d9d9;
`;

export const TextStory = styled.Text`
  font-size: 15px;
  color: #ffffff;
  letter-spacing: -1px;
  justify-content: space-between;
  margin-left: 3px;
  margin-right: 3px;
`;
