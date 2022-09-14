import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../Pages/Main/Main';
import Inbox from '../Pages/Inbox/Inbox';
import Settings from '../Pages/Settings/Settings';
import History from '../Pages/History/History';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();

export default function Tabs(){
    const MainIcon = '../assets/Icons/Main.png';
    const InboxIcon = '../assets/Icons/Inbox.png';
    const HistoryIcon = '../assets/Icons/History.png';
    const SettingsIcon = '../assets/Icons/Settings.png';
    return(
        <Tab.Navigator tabBarOptions = {{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#ffffff',
                borderRadius: 15,
                height: 90,
                ...styles.shadow
            }
        }}>
            <Tab.Screen name = 'Main' component={Main} options = {{
                tabBarIcon : ({focused}) => (
                    <View style = {{alignItems: 'center', justifyContent:'center', top:10}}>
                        <Image source={require(MainIcon)}
                        resizeMode = "contain"
                        style = {{
                            width:25,
                            height: 25,
                            tintColor : focused ? '#FF8F8F': '#000000'
                        }}/>
                        <Text
                            style = {{color: focused ? '#FF8F8F': '#000000', fontSize:12}}>
                            Main
                        </Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name = 'Inbox' component={Inbox} options = {{
                tabBarIcon : ({focused}) => (
                    <View style = {{alignItems: 'center', justifyContent:'center', top:10}}>
                        <Image source={require(InboxIcon)}
                        resizeMode = "contain"
                        style = {{
                            width:25,
                            height: 25,
                            tintColor : focused ? '#779874': '#000000'
                        }}/>
                        <Text
                            style = {{color: focused ? '#779874': '#000000', fontSize:12}}>
                            INBOX
                        </Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name = 'History' component={History} options = {{
                tabBarIcon : ({focused}) => (
                    <View style = {{alignItems: 'center', justifyContent:'center', top:10}}>
                        <Image source={require(HistoryIcon)}
                        resizeMode = "contain"
                        style = {{
                            width:25,
                            height: 25,
                            tintColor : focused ? '#FF8F8F': '#000000'
                        }}/>
                        <Text
                            style = {{color: focused ? '#FF8F8F': '#000000', fontSize:12}}>
                            HISTORY
                        </Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name = 'Settings' component={Settings} options = {{
                tabBarIcon : ({focused}) => (
                    <View style = {{alignItems: 'center', justifyContent:'center', top:10}}>
                        <Image source={require(SettingsIcon)}
                        resizeMode = "contain"
                        style = {{
                            width:25,
                            height: 25,
                            tintColor : focused ? '#779874': '#000000'
                        }}/>
                        <Text
                            style = {{color: focused ? '#779874': '#000000', fontSize:12}}>
                            SETTINGS
                        </Text>
                    </View>
                ),
            }}/>
            
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow:{
        shadowColor:'#7f5df0',
        shadowOffset:{
            width:0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius:3.5,
        elevation: 5
    }
})
