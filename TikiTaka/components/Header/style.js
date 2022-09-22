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
          height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 20,
      },
    }),
  },
});
export const Header = styled.View`
  padding: 10px 0px 5px 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
`;