/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect ,useEffect} from 'react';
import {
  Image,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteScreen from './profileTabs/FovoriteTab';
import ProfileScreen from './profileTabs/ProfileTab';
import HomeScreen from './profileTabs/HomeTab';
import ProfileTabBar from '../images/profileTabBar.svg'
import HomeTabBar from '../images/HomeTabBar.svg'
import FavoriteTabBar from '../images/FavoriteTabbar.svg'
import ChooseTabBar from '../images/chooseTabBar.svg'


const Tab = createBottomTabNavigator();
export default function Home() {
  const navigation=useNavigation();
  useLayoutEffect(
    ()=>{
      navigation.setOptions(
        {
          headerTitle:'Sign In',
          headerShown:false,
        })
    }
  )
  return (
      <Tab.Navigator  initialRouteName='HomeTab' screenOptions={{
        tabBarActiveTintColor: '#262160',
        tabBarInactiveTintColor: '#262146',
        tabBarShowLabel: false,headerShown:false,
        tabBarStyle: {
                  backgroundColor: '#262160',
                  paddingBottom: 3
            }
     }}>
      <Tab.Screen name="ProfileTab" component={ProfileScreen} 
         options={{
          tabBarIcon: ({ color }) => (
            <ProfileTabBar/>
         ), 
         tabBarLabel: ''             
        }}/>
        <Tab.Screen name="HomeTab" component={HomeScreen}
         options={{
          tabBarIcon: ({ color }) => (
            <HomeTabBar/>
         ), 
         tabBarLabel: ''             
        }}/>
         <Tab.Screen name="FavoriteTab" component={FavoriteScreen}
         options={{
          tabBarIcon: ({ color }) => (
            <FavoriteTabBar/>
         ), 
         tabBarLabel: ''             
        }} />
      </Tab.Navigator>
  );
}
