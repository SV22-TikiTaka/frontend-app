import React from 'react';

import {View} from 'react-native';
import Navbar from './components/navbar/Navbar';
// prettier-ignore
import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions} from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';
import Login from './Pages/Login/Login';
import Main from './Pages/Main/Main';
import Inbox from './Pages/Inbox/Inbox';
import Settings from './Pages/Settings/Settings';
import UserReply from './Pages/UserReply/UserReply';
import {Setting} from './Pages/Settings/style';
import Modall from './components/modal/Modall';

const App = () => {
  return (
    <View>
      <Inbox />
    </View>
  );
};

export default App;
