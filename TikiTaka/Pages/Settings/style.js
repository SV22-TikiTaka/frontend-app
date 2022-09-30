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
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  border-width: 2px;
  border-color: #ff8f8f;
  flex-direction: row;
`;

export const InfoWrapper = styled.View`
  flex-direction: column;
  flex: 2;
`;
export const UserImage = styled.Image`
  width: 85px;
  height: 85px;
  border-radius: 50px;
`;

export const UserContainer = styled.View`
  flex: 3;
  flex-direction: column;
  margin-left: 15px;
  margin-right: 15px;
  width: 200px;
`;

export const UserID = styled.Text`
  margin-top: 3px;
  font-size: 12px;
  font-family: 'SBAggroM';
`;

export const UserName = styled.Text`
  margin-top: 3px;
  font-size: 10px;
  font-family: 'SBAggroL';
`;
export const FollowingContainer = styled.View`
  flex-direction: row;
  flex: 2;
  justify-content: space-around;
`;
export const FollowingInfo = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const FollowingNumberText = styled.Text`
  font-size: 11px;
  color: black;
  font-family: 'SBAggroL';
  margin-top: 5px;
`;
export const FollowingText = styled.Text`
  font-size: 11px;
  font-family: 'SBAggroM';
  letter-spacing: -0.5px;
`;

export const Setting = styled.View`
  width: 80%;
  border-radius: 20px;
  margin-top: 10px;
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
  border-width: 2px;
  border-color: red;
`;

export const LogoutText = styled.Text`
  font-size: 16px;
  font-family: 'SBAggroB';
  letter-spacing: -1px;
  color: black;
`;

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
