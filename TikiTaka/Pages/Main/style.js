import styled from 'styled-components/native';
import { StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

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

export const FAB = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  position: absolute;
  bottom:110px;
  right: 15px;
  justify-content: center;
  align-items: center;
  background-color: #ff8f8f;
  border-color: grey;
  border-width: 1px;
  margin-bottom: 20px;
`

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
  FABshadow: {
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
        elevation: 8,
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
  modalBackground:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
  },
  modalContainer:{
      width: '80%',
      paddingHorizontal:20,
      paddingVertical:30,
      borderRadius:15,
      maxHeight:300,
  },
  modalHeader:{
      fontFamily:'SBAggroB',
      textAlign:'center',
      fontSize: 18,
  },
  body:{
      fontFamily: 'SBAggroM',
      fontSize:12,
      marginVertical:10,
  },

    closeIconWrapper:{
      right: 20,
      top:20,
      position: 'absolute' 
  }
});
