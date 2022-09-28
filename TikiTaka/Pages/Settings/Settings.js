import React, {useState, useContext, useEffect} from 'react';
import {SafeAreaView, Switch, Platform} from 'react-native';
import * as S from './style.js';
import {styles} from './style';
import Header from '../../components/Header/Header';
import intToString from '../../utils/intToString';
import {EventRegister} from 'react-native-event-listeners';
import themeContext from '../../config/themeContext.js';
import axios from 'axios';

const Settings = () => {
  const [user, setUser] = useState([
    'https://www.pngitem.com/pimgs/m/678-6785829_my-account-instagram-profile-icon-hd-png-download.png',
    'username',
    'fullname',
    0,
    0,
  ]);
  useEffect(() => {
    axios
      .get('http://0.0.0.0:8000/api/v1/users/1') // + user.id 로 나중에 바꿔야함.
      .then(response => {
        const info = response.data;
        const datalist = [];
        datalist.push(info.profile_image_url);
        datalist.push(info.username);
        datalist.push(info.full_name);
        datalist.push(info.follower);
        datalist.push(info.following);
        setUser(datalist);
      });
    console.log(user);
  }, []);

  const Title = 'SETTINGS';
  const TitleColor = '#779874';
  const userimage = {uri: user[0]};
  const [NotificationsToggle, setNotificationsToggle] = useState(false);
  const NotificationsToggleSwitch = () =>
    setNotificationsToggle(previousState => !previousState);

  const [DarkToggle, setDarkToggle] = useState(false);
  const theme = useContext(themeContext);

  const thumbColorOn = Platform.OS === 'android' ? '#ff8f8f' : '#ff8f8f';
  const thumbColorOff =
    Platform.OS === 'android' ? theme.toggleThumb : theme.toggleThumb;
  const trackColorOn = Platform.OS === 'android' ? '#779874' : '#779874';
  const trackColorOff =
    Platform.OS === 'android' ? theme.toggleTrack : theme.toggleTrack;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.background}}>
      <Header Title={Title} TitleColor={TitleColor} />
      <S.Container>
        <S.AccountTitle>ACCOUNT INFO.</S.AccountTitle>
        <S.Account style={[styles.shadow, {backgroundColor: theme.background}]}>
          {user ? (
            <S.UserImage source={userimage} />
          ) : (
            <S.UserImage
              source={{
                uri: 'https://www.pngitem.com/pimgs/m/678-6785829_my-account-instagram-profile-icon-hd-png-download.png',
              }}
            />
          )}
          <S.InfoWrapper>
            <S.UserContainer>
              <S.UserID style={{color: theme.color}}>
                {user ? user[1] : null}
              </S.UserID>
              <S.UserName style={{color: theme.subcolor}}>
                {user ? user[2] : null}
              </S.UserName>
            </S.UserContainer>
            <S.FollowingContainer>
              <S.FollowingInfo>
                <S.FollowingText style={{color: theme.subcolor}}>
                  Followers
                </S.FollowingText>
                <S.FollowingNumberText style={{color: theme.color}}>
                  {user ? intToString(user[3]) : null}
                </S.FollowingNumberText>
              </S.FollowingInfo>
              <S.FollowingInfo>
                <S.FollowingText style={{color: theme.subcolor}}>
                  Following
                </S.FollowingText>
                <S.FollowingNumberText style={{color: theme.color}}>
                  {user ? intToString(user[4]) : null}
                </S.FollowingNumberText>
              </S.FollowingInfo>
            </S.FollowingContainer>
          </S.InfoWrapper>
        </S.Account>
        <S.SettingTitle>SETTINGS</S.SettingTitle>
        <S.Setting style={[styles.shadow, {backgroundColor: theme.background}]}>
          <S.ToggleWrapper>
            <S.SettingContent style={{color: theme.subcolor}}>
              PUSH NOTIFICATIONS
            </S.SettingContent>
            <Switch
              style={styles.toggle}
              onValueChange={NotificationsToggleSwitch}
              value={NotificationsToggle}
              thumbColor={NotificationsToggle ? thumbColorOn : thumbColorOff}
              trackColor={{false: trackColorOff, true: trackColorOn}}
              ios_backgroundColor={trackColorOff}
            />
          </S.ToggleWrapper>
          <S.ToggleWrapper>
            <S.SettingContent style={{color: theme.subcolor}}>
              DARK MODE
            </S.SettingContent>
            <Switch
              name="DarkModeToggle"
              style={styles.toggle}
              onValueChange={value => {
                setDarkToggle(value);
                EventRegister.emit('changeTheme', value);
              }}
              value={DarkToggle}
              thumbColor={DarkToggle ? thumbColorOn : thumbColorOff}
              trackColor={{false: trackColorOff, true: trackColorOn}}
              ios_backgroundColor={trackColorOff}
            />
          </S.ToggleWrapper>
        </S.Setting>
      </S.Container>
      <S.LogoutButton
        style={[styles.shadow, {backgroundColor: theme.background}]}>
        <S.LogoutText style={{color: theme.color}}>LOGOUT</S.LogoutText>
      </S.LogoutButton>
    </SafeAreaView>
  );
};

export default Settings;
