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
  const renderItem = ({item,index}:any) => {

    return (
     <View>
        <SafeAreaView style={styles.container}>  
            <Text style={{marginLeft:100,top:95,color:'white',fontSize:32,fontWeight:'700',}}>Dispatcher</Text>
              <Text style={{color:'white',top:144,left:42,width:290,fontSize:22}}>{item.content}</Text>
              <Image source={require('../images/Rectangle2.png')}
                  style={{position:'absolute',width:363,height:366,transform: [{rotate: '-30deg'}],left:-20,bottom:-80}}/>
              <Image source={require('../images/Rectangle1.png')}
                  style={{position:'absolute',width:363,height:366,bottom:-120,left:-20,transform: [{rotate: '-30deg'}],}}/>
              <Pressable onPress={()=>{navigation.navigate('SignIn')}} style={{position:'absolute',bottom:15,}}>
              <Text >Skip</Text>
              </Pressable>
        </SafeAreaView>
     </View>
   );}
  
return (
  <Carousel
    data={entries}
    renderItem={renderItem}
    sliderWidth={width}
    itemWidth={height}
    
    
  />
);}

export default Onboarding;


