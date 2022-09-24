import React, {useState, useContext, useEffect} from 'react';
import {SafeAreaView, Switch} from 'react-native';
import * as S from './style.js';
import {styles} from './style';
import Header from '../../components/Header/Header';
import intToString from '../../utils/intToString';
import {EventRegister} from 'react-native-event-listeners';
import themeContext from '../../config/themeContext.js';
import axios from 'axios';
const createUser = async () => {
  const userData = {
    insta_id: '123',
    username: 'Wendi_S2',
    full_name: 'Son Seung-wan',
    follower: 456,
    following: 123,
    profile_image_url:
      'https://cdn.imweb.me/upload/S20210406ae69853331cfb/dda59999ef7a3.jpg',
  };
  try {
    const result = await axios.post(
      'http://0.0.0.0:8000/api/v1/users',
      userData,
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

const showUser = async () => {
  try {
    const result = await axios.get(
      `http://0.0.0.0:8000/api/v1/users/${user.id}`,
    );
    console.log(result.data);
  } catch (error) {
    console.log(error);
  }
};
const Settings = () => {
  useEffect(() => {
    (async () => {
      const response = await createUser();
      console.log(response);
    })();

    (async () => {
      const response = await showUser();
      console.log(response);
    })();
  }, []);

  const Title = 'SETTINGS';
  const TitleColor = '#779874';
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

  const UserImagePath = '../../assets/images/User.png';

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.background}}>
      <Header Title={Title} TitleColor={TitleColor} />
      <S.Container>
        <S.AccountTitle>ACCOUNT INFO.</S.AccountTitle>
        <S.Account style={[styles.shadow, {backgroundColor: theme.background}]}>
          <S.UserImage source={require(UserImagePath)}></S.UserImage>
          <S.InfoWrapper>
            <S.UserContainer>
              <S.UserID style={{color: theme.color}}>Wendi_S2</S.UserID>
              <S.UserName style={{color: theme.subcolor}}>
                Son Seung-Wan
              </S.UserName>
            </S.UserContainer>
            <S.FollowingContainer>
              <S.FollowingInfo>
                <S.FollowingText style={{color: theme.subcolor}}>
                  Followers
                </S.FollowingText>
                <S.FollowingNumberText style={{color: theme.color}}>
                  {intToString(101323221)}
                </S.FollowingNumberText>
              </S.FollowingInfo>
              <S.FollowingInfo>
                <S.FollowingText style={{color: theme.subcolor}}>
                  Following
                </S.FollowingText>
                <S.FollowingNumberText style={{color: theme.color}}>
                  {intToString(4234)}
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
