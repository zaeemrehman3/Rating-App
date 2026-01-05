import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Loginbtn = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Loginscreen');
  };

  return (
    <TouchableOpacity 
      style={[styles.button, styles.primaryButton]} 
      onPress={handleLoginPress}
    >
      <Text style={styles.primaryButtonText}>Log In</Text>
    </TouchableOpacity>
  );
};

export default Loginbtn;

const styles = StyleSheet.create({
  button: {
    height: hp('6.5%'), 
    borderRadius: wp('2.5%'), 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('2%'),
    width: wp('85%'), 
    alignSelf: 'center',
  },

  primaryButton: {
    backgroundColor: '#007AFF', 
    elevation: 2, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: hp('0.2%') },
    shadowOpacity: 0.1,
    shadowRadius: wp('1%'),
  },

  primaryButtonText: {
    color: '#fff',
    fontSize: hp('2.2%'), 
    fontWeight: '600',
  },
});