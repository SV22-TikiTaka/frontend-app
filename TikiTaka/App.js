import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/Tabs';
import History from './Pages/History/History';

export default function App(){
  return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
  );
};
