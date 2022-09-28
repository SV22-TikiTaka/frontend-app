import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
export const Main = styled.View`
  flex:1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainImg = styled.Image`
  width: 150px;
  height: 165px;
  margin-bottom: 20px;
`;

export const InstaImg = styled.Image`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  margin-left: 5px;
`;

export const LoginText = styled.Text`
  font-family: 'SBAggroM';
  font-size: 16px;
  letter-spacing: -1px;
`;

export const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical:5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#FF8F8F'
  },
});
