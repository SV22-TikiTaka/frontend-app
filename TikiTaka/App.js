import React, {useEffect, useState, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/Tabs';
import Splash from './components/splashScreen/Splash';
export default function App() {
  const [hideScreen, setHideScreen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHideScreen(true);
    }, 2000);
  }, []);
  return (
    <NavigationContainer>
      {hideScreen ? <Tabs /> : <Splash />}
    </NavigationContainer>
  );
}
