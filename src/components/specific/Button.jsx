import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Button = ({ submitFunc }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button} 
        onPress={submitFunc }
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <View style={styles.signupRow}>
        <Text style={styles.signupText}>Don't have an account ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signupscreen')}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Button;


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp('5%'),
    marginTop: hp('4%'),
  },
  button: {
    height: hp('7%'),
    backgroundColor: '#007AFF',
    borderRadius: wp('2.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: wp('4.2%'),
    fontWeight: '700',
  },
  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp('2.5%'),
  },
  signupText: {
    color: '#4B4B4B', 
    fontSize: wp('3.5%'),
  },
  signupLink: {
    color: '#007AFF',
    fontWeight: '500',
    fontSize: wp('3.5%'),
  },
});
