import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Managebtn = () => {
  const navigation = useNavigation();
  
  const handlebtnPress = () => {
    navigation.navigate('Signupscreen');
  };

  return (
    <TouchableOpacity 
      style={[styles.button, styles.secondaryButton]} 
      onPress={handlebtnPress}
    >
      <Text style={styles.secondaryButtonText}>Create Account</Text>
    </TouchableOpacity>
  );
};

export default Managebtn;

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
    backgroundColor: '#007AFF',
    borderWidth: 1,
    borderColor: '#ccc', 
  },

  secondaryButtonText: {
    color: '#fff',
    fontSize: hp('2.1%'), 
    fontWeight: '600',
  },
});