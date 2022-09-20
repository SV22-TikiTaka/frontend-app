import React from 'react';
import styled from 'styled-components';
import {ActivityIndicator, Image} from 'react-native';
const Background = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.Text`
  text-align: center;
`;
export const Loading = () => {
  return (
    <Background>
      <ActivityIndicator size="large" color="#0000ff" />
      <LoadingText>Loading...</LoadingText>
    </Background>
  );
};

export default Loading;
