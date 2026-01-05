import { StyleSheet, Text, View, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Verificationscreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" size={hp('3.5%')} color="#007AFF" />
      </TouchableOpacity>

      <Text style={styles.title}>
        Verify <Text style={styles.highlight}>Account </Text>
      </Text>
      
      <Text style={styles.subtitle}>
        Code Has Been Send To <Text style={{ color: '#0a0a0aff' }}>sarakhan360@gmail.com</Text>
      </Text>
      <Text style={styles.subtitle}>
        Enter The Code To Verify Your Account.
      </Text>

      <View style={styles.otpContainer}>
        <TextInput style={[styles.otpBox, styles.active]} keyboardType="number-pad" maxLength={1} />
        <TextInput style={[styles.otpBox, styles.active]} keyboardType="number-pad" maxLength={1} />
        <TextInput style={styles.otpBox} keyboardType="number-pad" maxLength={1} />
        <TextInput style={styles.otpBox} keyboardType="number-pad" maxLength={1} />
      </View>

      <Text style={styles.resendText}>
        Didn’t Receive Code? <Text style={styles.resend}>Resend</Text>
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Verificationscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: wp('5%'), 
  },
  title: {
    fontSize: hp('3.5%'), 
    fontWeight: '700',
    marginTop: hp('3%'),
  },
  highlight: {
    color: '#1E88FF',
  },
  subtitle: {
    fontSize: hp('1.8%'),
    color: '#9A9A9A',
    marginTop: hp('1%'),
  },
  otpContainer: {
    flexDirection: 'row',
    marginTop: hp('4%'),
    justifyContent: 'space-between', 
  },
  otpBox: {
    width: wp('16%'), 
    height: wp('16%'), 
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    textAlign: 'center',
    fontSize: hp('2.5%'),
  },
  active: {
    borderColor: '#1E88FF',
  },
  resendText: {
    marginTop: hp('3%'),
    fontSize: hp('1.8%'),
    color: '#9A9A9A',
  },
  resend: {
    color: '#1E88FF',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#1E88FF',
    paddingVertical: hp('2%'),
    borderRadius: 10,
    position: 'absolute',
    bottom: hp('5%'),
    left: wp('5%'),
    right: wp('5%'),
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: hp('2%'),
    fontWeight: '600',
  },
});