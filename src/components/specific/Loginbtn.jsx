import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Loginbtn = () => {

  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Loginscreen');
  };


  return (
    <TouchableOpacity style={[ styles.button, styles.primaryButton ]}  onPress={handleLoginPress} >
      <Text style={styles.primaryButtonText} >Log In</Text>
    </TouchableOpacity>

  );
};

export default Loginbtn;

const styles = StyleSheet.create({

  button: {
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  primaryButton: {
    backgroundColor: '#007AFF', 
    elevation: 2, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

});