import { View, Text } from 'react-native';
import React from 'react';
import Authscreen from '../screens/Authscreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
   <Stack.Navigator>
    <Stack.Screen name="Auth" component={Authscreen} />
   </Stack.Navigator>
  );
};

export default AuthStack;