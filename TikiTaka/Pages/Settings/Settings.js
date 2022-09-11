import React, {useState} from 'react';
import {View,Switch} from 'react-native';
import SettingBar from '../../components/settingBar/SettingBar';
import * as S from './style.js';
import {styles} from './style';


const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const UserImagePath = '../../assets/images/User.png';

  return (
    <View style={{fontFamily: '"anton-v23-latin-regular-1"'}}>
      <SettingBar></SettingBar>
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
                style = {styles.toggle}
                onValueChange={toggleSwitch}
                value={isEnabled}
                thumbColor={isEnabled ? S.thumbColorOn : S.thumbColorOff}
                trackColor={{ false: S.trackColorOff, true: S.trackColorOn }}
                ios_backgroundColor={S.trackColorOff} />
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
