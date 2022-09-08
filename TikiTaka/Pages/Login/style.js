import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
export const Main = styled.View``;

export const MainLogo = styled.View`
  margin-top: 55%;
`;

export const MainImg = styled.Image`
  width: 85px;
  height: 75px;
  margin: -15px auto;
`;

export const InstaImg = styled.Image`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 4px;
`;

export const Name = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const LeftText = styled.Text`
  font-family: 'anton-v23-latin-regular-1';
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  color: #779874;
`;

export const RightText = styled(LeftText)`
  color: #ff8f8f;
`;

export const Sign = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 33% auto;
  background: rgba(255, 253, 253, 0.8);
  border: none;
`;

export const LoginText = styled.Text`
  font-family: 'anton-v23-latin-regular-1';
  font-style: normal;
  font-size: 21px;
  margin-left: 2px;
  color: #070707;
  width: 78.5%;
`;

export const styles = StyleSheet.create({
  grediant: {
    height: 70,
    width: '70%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 24,
  },
  buttonContainer: {
    borderRadius: 21,
    flex: 1.0,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: '98%',
    margin: 3,
    flexDirection: 'row',
  },
});
