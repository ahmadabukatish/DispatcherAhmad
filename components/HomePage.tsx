/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import {
    SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  Image,
} from 'react-native';

const Home=()=>{
  const navigation=useNavigation();
  useLayoutEffect(
    ()=>{
      navigation.setOptions(
        {
          headerTitle:'Home',
          headerShown:false,
        })
    }
  )
  return (
    <Pressable>
    <SafeAreaView style={styles.container}>
   
    <Image source={require('../images/logo1.png')}
     style={{alignSelf:'center',width:126.91,height:128,marginTop:61}}/>
     <Text style={{top:440,fontWeight:700,alignSelf:'center'
    ,color:'white',fontSize:32}}>Welcome to the home page</Text>
    </SafeAreaView>

    </Pressable>
  );
};

const styles = StyleSheet.create({
  container:
  {
    backgroundColor:"#262146",
    height:'100%',
    width:'100%',
    
  },

  
});

export default Home;
