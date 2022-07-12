/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableHighlight, TouchableOpacity, Image, TouchableWithoutFeedbackBase } from 'react-native';
import { Dimensions } from "react-native";

const Doctor = () => {
   var width = Dimensions.get('window').width; //full width
   var height = Dimensions.get('window').height; //full height
   return (
      <View>
         <ScrollView>
            <View style={{ padding: 10, width: width, backgroundColor: '#5B779F', height: 0.15 * height }}>
               <TouchableOpacity>
                  <View></View>
                  <View></View>
               </TouchableOpacity>

            </View>
            <View style={{ marginTop: 0.12 * height }}>
               <Text style={{ marginLeft: 0.1 * width, fontSize: 22, fontWeight: 'bold', color: '#3F3D56' }}>Bonjour, Dr. Ahmed !</Text>
            </View>



            <View style={{ flexDirection: 'row', marginTop: 30 }}>
               <TouchableOpacity>
                  <View style={{
                     borderRadius: 20,
                     paddingVertical: 14,
                     alignItems: 'center',
                     marginLeft: 0.09 * width,
                     paddingHorizontal: 10,
                     marginTop: 20,
                     backgroundColor: '#FAE7E6',
                     width: 0.22 * height,
                     height: 0.22 * height,
                     shadowColor: '#000000',
                     elevation: 20,
                     shadowOpacity: 80,
                  }} >
                     <Image source={require('../images/profile.png')} style={{ width: 0.12 * height, height: 0.12 * height }} />
                     <Text style={{ marginTop: 5, color: '#3F3D56', fontWeight: 'bold' }}>Profil</Text>
                  </View>

               </TouchableOpacity>
               <TouchableOpacity>
                  <View style={{
                     borderRadius: 20,
                     paddingVertical: 14,
                     alignItems: 'center',
                     marginLeft: 0.09 * width,
                     paddingHorizontal: 10,
                     marginTop: 20,
                     backgroundColor: '#FAE7E6',
                     width: 0.22 * height,
                     height: 0.22 * height,
                     shadowColor: '#000000',
                     elevation: 20,
                     shadowOpacity: 80,
                  }} >
                     <Image source={require('../images/patient.png')} style={{ width: 0.15 * height, height: 0.12 * height }} />
                     <Text style={{ marginTop: 5, color: '#3F3D56', fontWeight: 'bold' }}>Patients</Text>
                  </View>

               </TouchableOpacity>

            </View>
            <View style={{ alignItems: 'center', marginTop: 10 }}>
               <TouchableOpacity>
                  <View style={{
                     borderRadius: 20,
                     paddingVertical: 14,
                     alignItems: 'center',

                     paddingHorizontal: 10,
                     marginTop: 20,
                     backgroundColor: '#FAE7E6',
                     width: 0.22 * height,
                     height: 0.22 * height,
                     shadowColor: '#000000',
                     elevation: 20,
                     shadowOpacity: 80,
                  }} >
                     <Image source={require('../images/doctor.png')} style={{ width: 0.12 * height, height: 0.12 * height }} />
                     <Text style={{ marginTop: 5, color: '#3F3D56', fontWeight: 'bold' }}>Hopital</Text>
                  </View>

               </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 50 }}></View>


         </ScrollView>
      </View>
   );


};
export default Doctor;

