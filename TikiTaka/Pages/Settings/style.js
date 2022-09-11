import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  width: 100%;
  margin: 10px auto;
  align-items: center;
`;

export const Account = styled.View`
  width: 80%;
  height: 70px;
  margin-top: 5px;;
  border-radius: 20px;
  background-color: #D9D9D9;
  justify-content: center;
  padding: 0px 20px;
`;
export const AccountTitle = styled.Text`
  font-size: 24px;
  color: #ff8f8f;
  font-family: 'anton-v23-latin-regular-1';
  align-self: flex-start;
  margin-left: 40px;
`;
export const InfoWrapper = styled.View`
  width: 100%;
  border-radius: 20px;
  flex-direction: row;
  justify-content: flex-start;
`;
export const UserImage = styled.Image`
  width: 40px;
  height: 40px;
`;

export const UserName = styled.Text`
  font-size: 20px;
  margin-left: 15px;
  color: black;
  font-family: 'anton-v23-latin-regular-1';
`;

export const Setting = styled.View`
  width: 80%;
  height: 200px;
  border-radius: 20px;
  margin-top: 5px;
  background-color: #D9D9D9;
  padding: 5px 20px;
`;

export const SettingTitle = styled.Text`
  color: #779874;
  font-size: 24px;
  align-self: flex-start;
  margin-left: 40px;
  font-family: 'anton-v23-latin-regular-1';
`;
export const ToggleWrapper = styled.View`
  width: 100%;
  border-radius: 20px;
  flex-direction: row;
  justify-content: flex-start;
  justify-content: space-between;
  border-bottom : black;
  border-bottom-width: 1px;
  padding: 5px 0px;
`;



export const SettingContent = styled.Text`
  font-size: 20px;
  font-family: 'anton-v23-latin-regular-1';
`
export const LogoutButton = styled.TouchableOpacity`
  width: 70%;
  height: 55px;
  margin: 20px auto;
  padding-bottom: 3px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  border-color: #ff0000;
  border-width: 2px;
`;

export const LogoutText = styled.Text`
  font-size: 22px;
  color: black;
  font-family: 'anton-v23-latin-regular-1';
`;

export const thumbColorOn = Platform.OS === "android" ? "#ff8f8f" : "#ff8f8f"
export const thumbColorOff = Platform.OS === "android" ? "#D9D9D9" : "#D9D9D9"
export const trackColorOn = Platform.OS === "android" ? "#779874" : "#779874"
export const trackColorOff = Platform.OS === "android" ? "#000000" : "#000000"

export const styles =StyleSheet.create({
  toggle:{
    justifyContent: 'flex-end',
  }
});