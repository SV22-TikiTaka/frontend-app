import React, {useState} from 'react';
import {SafeAreaView, Switch} from 'react-native';
import * as S from './style.js';
import {styles} from './style';
import Header from '../../components/Header/Header';
import intToString from '../../utils/intToString';

const Settings = () => {
  const Title = 'SETTINGS';
  const TitleColor = '#779874';
  const [NotificationsToggle, setNotificationsToggle] = useState(false);
  const [DarkToggle, setDarkToggle] = useState(false);

  const NotificationsToggleSwitch = () => setNotificationsToggle(previousState => !previousState);
  const DarkToggleSwitch = () => setDarkToggle(previousState => !previousState);

  const UserImagePath = '../../assets/images/User.png';

  return (
    <SafeAreaView style = {{flex:1, backgroundColor :'white'}}>
      <Header Title={Title} TitleColor={TitleColor} />
      <S.Container>
        <S.AccountTitle>ACCOUNT INFO.</S.AccountTitle>
        <S.Account style={styles.shadow}> 
          <S.UserImage source={require(UserImagePath)}></S.UserImage>
          <S.InfoWrapper>
            <S.UserContainer>
              <S.UserID numberOfLines={2} ellipsizeMode="tail">Wendi_S2</S.UserID>
              <S.UserName numberOfLines={2} ellipsizeMode="tail">Son Seung-Wan</S.UserName>
            </S.UserContainer>
            <S.FollowingContainer>
              <S.FollowingInfo>
                <S.FollowingText>Followers</S.FollowingText>
                <S.FollowingNumberText>{intToString(101323221)}</S.FollowingNumberText>
              </S.FollowingInfo>
              <S.FollowingInfo>
                <S.FollowingText>Following</S.FollowingText>
                <S.FollowingNumberText>{intToString(4234)}</S.FollowingNumberText>
              </S.FollowingInfo>
            </S.FollowingContainer>
          </S.InfoWrapper>
        </S.Account>
        <S.SettingTitle>SETTINGS</S.SettingTitle>
        <S.Setting style = {styles.shadow}>
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
      <S.LogoutButton style={styles.shadow}>
        <S.LogoutText>LOGOUT</S.LogoutText>
      </S.LogoutButton>
    </SafeAreaView>
  );
}

export default Settings;
