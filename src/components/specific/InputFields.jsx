import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const InputFields = ({ email, setEmail, password, setPassword }) => {
  const [secure, setSecure] = useState(true);
  const navigation = useNavigation();

  return (
    <View style={styles.form}>
      <View style={styles.inputContainer}>
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>User Name / Email</Text>
        </View>
        <TextInput
          style={[styles.input, styles.activeBorder]}
          placeholder="Enter Your Username / Email"
          placeholderTextColor="#C7C7CD"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={[styles.inputContainer, { marginTop: hp('3%') }]}>
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>Password</Text>
        </View>
        <View style={[styles.passwordBox, styles.inactiveBorder]}>
          <TextInput
            style={styles.passwordInput}
            placeholder="****************"
            placeholderTextColor="#C7C7CD"
            secureTextEntry={secure}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <Ionicons
              name={secure ? 'eye-off-outline' : 'eye-outline'}
              size={wp('5.5%')}
              color="#999"
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.forgotBtn}
        onPress={() => navigation.navigate('Forgotpasswordscreen')}
      >
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputFields;


const styles = StyleSheet.create({
  form: {
    marginTop: hp('4%'),
    paddingHorizontal: wp('5%'),
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
  },
  labelWrapper: {
    position: 'absolute',
    top: hp('-1.2%'),
    left: wp('3%'),
    backgroundColor: '#FFF', 
    paddingHorizontal: wp('1.5%'),
    zIndex: 1,
  },
  label: {
    fontSize: wp('3.2%'),
    color: '#000',
    fontWeight: '500',
  },
  input: {
    height: hp('7%'),
    borderWidth: 1.5,
    borderRadius: wp('2.5%'),
    paddingHorizontal: wp('4%'),
    fontSize: wp('3.8%'),
    color: '#000',
  },
  passwordBox: {
    height: hp('7%'),
    borderWidth: 1.5,
    borderRadius: wp('2.5%'),
    paddingHorizontal: wp('4%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    fontSize: wp('3.8%'),
    color: '#000',
  },
  activeBorder: {
    borderColor: '#3B82F6',
  },
  inactiveBorder: {
    borderColor: '#E5E7EB',
  },
  forgotBtn: {
    alignSelf: 'flex-end',
    marginTop: hp('1.5%'),
  },
  forgotText: {
    color: '#A1A1A1',
    fontSize: wp('3.2%'),
  },
});
