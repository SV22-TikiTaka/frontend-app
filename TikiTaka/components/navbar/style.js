import styled from 'styled-components';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  shadow: {
    backgroundColor: '#fff',
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
        elevation: 20,
      },
    }),
  },
});
export const Nav = styled.View`
  height: 60px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom-color: gray;
  border-bottom-width: 2px;
`;

export const LeftText = styled.Text`
  font-family: 'anton-v23-latin-regular-1';
  font-size: 26px;
  margin-bottom: 5px;
`;

export const LightText = styled(LeftText)`
  margin-left: 35px;
`;

export const ConfigView = styled.View`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 12.5;
  right: 5;
`;

export const ConfigIcon = styled.Image`
  width: 32.5px;
  height: 32.5px;
`;
