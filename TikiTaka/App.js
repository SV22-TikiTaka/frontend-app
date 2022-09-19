import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/Tabs';
import { View } from 'react-native';
import VoteBox from './components/VoteBox/VoteBox';
export default function App(){
  return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
  );
};
