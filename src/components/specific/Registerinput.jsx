import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Registerinput = ({ email, setEmail, password, setPassword }) => {
  const [secure, setSecure] = useState(true);
  const [confirmSecure, setConfirmSecure] = useState(true);

  return (
    <View style={styles.form}>
      {/* User Name Field */}
      <View style={styles.inputContainer}>
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>Username</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Sarakhan"
          placeholderTextColor="#999"
        />
      </View>

      {/* Email Field */}
      <View style={[styles.inputContainer, { marginTop: hp('3%') }]}>
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>Your Company Email</Text>
        </View>
        <TextInput
          style={[styles.input, styles.inactiveBorder]}
          placeholder="sarakhan@360gmail.com"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password Field */}
      <View style={[styles.inputContainer, { marginTop: hp('3%') }]}>
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>Password</Text>
        </View>
        <View style={[styles.input, styles.inactiveBorder, styles.passwordRow]}>
          <TextInput
            style={styles.passwordInput}
            placeholder="****************"
            placeholderTextColor="#999"
            secureTextEntry={secure}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <Ionicons
              name={secure ? 'eye-off-outline' : 'eye-outline'}
              size={hp('2.5%')}
              color="#999"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Confirm Password Field */}
      <View style={[styles.inputContainer, { marginTop: hp('3%') }]}>
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>Confirm Password</Text>
        </View>
        <View style={[styles.input, styles.inactiveBorder, styles.passwordRow]}>
          <TextInput
            style={styles.passwordInput}
            placeholder="****************"
            placeholderTextColor="#999"
            secureTextEntry={confirmSecure}
          />
          <TouchableOpacity onPress={() => setConfirmSecure(!confirmSecure)}>
            <Ionicons
              name={confirmSecure ? 'eye-off-outline' : 'eye-outline'}
              size={hp('2.5%')}
              color="#999"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Terms and Policy */}
      <View style={styles.termsContainer}>
        <Text style={styles.subtitle}>
          By Signing Up, You Agree To Our <Text style={styles.highlight}>Terms Of Service</Text> And <Text style={styles.highlight}>Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
};

export default Registerinput;

const styles = StyleSheet.create({
  form: {
    marginTop: hp('4%'),
  },
  inputContainer: {
    width: '100%',
    position: 'relative', // Necessary for absolute label positioning
  },
  labelWrapper: {
    position: 'absolute',
    top: -hp('1.2%'), // Pulls label up to sit on the border
    left: wp('3%'),
    backgroundColor: '#fff', // Masks the border line behind the text
    paddingHorizontal: wp('1%'),
    zIndex: 1,
  },
  label: {
    fontSize: hp('1.7%'),
    color: '#000',
    fontWeight: '600',
  },
  input: {
    height: hp('6.5%'),
    borderWidth: 1,
    borderColor: '#007AFF', // Active border color
    borderRadius: wp('2%'),
    paddingHorizontal: wp('4%'),
    fontSize: hp('1.8%'),
    color: '#000',
    justifyContent: 'center',
  },
  inactiveBorder: {
    borderColor: '#E0E0E0',
  },
  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    height: '100%',
  },
  termsContainer: {
    marginTop: hp('3%'),
    paddingHorizontal: wp('1%'),
  },
  subtitle: {
    color: '#9B9B9B',
    fontSize: hp('1.6%'),
    lineHeight: hp('2.4%'),
  },
  highlight: {
    color: '#007AFF',
    fontWeight: '500',
  },
});