import { View, Text } from 'react-native';
import React from 'react';
import Splashscreen from '../screens/Splashscreen';
import Authscreen from '../screens/Authscreen';
import Loginscreen from '../screens/Loginscreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signupscreen from '../screens/Signupscreen';
import Verificationscreen from '../screens/Verificationscreen'
import Forgotpasswordscreen from '../screens/Forgotpasswordscreen';
import Manageprofile from '../screens/Manageprofile';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
   <Stack.Navigator
   screenOptions={{headerShown:false}}
   >

    <Stack.Screen name='Splash' component={Splashscreen}/>

    <Stack.Screen name="Auth" component={Authscreen}/>

    <Stack.Screen name="Loginscreen" component={Loginscreen}/>

    <Stack.Screen name='Signupscreen' component={Signupscreen}/>
    
    <Stack.Screen name='Verificationscreen' component={Verificationscreen}/>

    <Stack.Screen name='Forgotpasswordscreen' component={Forgotpasswordscreen}/>

    <Stack.Screen name='Manageprofile' component={Manageprofile}/>





   </Stack.Navigator>
  );
};

export default AuthStack;