import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect} from 'react';
import {
  Text,
  View,
  Pressable,
  Image,Alert,Dimensions,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { authService } from '../../firebase/AuthService';
import { logout } from '../../store/emailSlice';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../Profile';
import EditProf2 from '../EditProfile2';
import Terms from '../Terms';
import Settings from '../Settings';
import SettingIcon from '../../images/settingIcon.svg'
import TermsIcon from '../../images/termsIcon.svg';
import LogoutIcon1 from '../../images/logoutIcon1.svg'
import LogoutIcon2 from '../../images/logoutIcon2.svg'
import ProfileIcon from '../../images/ProfileIcon.svg'

const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;
const widthScale = (size:number) => (width / guidelineBaseWidth) * size;
const heightScale = (size:number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size:number, factor = 0.5) => size + (widthScale(size) - size) * factor;

function MyProfile() {
    const navigation=useNavigation<any>();
    const dispatch = useDispatch()
    const name = useSelector((state:{email:any}) => state.email.name);
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
  
      <View style={{ flex: 1 }}>
      <View style={{flexDirection:'row',display:'flex',width:widthScale(375),height:heightScale(79),backgroundColor:'white',}}>
      <View style={{flex:1}}>
      <Text style={{
        fontFamily:'Roboto',
        marginLeft:widthScale(16),
        marginTop:heightScale(15),
        fontWeight:'bold',
        fontSize:24,
        color:'#262146',
        }} >Hi {name}</Text>
<Pressable onPress={
    ()=>
    {
      navigation.navigate('Profile');
    }
  }>
  <Text style={{
        fontFamily:'Roboto',
        fontSize:14,
        fontWeight:'400',
        marginLeft:widthScale(16),
        color:'#575565',
        }} >
          edit my profile
          </Text>
  </Pressable>

</View>
     <Image source={require('../../images/profileBackground.png')} style={{marginTop:15,}}/>
      <ProfileIcon style={{right:36,marginTop:20,}}/>
        </View>
  <View>
      <Pressable  style={{flexDirection:'row'}} onPress={()=>
        {
          navigation.navigate('Settings');
        }} >
           <SettingIcon style={{marginLeft:widthScale(16),marginTop:heightScale(22.5)}}/>
        <View>
              <Text style={{
            fontFamily:'Roboto',
              fontSize:16,
              color:'#262146',
              marginTop:heightScale(16),
              marginLeft:widthScale(8),
              lineHeight:32,}} >Settings</Text>
          </View>
      </Pressable>
      <Image source={require('../../images/Line2.png')} style={{marginLeft:20,marginRight:20,width:335,marginTop:15}}/>
  
      <Pressable style={{flexDirection:'row'}} onPress={()=>
        {
          navigation.navigate('Terms');
        
        }}>
        <TermsIcon style={{marginLeft:widthScale(16),marginTop:heightScale(8)}}/>
          <View>
            <Text 
            style={{fontFamily:'Roboto',
            fontSize:16,
            color:'#262146',
            marginLeft:widthScale(8),
            lineHeight:32,}} 
            >Terms & privacy
          </Text>
         </View>
      </Pressable>
      <Image source={require('../../images/Line2.png')} style={{marginLeft:20,marginRight:20,width:335,marginTop:8}}/>
      <Pressable style={{flexDirection:'row'}} onPress={()=>
        {
          try{
          authService.logout();
          navigation.navigate('SignIn');
          dispatch(logout());
        }
          catch(e:any){
            {
              Alert.alert('Error', e.message, [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
            }
          };
        }}>
        <LogoutIcon1 style={{marginLeft:widthScale(16),marginTop:heightScale(8)}}/>
        <LogoutIcon2 style={{marginTop:heightScale(12)}}/>
          <View>
            <Text 
            style={{fontFamily:'Roboto',
            fontSize:16,
            color:'#262146',
            lineHeight:32,
            marginLeft:widthScale(8),
          }} 
            >Logout</Text>
        </View>
      </Pressable>
      </View>
      </View>
    );
  }
  
  const Stack1 = createNativeStackNavigator();
  
  
  const ProfileScreen=()=>{
    return (
      <Stack1.Navigator>
        <Stack1.Screen name={'MainProfile'} component={MyProfile} />
        <Stack1.Screen name={'Profile'} component={Profile} />
        <Stack1.Screen name={'Edit2'} component={EditProf2} />
        <Stack1.Screen name={'Terms'} component={Terms} />
        <Stack1.Screen name={'Settings'} component={Settings} />
      </Stack1.Navigator>
    
    );
  }
  export default ProfileScreen;