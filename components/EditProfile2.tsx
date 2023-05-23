import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect ,useEffect,useState} from 'react';
import {
  Text,
  View,
  Pressable,
  Alert,StyleSheet,TextInput,BackHandler,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import ProfileIcon from '../images/ProfileIcon.svg'
import ProfileBackgroundIcon from '../images/profileBackground.svg'
import SaveIcon from '../images/saveIcon.svg'
import CancelIcon from '../images/cancelcon.svg'

import { editName } from '../store/emailSlice'

function EditProf2() {
    const navigation=useNavigation();
    const[newName,setNewName]=useState('')

    const dispatch = useDispatch()
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
      <View style={{ flex: 1,backgroundColor:'white', }}>
        <View style={{flexDirection:'row',width:'100%',height:55,backgroundColor:'#262146',justifyContent:'space-between'}}>
        <Pressable >
        <CancelIcon style={{marginTop:20,marginLeft:10}}/>
        </Pressable>
        <Pressable onPress={()=>
          {
            {dispatch(editName(newName));
            navigation.goBack();} 
          
          }}>
        <SaveIcon style={{marginTop:20,marginRight:20}}/>
        </Pressable>

        </View>
        <View style={{flex:0.4,alignItems:'center'}}>
        <ProfileBackgroundIcon width='101' height='101'  style={{marginTop:30}}/>
        <ProfileIcon width='44' height='47'style={{marginTop:-80,}}/>  
        <Pressable style={{marginTop:30}} onPress={()=>
            {
                Alert.alert('Profilr picture', 'Upload new image for your personal Icon', [
                    {
                      text: 'Gallery',
                     
                    },
                    {text: 'Camera', },
                  ]);
            }} >
          <Text style={styles.title} >Change profile picture</Text>
        </Pressable>
        </View>  
        <Text style={styles.name}>Name </Text>
        <View style={styles.textInputBackground}>
            <TextInput style={styles.textInput} placeholder='your name'
             onChangeText={text=>setNewName(text) }
             />
        </View>

        <Text style={styles.email}>Email </Text>
        <View style={styles.textInputBackground}>
            <TextInput style={styles.textInput} placeholder='your email'
             />
        </View>
      </View>
  
  
    );
  }
  const styles = StyleSheet.create({editProfile:{
position:'absolute',
top:20,right:26,fontSize:12,fontWeight:700,color:'#5A5A89',backgroundColor:'#E5E5E5'
  },
  title:{
    fontFamily:'Roboto',
    height:32,
    fontSize:16,
    color:'#262146',
    lineHeight:32,},
  name:
  {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 32,
    color:'#262146',
    width:93,
    height:28,
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
    borderColor:'#D9DBE9',
    borderWidth:1,
    borderRadious:4,
  },textInput:
  {
      fontFamily: 'roboto',
      fontStyle: 'normal',
      alignItems: 'center',
      color: 'black',
  },

  email:
  {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 32,
    color:'#262146',
    width:93,
    height:28,
    marginLeft:20,
  },
  });
  export default EditProf2;