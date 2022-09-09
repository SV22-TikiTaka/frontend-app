import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
export const Taps = styled.View`
  flex-direction: row;
  height: 35px;
  margin-top: 30px;
  margin-left: 50px;
`;

export const Atap = styled.TouchableOpacity`
  height: 35px;
  width: 60px;
  background-color: #ff8f8f;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin: 0 2px;
`;

export const Btap = styled(Atap)`
  background-color: #ffd8d8;
`;

export const Ctap = styled(Atap)`
  background-color: #b3ffac;
`;

export const QuestionBox = styled.View`
  height: 210px;
  width: 85%;
  margin: 0 auto;
`;

export const TypeBox = styled.View`
  height: 90px;
  width: 100%;
`;

export const InputBox = styled.View`
  box-sizing: border-box;
  height: 120px;
  width: 100%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border: 0.2px solid black;
`;

export const PencilButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 50;
  background-color: #d9d9d9;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 55.5;
  right: 10;
`;

export const RollButton = styled(PencilButton)`
  right: 65;
`;

export const RollIcon = styled.Image`
  width: 35.5px;
  height: 35.5px;
`;

export const PencilIcon = styled(RollIcon)`
  width: 26.5px;
  height: 26.5px;
`;

export const AddStory = styled.TouchableOpacity`
  width: 70%;
  height: 55px;
  border-radius: 20px;
  margin: 0 auto;
  background-color: #ff8f8f;
  flex-direction: row;
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

export const AddIcon = styled.Image`
  width: 25px;
  height: 25px;
`;

export const TextStory = styled.Text`
  font-size: 20px;
  margin-left: 10px;
  color: #ffffff;
`;
