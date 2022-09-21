import React, {useState} from 'react';
import {SafeAreaView, Switch} from 'react-native';
import * as S from './style.js';
import {styles} from './style';
import Header from '../../components/Header/Header';
import processCount from '../../utils/processCount';

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
    <SafeAreaView style = {{flex:1, backgroundColor :'white'}}>
      <Header Title={Title} TitleColor={TitleColor} />
      <S.Container>
        <S.AccountTitle>ACCOUNT INFO.</S.AccountTitle>
        <S.Account>
          <S.InfoWrapper>
            <S.UserImage source={require(UserImagePath)}></S.UserImage>
            <S.UserName numberOfLines={2} ellipsizeMode="tail">
              Wendi_S2
            </S.UserName>
            <S.UserFollowBox>
              <S.UserFollow>Follow</S.UserFollow>
              <S.UserFollowNumber>{processCount(101323221)}</S.UserFollowNumber>
            </S.UserFollowBox>
            <S.UserFollowingBox>
              <S.UserFollowing>Following</S.UserFollowing>
              <S.UserFollowingNumber>
                {processCount(4234)}
              </S.UserFollowingNumber>
            </S.UserFollowingBox>
          </S.InfoWrapper>
        </S.Account>
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
    </SafeAreaView>
  );
};

export default Settings;
