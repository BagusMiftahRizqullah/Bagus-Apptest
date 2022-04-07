import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SplashScreen from 'react-native-splash-screen';
// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//Screen
import LaunchScreen from './src/Screen/LaunchScreen/LaunchScreen';
import HomeScreen from './src/Screen/HomeScreen/HomeScreen';
import AddScreen from './src/Screen/HomeScreen/AddScreen';
import HomeDetailScreen from './src/Screen/HomeScreen/HomeDetailScreen';



const Root = () => {
    const Stack = createStackNavigator();


  return (
       <NavigationContainer>
            <Stack.Navigator initialRouteName={'LaunchScreen'}>
                <Stack.Screen
                name="LaunchScreen"
                component={LaunchScreen}
                options={{headerShown: false}}
                />
                <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{headerShown: false}}
                />
                 <Stack.Screen
                name="HomeDetail"
                component={HomeDetailScreen}
                options={{headerShown: false}}
                />
                <Stack.Screen
                name="Add"
                component={AddScreen}
                options={{headerShown: false}}
                />
            </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Root

const styles = StyleSheet.create({})