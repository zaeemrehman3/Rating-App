import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Signupbtn = () => {
  const navigation = useNavigation();
  
  const handleSignupPress = () => {
    navigation.navigate('Signupscreen');
  };

  return (
    <TouchableOpacity 
      style={[styles.button, styles.secondaryButton]} 
      onPress={handleSignupPress}
    >
      <Text style={styles.secondaryButtonText}>Sign Up</Text>
    </TouchableOpacity>
  );
};

export default Signupbtn;

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

  secondaryButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc', 
  },

  secondaryButtonText: {
    color: '#000',
    fontSize: hp('2.1%'), 
    fontWeight: '600',
  },
});