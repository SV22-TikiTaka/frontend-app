import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './../Pages/Login/Login';
import Tabs from './Tabs';

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator 
        screenOptions={{
            headerShown: false}} initialRouteName='Login'>
            <Stack.Screen name = 'Login' component = {Login}/>    
            <Stack.Screen name = 'Home' component={Tabs}/>
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default AuthNavigator;
