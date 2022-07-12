/* eslint-disable prettier/prettier */
import React from 'react';
import { View,  Text, Image,Dimensions } from 'react-native';
import {useState} from 'react';
import Slider from '@react-native-community/slider';

export default function ValueSliderN() {
    const [range, setRange] = useState('50%');
    const [sliding, setSliding] = useState('Inactive');
    var width = Dimensions.get('window').width; //full width
    var height = Dimensions.get('window').height; //full height
  return (
    <View >
<Text style={{ fontSize:20,fontWeight:'bold', color:'#E3807B',alignSelf:"center",marginTop:10}}>{range}</Text>
     <View style={{flexDirection: 'row',marginTop:10}} > 
         <Image source={require('../images/goutte1.png')} style={{ width: 20, height: 20,marginLeft:0 }}></Image>
         <Image source={require('../images/goutte2.png')} style={{ width: 28, height: 20,marginLeft: 1/3*width}}></Image>
         <Image source={require('../images/goutte3.png')} style={{ width: 28, height: 28,marginLeft: 1/3*width}}></Image>


     </View>

     <Slider
          style={{ width: 0.8*width, height:40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#E3807B"
          maximumTrackTintColor="#3F3D56"
          thumbTintColor="#5B779F"
          value={0}
          onValueChange={value => setRange(parseInt(value * 100 * 2+100) + 'ml')}
          onSlidingStart = {() => setSliding('Sliding')}
          onSlidingComplete = {() => setSliding('Inactive')}


     />


</View>
  );
}






