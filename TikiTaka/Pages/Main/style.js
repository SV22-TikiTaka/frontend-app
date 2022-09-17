import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const buttonContainer = styled.View`
  width: 95%;
  align-items: flex-end;
  flex-direction: row;
  justify-content: flex-end;
`
export const Iconbutton =  styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: #d9d9d9;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`
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

export const JustBox = styled.View`
  width: 75%;
  height: 200px;
  margin: 10px auto;
  border-radius: 25px;
  background-color: #d9d9d9;
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
  container:{
    flex: 1,
    backgroundColor: 'white',
    alignItems:'center',

  },
  flatListContainer:{
    height: 205,
    marginTop: 15,
    paddingHorizontal:30,
  },
  component:{
    height: 160,
    width: 290,
    borderRadius:15,
    marginTop: 20,
  },
  componentTop:{
    flex:4,
    backgroundColor: '#FF8F8F',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    
  },
  componentBottom:{
    flex:5,
    backgroundColor:'white',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  input: {
    padding: 10,
    fontFamily: 'SB 어그로 M'
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'flex-end',
    marginRight: 40,
  },
  button:{
    padding :4,
    flexDirection:'row',
    marginHorizontal: 5,
    height: 35,
    justifyContent:'center',
    alignItems:'center'
  }
  
});
