/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableHighlight, TouchableOpacity, Image, TouchableWithoutFeedbackBase } from 'react-native';
import { Dimensions } from "react-native";

const ProfileMedecin = () => {
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

            <View style={{ alignItems: 'center' }}>
               <Image source={require('../images/profileMedecin.png')} style={{
                  width: 0.2 * height, height: 0.2 * height, borderRadius: 100,
                  marginTop: -0.1 * height, borderColor: '#fff', borderWidth: 8
               }}></Image>
               <Text style={{ fontSize: 22, fontWeight: 'bold', padding: 10, color: '#3F3D56' }}>Dr. Ahmed Ali</Text>
               <Text style={{ fontSize: 15, color: '#3F3D56', marginBottom: 15 }}>33, Homme</Text>
            </View>
            <View style={{
               alignSelf: 'center',
               flexDirection: 'row',
               justifyContent: 'center',
               backgroundColor: '#fff',
               width: 0.9 * width,

               padding: 20,
               paddingBottom: 22,
               borderRadius: 10,
               shadowOpacity: 80,
               elevation: 15,
               marginTop: 10,
            }}>
               <Image source={require('../images/address.png')}
                  style={{ width: 20, height: 20 }}></Image>
               <Text style={{ fontSize: 15, color: '#3F3D56', fontWeight: 'bold', marginLeft: 10 }}>Paris</Text>
            </View>
            <View style={{
               alignSelf: 'center',
               flexDirection: 'row',
               justifyContent: 'center',
               backgroundColor: '#fff',
               width: 0.9 * width,
               padding: 20,
               paddingBottom: 22,
               borderRadius: 10,
               shadowOpacity: 80,
               elevation: 15,
               marginTop: 10,
            }}>
               <Image source={require('../images/phone.png')}
                  style={{ width: 20, height: 20 }}></Image>
               <Text style={{ fontSize: 15, color: '#3F3D56', fontWeight: 'bold', marginLeft: 10 }}>+33 07 ** ** **</Text>
            </View>
            <View style={{
               alignSelf: 'center',
               flexDirection: 'row',
               justifyContent: 'center',
               backgroundColor: '#fff',
               width: 0.9 * width,
               padding: 20,
               paddingBottom: 22,
               borderRadius: 10,
               shadowOpacity: 80,
               elevation: 15,
               marginTop: 10,
            }}>
               <Image source={require('../images/mail.png')}
                  style={{ width: 20, height: 20 }}></Image>
               <Text style={{ fontSize: 15, color: '#3F3D56', fontWeight: 'bold', marginLeft: 10 }}>ahmed.ali@gmail.com</Text>
            </View>

            <View style={{ alignItems: 'center', marginTop: 20 }}>
               <TouchableOpacity>
                  <View style={{
                     borderRadius: 20,
                     paddingVertical: 14,
                     alignItems: 'center',

                     paddingHorizontal: 10,
                     marginTop: 20,
                     backgroundColor: '#5B779F',
                     width: 0.18 * height,
                     height: 0.18 * height,
                     shadowColor: '#000000',
                     elevation: 20,
                     shadowOpacity: 80,
                  }} >
                     <Image source={require('../images/patientMedecin.png')} style={{ width: 0.12 * height, height: 0.12 * height }} />
                     <Text style={{ marginTop: 5, color: '#fff', fontWeight: 'bold' }}>Patients</Text>
                  </View>
                  <View>
                     <Text>

                     </Text>
                  </View>

               </TouchableOpacity>


            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}></View>

         </ScrollView>
      </View>
   );


};
export default ProfileMedecin;

