import styled from 'styled-components/native';

export const component = styled.View`
  width: 290px;
  min-height: 190px;
  border-radius: 15px;
  margin: 10px auto;
  border-color: #779874;
  border-width: 1px;
`;
export const componentTop = styled.View`
  flex: 2;
  background-color: #779874;
  min-height: 75px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding-bottom: 5px;
  padding-top:5px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const componentBottom = styled.View`
  flex-basis: auto;
  background-color: white;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  flex-direction: column;
  padding-bottom: 15px;
  padding-top: 5px;
`;
export const styledText = styled.Text`
  font-family: 'SBAggroB';
  font-size: 25px;
  color: white;
`;

export const ShareButton = styled.TouchableOpacity`
  border-radius: 20px;
  margin: 15px auto;
  flex-direction: row;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-color: #ff8f8f;
  border-width: 2px;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  color: black;
  letter-spacing: -0.3px;
  justify-content: space-between;
  margin-left: 3px;
  margin-right: 3px;
  font-family: 'SBAggroM';
`;
