/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { enableScreens } from 'react-native-screens';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Sign from './components/SignIn';
import Sign1 from './components/SignUp';
import Splash1 from './components/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
const Stack = createNativeStackNavigator();


function App(){
  return (
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name={'Splash'} component={Splash1} />
      <Stack.Screen name={'SignIn'} component={Sign} />
      <Stack.Screen name={'SignUp'} component={Sign1} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backGround:
  {
    backgroundColor:"#262146",
    height:'100%',
    width:'100%',
  },
});

export default App;
