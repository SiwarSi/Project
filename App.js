/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import AjouterMédecin from './src/ajouterMédecin';
import Inscription from './src/inscription';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AjouterAdmin from './src/ajouterAdmin';
import Calendrier from './src/Calendrier';
import Symptomes from './src/symptomes';
import Login from './src/Login';
import ListeAdmin from './src/ListeAdmins';
import Listedespatients from './src/ListeDesPatients';
import ListeMedecins from './src/ListeMedecins';
import ListePatients from './src/ListePatients';
import Listecalendriers from './src/ListesCalendriers';
import VoirCalendrier from './src/PremierjourCycle';
import Questionnaire from './src/Questionnaire';
import Voircycle from './src/Voircycle';
import Admin from './src/AdminWelcome';
import Besoin from './src/besoin';
import Boisson from './src/boisson';
import Coucher from './src/coucher';
import Doctor from './src/DoctorWelcome';
import Onboarding from './src/Onboarding';
import ProfileAdmin from './src/ProfileAdmin';
import ProfileMedecin from './src/ProfileMedecin';
import ProfilePatient from './src/ProfilePatient';
import Protection from './src/protection';
import Reveiller from './src/reveiller';
import Toilette from './src/toilette';
import FlatButton from './src/Button';
import ajouterMédecin from './src/ajouterMédecin';






export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Toilette" component={Toilette}
          options={{headerShown: false}} />

        <Stack.Screen name="Inscription" component={Inscription}
          options={{
            headerShown: false}} />
        <Stack.Screen name="Admin" component={Admin}
          options={{
            headerShown: false}} />

        <Stack.Screen name="ListeMedecins" component={ListeMedecins}
          options={{
            headerShown: false}} />
        <Stack.Screen name="ProfileMedecin" component={ProfileMedecin}
          options={{
            headerShown: false}} />

        <Stack.Screen name="Symptomes" component={Symptomes} options={{
            headerShown: false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );




}



