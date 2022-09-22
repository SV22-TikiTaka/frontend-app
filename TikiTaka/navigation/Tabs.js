import React,{useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from '../Pages/Main/Main';
import Inbox from '../Pages/Inbox/Inbox';
import Settings from '../Pages/Settings/Settings';
import History from '../Pages/History/History';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import themeContext from '../config/themeContext.js';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const MainIcon = '../assets/Icons/Main.png';
  const InboxIcon = '../assets/Icons/Inbox.png';
  const HistoryIcon = '../assets/Icons/History.png';
  const SettingsIcon = '../assets/Icons/Settings.png';

  const theme =  useContext(themeContext);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          paddingBottom: 20,
          height: 70,
          borderTopWidth: 2,
          backgroundColor: theme.background,
          ...Platform.select({
            ios: {
              height: 80,
              paddingBottom: 40,
              paddingLeft: 15,
              paddingRight: 15,
            },
          }),
        },
      }}>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require(MainIcon)}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#FF8F8F' : theme.navcolor,
                }}
              />
              <Text
                style={{color: focused ? '#FF8F8F' : theme.navcolor, fontSize: 10, fontFamily:'SBAggroM', marginTop:3}}>
                MAIN
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require(InboxIcon)}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#779874' : theme.navcolor,
                }}
              />
              <Text
                style={{color: focused ? '#779874' : theme.navcolor, fontSize: 10, fontFamily:'SBAggroM', marginTop:3}}>
                INBOX
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require(HistoryIcon)}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#FF8F8F' : theme.navcolor,
                }}
              />
              <Text
                style={{color: focused ? '#FF8F8F' : theme.navcolor, fontSize: 10, fontFamily:'SBAggroM', marginTop:4}}>
                HISTORY
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require(SettingsIcon)}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#779874' : theme.navcolor,
                }}
              />
              <Text
                style={{color: focused ? '#779874' : theme.navcolor, fontSize: 10, fontFamily:'SBAggroM', marginTop:3}}>
                SETTINGS
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
