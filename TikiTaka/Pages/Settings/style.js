import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  width: 100%;
  margin: 30px auto;
  align-items: center;
`;

export const AccountTitle = styled.Text`
  font-size: 18px;
  color: #ff8f8f;
  font-family: 'SBAggroB';
  align-self: flex-start;
  margin-left: 40px;
`;
export const Account = styled.View`
  width: 80%;
  height: 120px;
  margin-top: 5px;
  border-radius: 20px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  border-width: 2px;
  border-color: #ff8f8f;
`;

export const InfoWrapper = styled.View`
  width: 100%;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
`;
export const UserImage = styled.Image`
  width: 70px;
  height: 70px;
  margin-right: 10px;
`;

export const UserName = styled.Text`
  font-size: 13px;
  margin-left: 15px;
  margin-right: 15px;
  font-family: 'SBAggroM';
  width: 80px;
`;

export const UserFollowBox = styled.View`
  font-size: 12px;
  margin-right: 10px;
  align-items: center;
`;

export const UserFollowNumber = styled.Text`
  font-size: 12px;
  color: black;
`;
export const UserFollow = styled.Text`
  font-size: 12.5px;
`;

export const UserFollowing = styled(UserFollow)``;
export const UserFollowingBox = styled(UserFollowBox)``;
export const UserFollowingNumber = styled(UserFollowNumber)``;

export const Setting = styled.View`
  width: 80%;
  border-radius: 20px;
  margin-top: 5px;
  background-color: transparent;
  padding: 5px 20px 10px 20px;
  border-width: 2px;
  border-color: #779874;
`;

export const SettingTitle = styled.Text`
  color: #779874;
  font-size: 18px;
  align-self: flex-start;
  margin-left: 40px;
  font-family: 'SBAggroB';
  margin-top: 30px;
`;
export const ToggleWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0px 10px 10px;
`;

export const SettingContent = styled.Text`
  font-size: 13px;
  font-family: 'SBAggroM';
  margin-top: 9px;
  letter-spacing: -1px;
`;
export const LogoutButton = styled.TouchableOpacity`
  width: 70%;
  height: 55px;
  margin: 20px auto;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  border-color: #ff0000;
  border-width: 2px;
`;

export const LogoutText = styled.Text`
  font-size: 16px;
  color: black;
  font-family: 'SBAggroB';
  letter-spacing: -1px;
`;

export const thumbColorOn = Platform.OS === 'android' ? '#ff8f8f' : '#ff8f8f';
export const thumbColorOff = Platform.OS === 'android' ? '#D9D9D9' : '#D9D9D9';
export const trackColorOn = Platform.OS === 'android' ? '#779874' : '#779874';
export const trackColorOff = Platform.OS === 'android' ? '#000000' : '#000000';

export const styles = StyleSheet.create({
  toggle: {
    justifyContent: 'flex-end',
  },
});
