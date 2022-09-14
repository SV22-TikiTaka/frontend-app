import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/Tabs';
import {View} from 'react-native';
import Navbar from './components/navbar/Navbar';
// prettier-ignore
import styled from 'styled-components/native';
import History from './Pages/History/History';

export default function App(){
  return (
    <View>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </View>
  );
};
