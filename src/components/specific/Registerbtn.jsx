import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
// Import responsive tools
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Registerbtn = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Verificationscreen')}
        >
          <Text style={styles.buttonText}>Register Account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.LoginRow}>
        <Text style={styles.LoginText}>Do You already have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Loginscreen')}>
          <Text style={styles.LoginLink}> Login </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Registerbtn;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  buttonWrapper: {
    width: wp('86%'), 
    marginBottom: hp('2%'),
  },
  button: {
    height: hp('6.5%'), 
    backgroundColor: '#007AFF',
    borderRadius: wp('2.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: hp('2.1%'), 
    fontWeight: '600',
  },
  LoginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp('1%'),
    marginBottom: hp('3%'),
  },
  LoginText: {
    color: '#9B9B9B',
    fontSize: hp('1.7%'),
  },
  LoginLink: {
    color: '#007AFF',
    fontWeight: '600',
    fontSize: hp('1.7%'),
  },
});