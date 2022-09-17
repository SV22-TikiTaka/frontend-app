import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/Tabs';
import Slide from './Pages/Slide/Slide';
import { View } from 'react-native';

export default function App(){
  return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
  );
};
