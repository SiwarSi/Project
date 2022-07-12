/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, ScrollView, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import Inscription from './inscription';


const AccueilPatient = ({ navigation }) => {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    return (
        <ScrollView>
            <View style={[styles.container, {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: "column"
            }]}>
                <View style={{ backgroundColor: '#5B779F', padding: 10 }} >
                    <TouchableOpacity onPress={() => navigation.navigate(Inscription)}>
                        <Image source={require('../images/home.png')} />

                    </TouchableOpacity>
                </View>
                <View>
                    <Image source={require('../images/undraw.png')} style={{ marginLeft: 90, marginTop: 30 }} />

                </View>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 15, marginTop: 20 }}>
                        Calendrier mictionnel
                    </Text>
                </View>
                <View>
                    <Text style={{ fontSize: 16, marginLeft: 15, marginTop: 20, marginRight: 15 }}>
                        Ce calendrier mictionnel sert à évaluer le fonctionnement  de votre vessie, en notant le volume d’urine éliminé chaque fois que vous
                        urinez, ainsi que le volume de boissons absorbées

                    </Text>
                </View>


                <View style={{ flexDirection: 'row', marginBottom: 33, marginTop: 33 }}>

                    <TouchableOpacity>
                        <View style={{
                            borderRadius: 20,
                            paddingVertical: 14,
                            alignItems: 'center',
                            marginLeft: 0.09 * width,
                            paddingHorizontal: 10,
                            marginTop: 20,
                            backgroundColor: '#FAE7E6',
                            width: 0.18 * height,
                            height: 0.18 * height,
                            shadowColor: '#000000',
                            elevation: 20,
                            shadowOpacity: 80,
                        }} >
                            <Image source={require('../images/time.png')} style={{ width: 0.12 * height, height: 0.12 * height }} />
                            <Text style={{ marginTop: 5, fontWeight: 'bold', color: '#3F3D56' }}>Ajouter</Text>
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
                            width: 0.18 * height,
                            height: 0.18 * height,
                            shadowColor: '#000000',
                            elevation: 20,
                            shadowOpacity: 80,
                        }} >
                            <Image source={require('../images/eyes-cartoon.png')} style={{ width: 0.12 * height, height: 0.12 * height }} />
                            <Text style={{ marginTop: 5, color: '#3F3D56', fontWeight: 'bold' }}>Voir </Text>
                        </View>

                    </TouchableOpacity>


                </View>


                <View style={{ flexDirection: 'row', marginTop: 50 }}></View>


            </View >
        </ScrollView >
    )





};
export default AccueilPatient;

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    textSize: {
        textAlign: 'center',
        color: '#E3807B',
        fontWeight: 'bold',
        fontSize: 25

    },
    button: {

        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
        borderColor: '#E3807B',
        borderWidth: 2,

    }

});


