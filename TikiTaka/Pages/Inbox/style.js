import styled from 'styled-components/native';
import { StyleSheet, SafeAreaView } from 'react-native';

export const InboxContainer = styled.SafeAreaView`
  flex: 1;
  background-color: white;

`
export const MailOutline = styled.View`
  width: 25%;
  height: 95px;
  margin: 15px auto;
  border-radius: 25px;
  background-color: #d9d9d9;
`;

export const buttonContainer = styled.View`
  margin-bottom: 70px;
  align-items: center;
  justify-content: center;
`
export const MoreMessages = styled.TouchableOpacity`
  border-radius: 20px;
  background-color: #779874;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 30px;
`;

export const StyledText = styled.Text`
  font-size: 15px;
  color: #ffffff;
  font-family: 'SBAggroM';
`;

export const closedMail = styled.Image`
  width: 100%;
  height: 100%;
`;

export const MailBox = styled.TouchableOpacity`
  width: 25%;
  height: 95px;
  margin: 30px 15px 0px 15px;
`;

export const styles = StyleSheet.create({
  shadow: {
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
        elevation: 15,
      },
    }),
  },

  gridView: {
    flex:3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginLeft: 15,
  },
});
