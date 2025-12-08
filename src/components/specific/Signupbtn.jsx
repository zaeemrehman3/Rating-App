import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const Signupbtn = () => {

   const navigation = useNavigation();
  
    const handleSignupPress = () => {
      navigation.navigate('Signupscreen');
    };

  return (
   <TouchableOpacity style={[styles.button, styles.secondaryButton]}  onPress={handleSignupPress} >
    <Text style={styles.secondaryButtonText} >Sign Up</Text>
   </TouchableOpacity>
  );
};

export default Signupbtn;

const styles = StyleSheet.create({

   button: {
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  secondaryButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc', 
  },

  secondaryButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },

});