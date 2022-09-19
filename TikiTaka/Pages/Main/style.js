import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Main = styled.View`
  flex: 1;
  flex-grow: 1;
`;

export const buttonContainer = styled.View`
  width: 95%;
  align-items: flex-end;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Iconbutton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: #d9d9d9;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
export const AddStory = styled.TouchableOpacity`
  width: 70%;
  height: 50px;
  border-radius: 20px;
  margin: 10px auto;
  flex-direction: row;
  background-color: #ff8f8f;
  justify-content: center;
  align-items: center;
`;

export const VoteContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 70px;
`;

export const TextStory = styled.Text`
  font-size: 15px;
  color: #ffffff;
  letter-spacing: -1px;
  justify-content: space-between;
  margin-left: 3px;
  margin-right: 3px;
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
        elevation: 5,
      },
    }),
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  flatListContainer: {
    marginTop: 10,
    paddingHorizontal: 30,
    flex: 1,
    flexGrow: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  button: {
    padding: 4,
    flexDirection: 'row',
    marginHorizontal: 5,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
