/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useNavigation } from '@react-navigation/native';
import React , {useState, useLayoutEffect }from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
    Image,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { authService } from '../firebase/AuthService';


const registerNewEmail=(email:string,password:string)=>{
  auth().createUserWithEmailAndPassword(email,'PassowrdAdmin111')
  .then(() => {
      console.log('User created & signed in!');
  })   
  .catch((error) => {
      if (error.code === 'auth/email-already-in-use') 
          console.log('That email address is already in use!');
      if (error.code === 'auth/invalid-email') 
          console.log('That email address is invalid!');
      console.error(error);
  });
}
const Sign1=()=>{
  
  const navigation=useNavigation();
    const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  useLayoutEffect(
    ()=>{
      navigation.setOptions(
        {
          headerTitle:'Sign Up',
          headerShown:false,
        })
    }
  )
  
  return (
    <SafeAreaView style={styles.container}>
      
    <Image source={require('../images/logo1.png')} style={{alignSelf:'center',width:126.91,height:128,marginTop:61}}/>
     <View style={styles.background}>
        <Text style={styles.signup}>Signup</Text>
        <View style={styles.textInputBackground}>
            <TextInput style={styles.textInput} placeholder='your email' value={email}
             onChangeText={text=>setEmail(text) }/>
        </View>
        <View style={styles.passwordBackground}>
            <TextInput style={styles.textInput} placeholder='Password' secureTextEntry={true}></TextInput>
            <Image source={require('../images/Vector.png')} style={{position:'absolute',marginLeft:295,width:30,height:19}}/>
            <Image source={require('../images/Rectangle609.png')} style={{position:'absolute',marginLeft:295,width:30,height:19}}/>
        </View>
        <View style={styles.reEnterPasswordBackground}>
            <TextInput style={styles.textInput} placeholder='Re-Enter Password' secureTextEntry={true} ></TextInput>
            <Image source={require('../images/Vector.png')} style={{position:'absolute',marginLeft:295,width:30,height:19}}/>
            <Image source={require('../images/Rectangle609.png')} style={{position:'absolute',marginLeft:295,width:30,height:19}}/>
        </View>
        <Pressable style={styles.signupButtun} 
          onPress={()=>
            {
          authService.register(email,password); }
            }>
          <Text style={{color:'white'}}>SIGNUP</Text>
          <Image source={require('../images/Stroke2.png')} style={{marginLeft:3,width:16,height:12}}/>
        </Pressable>
        <Pressable style={styles.loginButtun}>
          <Text>LOGIN</Text>
        </Pressable>
     </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:
  {
    backgroundColor:"#262146",
    height:'100%',
    width:'100%',
    
  },
  
  background:
  {
    display: 'flex',
    flexDirection:'column',
    backgroundColor:'#F8F8FF',
    top:61,
    width:'100%',
    height:'100%',
  },
  signup:
  {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 22,
    color:'#5A5A89',
    width:93,
    height:22,
    marginTop:40,
    marginLeft:20,
  },
    textInputBackground:
  {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop:0,
    paddingRight:12,
    paddingBottom:0,
    paddingLeft:16,

    gap: 10,
    width: 335,
    height: 44,
    backgroundColor: 'white',
    borderRadius:4,
    marginLeft:20,
    marginRight:20,
    marginTop:24,
  },
textInput:
{
    fontFamily: 'roboto',
    fontStyle: 'normal',
    alignItems: 'center',
    color: 'black',
},
passwordBackground:
{
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingTop:0,
  paddingRight:12,
  paddingBottom:0,
  paddingLeft:16,

  gap: 10,
  width: 335,
  height: 44,
  backgroundColor: 'white',
  borderRadius:4,
  marginLeft:20,
  marginRight:20,
  marginTop:24,
},
reEnterPasswordBackground:{

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop:0,
    paddingRight:12,
    paddingBottom:0,
    paddingLeft:16,
  
    gap: 10,
    width: 335,
    height: 44,
    backgroundColor: 'white',
    borderRadius:4,
    marginLeft:20,
    marginRight:20,
    marginTop:24,
}
,
signupButtun:
{
  display:'flex',
  flexDirection:'row',
  backgroundColor:"#0058B9",
  marginTop:98.25,
  marginLeft:20,
  marginRight:20,
  alignItems:'center',
  justifyContent:'center',
  borderRadius:10,
  width:335,
  height:36,
},
loginImage:{
  display:'flex',
  marginLeft:8,
  width:20,
  height:20,

},
loginButtun:
{

  display:'flex',
  flexDirection:'row',
  backgroundColor:"#F1F1F9",
  marginTop:28.75,
  marginLeft:20,
  marginRight:20,
  alignItems:'center',
  justifyContent:'center',
  borderRadius:10,
  width:335,
  height:36,
}
  
});

export default Sign1;
