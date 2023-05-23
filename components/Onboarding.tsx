/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect ,useRef} from 'react';
import {
    SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import Rectangle1 from '../images/Rectangle1.svg'
import Rectangle2 from '../images/Rectangle2.svg'
import Loading1 from '../images/loading1.svg'
import LoadingFill from '../images/loadingFill.svg'


const styles = StyleSheet.create({
  container:
  {
    backgroundColor:"#262146",
    height:'100%',
    width:'100%',
    
  },

});

const Onboarding=()=>{
  const entries=[{content:'Welcome to Dispatcher,the right way to read your  news. Just open the app'},
  {content:'Search your fields of intrest and the best part..'},{content:'Save all your articles for later,filter, learn and explore the lates news'}];

  const { width, height } = Dimensions.get('window');
  const navigation=useNavigation<any>();
  useLayoutEffect(
    ()=>{
      navigation.setOptions(
        {
          headerTitle:'Onboarding',
          headerShown:false,
        })
    }
  )
  const renderItem = ({item,index}:any) => {

    return (
     <View>
        <SafeAreaView style={styles.container}>  
            <Loading1 width='255' height='15' style={{position:'absolute',top:10,left:62,}}/>
            <LoadingFill width='100' height='15' style={{position:'absolute',top:10,left:62}}/>
            <Text style={{marginLeft:100,top:95,color:'white',fontSize:32,fontWeight:'700',}}>Dispatcher</Text>
              <Text style={{color:'white',top:144,left:42,width:290,fontSize:22}}>{item.content}</Text>
              <Rectangle2 width='363' height='366'
                  style={{position:'absolute',left:-80,bottom:-40}}/>
              <Rectangle1 width='363' height='366'
                  style={{position:'absolute',bottom:-40,marginLeft:-85}}/>
              <Pressable onPress={()=>{navigation.navigate('SignIn')}} style={{position:'absolute',bottom:15,}}>
              <Text >Skip</Text>
              </Pressable>
        </SafeAreaView>
     </View>
   );}
  
return (
  <SafeAreaView style={{backgroundColor:'#262146'}}>
  <Carousel
    data={entries}
    renderItem={renderItem}
    sliderWidth={width}
    itemWidth={height}
    />
    </SafeAreaView>
  
);}

export default Onboarding;


