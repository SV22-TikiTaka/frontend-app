import React, {useEffect,useState} from 'react';
import {NavigationContainer, DarkTheme, DefaultTheme} from '@react-navigation/native';
import Tabs from './navigation/Tabs';
import {QueryClient, QueryClientProvider} from 'react-query';
import SplashScreen from 'react-native-splash-screen';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from './config/themeContext';
import theme from './config/theme';

const queryClient = new QueryClient();
export default function App() {

  const[DarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let eventListener =  EventRegister.addEventListener("changeTheme", (data) => {
      setDarkMode(data);
    });
    return () => {
      EventRegister.removeEventListener(eventListener);
    }
  })
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <themeContext.Provider value = {DarkMode === true? theme.dark : theme.light}>
      <NavigationContainer value = {DarkMode === true? theme.dark : theme.light}>
        <Tabs />
      </NavigationContainer>
      </themeContext.Provider>
    </QueryClientProvider>
    
  );
}
