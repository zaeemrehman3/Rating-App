import { View, Text } from 'react-native';
import React from 'react';
import Authscreen from '../screens/Authscreen';
import Loginscreen from '../screens/Loginscreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signupscreen from '../screens/Signupscreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
   <Stack.Navigator>

    <Stack.Screen name="Auth" component={Authscreen} options={{headerShown:false}} />

    <Stack.Screen name="Loginscreen" component={Loginscreen} options={{headerShown:false}} />

    <Stack.Screen name='Signupscreen' component={Signupscreen} />



   </Stack.Navigator>
  );
};

export default AuthStack;