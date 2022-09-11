import React from 'react';

import {Text, View} from 'react-native';
import Navbar from './components/navbar/Navbar';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';
import Login from './Pages/Login/Login';
import Main from './Pages/Main/Main';
import UserConfig from './Pages/UserConfig/UserConfig';
import UserReply from './Pages/UserReply/UserReply';
const App = () => {
  return (
    <View>
      <UserReply></UserReply>
    </View>
  );
};

export default App;
