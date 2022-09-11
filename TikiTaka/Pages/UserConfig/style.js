import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const AccountBox = styled.View`
  height: 160px;
  width: 80%;
  margin: 10px auto;
`;

export const Account = styled.View`
  width: 100%;
  height: 160px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AccountText = styled.Text`
  font-size: 24px;
  color: rgba(244, 224, 138, 0.73);
`;

export const UserImage = styled.Image`
  width: 90px;
  height: 90px;
  position: absolute;
  left: 20px;
`;

export const UserName = styled.Text`
  font-size: 22px;
  margin-left: 50px;
  color: #ababab;
`;

export const SettingBox = styled.View`
  height: 200px;
  width: 80%;
  margin: 50px auto;
`;

export const Setting = styled.View`
  width: 100%;
  height: 160px;
  border-radius: 15px;
  margin-top: 50px;
`;

export const SettingText = styled.Text`
  color: rgba(244, 224, 138, 0.73);
  font-size: 24px;
  margin-left: 40px;
  margin-top: 35px;
`;

export const Logout = styled.TouchableOpacity`
  width: 70%;
  height: 40px;
  margin: 20px auto;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const LogoutText = styled.Text`
  font-size: 22px;
`;

export const styles = StyleSheet.create({
  grediant: {
    height: 60,
    width: '70%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 24,
    marginTop: 30,
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
  accountGradient: {
    borderRadius: 18,
  },
  accountContainer: {
    borderRadius: 14,
    backgroundColor: '#ffffff',
    width: '97%',
    height: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
    marginLeft: 4,
    flexDirection: 'row',
  },

  settingGradient: {
    width: '80%',
    marginLeft: 40,
    height: 220,
    borderRadius: 30,
  },
  settingContainer: {
    borderRadius: 25,
    backgroundColor: '#ffffff',
    marginTop: 4,
    width: '97%',
    height: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
