import React from 'react';

import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import SettingBar from '../../components/settingBar/SettingBar';
import LinearGradient from 'react-native-linear-gradient';
import * as S from './style.js';
import {styles} from './style';
const UserConfig = () => {
  const UserImagePath = '../../assets/images/User.png';

  return (
    <View>
      <SettingBar></SettingBar>
      <S.AccountBox>
        <S.AccountText>ACCOUNT INFO.</S.AccountText>
        <LinearGradient
          colors={['rgba(255, 114, 217, 0.32)', 'rgba(171, 171, 171, 0)']}
          start={{x: 0.5, y: 0.0}}
          end={{x: 0.5, y: 1}}
          style={styles.accountGradient}>
          <S.Account style={styles.accountContainer}>
            <S.UserImage source={require(UserImagePath)}></S.UserImage>
            <S.UserName>Wendi_S2</S.UserName>
          </S.Account>
        </LinearGradient>
      </S.AccountBox>

      <S.SettingText>SETTINGS</S.SettingText>
      <LinearGradient
        colors={['rgba(177, 248, 218, 1)', 'rgba(171, 171, 171, 0)']}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        style={styles.settingGradient}>
        {/* 로그아웃 버튼 */}
        <S.SettingBox style={styles.settingContainer}>
          <S.Setting></S.Setting>
        </S.SettingBox>
      </LinearGradient>
      <LinearGradient
        colors={[
          'rgba(177, 248, 218, 1)',
          'rgba(191, 252, 239, 1)',
          'rgba(242, 102, 205, 0.2465)',
          'rgba(244, 97, 204, 0.22)',
        ]}
        start={{x: 0, y: 0.0}}
        end={{x: 1, y: 1}}
        style={styles.grediant}>
        <S.Logout>
          <S.LogoutText>LOGOUT</S.LogoutText>
        </S.Logout>
      </LinearGradient>
    </View>
  );
};

export default UserConfig;
