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
  margin-left: 50px;
`;
export const Account = styled.View`
  width: 80%;
  height: 120px;
  margin-top: 10px;
  border-radius: 20px;
  background-color: white;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  border-width: 2px;
  border-color: #ff8f8f;
  flex-direction: row;
`;

export const InfoWrapper = styled.View`
  flex-direction: column;
  flex:2;
`;
export const UserImage = styled.Image`
  width: 85px;
  height: 85px;
`;

export const UserContainer = styled.View`
  flex:3;
  flex-direction: column;
  margin-left: 15px;
  margin-right: 15px;
  font-family: 'SBAggroM';
  width: 80px;
`;
export const UserName = styled.Text`
  margin-top: 3px;
  font-size: 10px;
  font-family: 'SB 어그로 L';
`
export const FollowingContainer = styled.View`
  flex-direction: row;
  flex:2;
  justify-content: space-around;
`
export const FollowingInfo = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;

`
export const FollowingNumberText = styled.Text`
  font-size: 11px;
  color: black;
  font-family: "SB 어그로 L";
  margin-top: 5px;
`;
export const FollowingText = styled.Text`
  font-size: 11px;
  font-family: "SB 어그로 M";
  letter-spacing: -0.5px;
`;


export const Setting = styled.View`
  width: 80%;
  border-radius: 20px;
  margin-top: 10px;
  background-color: white;
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
  border-color: red;
  border-width: 2px;
  background-color: white;
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
        elevation: 5,
      },
    }),
  },
});
