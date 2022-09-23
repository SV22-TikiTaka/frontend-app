import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
export const InboxContainer = styled.SafeAreaView`
  flex: 1;
`;
export const StyledText = styled.Text`
  font-size: 15px;
  color: #ffffff;
  font-family: 'SBAggroM';
`;

export const MailBox = styled.TouchableOpacity`
  margin: 15px;
  padding: 15px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
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
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginVertical: 20,
    marginBottom: 70,
    width: Dimensions.get('window').width * 1,
    margin: Dimensions.get('window').width * 0.05,
  },
});
