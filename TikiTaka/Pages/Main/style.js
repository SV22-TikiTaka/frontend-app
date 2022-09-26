import styled from 'styled-components/native';
import {StyleSheet, SafeAreaView} from 'react-native';

export const Main = styled.SafeAreaView`
  flex-grow: 1;
  background-color: white;
`;

export const buttonContainer = styled.View`
  width: 117%;
  top: 120px;
  right: 28px;
  position: relative;
  justify-content: space-between;
  flex-direction: row;
`;
export const VoteContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 90px;
`;

export const styles = StyleSheet.create({
  shadow: {
    ...Platform.select({
      ios: {
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 1.5,
          height: 1.5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        marginBottom: 20,
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
    paddingHorizontal: 30,
    flex: 1,
    flexGrow: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  buttonLeft: {
    alignSelf: 'flex-start',
    padding: 4,
  },
  buttonRight: {
    alignSelf: 'flex-end',
    padding: 4,
  },
  lastAddButton: {
    ...Platform.select({
      android: {
        marginBottom: 55,
        elevation: 5,
      },
    }),
  },
});
