import React, {useState} from 'react';
import {View, Switch} from 'react-native';
import SettingBar from '../../components/settingBar/SettingBar';
import * as S from './style.js';
import {styles} from './style';
import Navbar from '../../components/navbar/Navbar';

const Settings = () => {
  const Title = 'SETTINGS';
  const TitleColor = '#779874';
  const [NotificationsToggle, setNotificationsToggle] = useState(false);
  const [DarkToggle, setDarkToggle] = useState(false);

  const NotificationsToggleSwitch = () =>
    setNotificationsToggle(previousState => !previousState);
  const DarkToggleSwitch = () => setDarkToggle(previousState => !previousState);

  const UserImagePath = '../../assets/images/User.png';

  return (
    <View style={{fontFamily: '"anton-v23-latin-regular-1"'}}>
      <Navbar Title={Title} TitleColor={TitleColor}></Navbar>
      <S.Container>
        <S.AccountTitle>ACCOUNT INFO.</S.AccountTitle>
        <S.Account>
          <S.InfoWrapper>
            <S.UserImage source={require(UserImagePath)}></S.UserImage>
            <S.UserName>Wendi_S2</S.UserName>
          </S.InfoWrapper>
        </S.Account>
      </S.Container>
      <S.Container>
        <S.SettingTitle>SETTINGS</S.SettingTitle>
        <S.Setting>
          <S.ToggleWrapper>
            <S.SettingContent>PUSH NOTIFICATIONS</S.SettingContent>
            <Switch
              style={styles.toggle}
              onValueChange={NotificationsToggleSwitch}
              value={NotificationsToggle}
              thumbColor={
                NotificationsToggle ? S.thumbColorOn : S.thumbColorOff
              }
              trackColor={{false: S.trackColorOff, true: S.trackColorOn}}
              ios_backgroundColor={S.trackColorOff}
            />
          </S.ToggleWrapper>
          <S.ToggleWrapper>
            <S.SettingContent>DARK MODE</S.SettingContent>
            <Switch
              name="DarkModeToggle"
              style={styles.toggle}
              onValueChange={DarkToggleSwitch}
              value={DarkToggle}
              thumbColor={DarkToggle ? S.thumbColorOn : S.thumbColorOff}
              trackColor={{false: S.trackColorOff, true: S.trackColorOn}}
              ios_backgroundColor={S.trackColorOff}
            />
          </S.ToggleWrapper>
        </S.Setting>
      </S.Container>
      <S.LogoutButton>
        <S.LogoutText>LOGOUT</S.LogoutText>
      </S.LogoutButton>
    </View>
  );
};

export default Settings;
