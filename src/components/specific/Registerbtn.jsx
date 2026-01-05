import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Registerbtn = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
    <View style={{marginBottom:-10}} >
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Verificationscreen')}>
            <Text style={styles.buttonText}>Register Account</Text>
        </TouchableOpacity>
        
    </View>
     <View style={[styles.LoginRow, { marginBottom: 20 }]}>
          <Text style={styles.LoginText}>Do You already have an account ?</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Loginscreen')} >
            <Text style={styles.LoginLink}> Login </Text>
          </TouchableOpacity>
     </View>
        </SafeAreaView>
  );
}; 

export default Registerbtn;

const styles = StyleSheet.create({
     button : {
    // marginTop: 80,
    height: 52,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    },

    buttonText : {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    },

     LoginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },

  LoginText: {
    color: '#9B9B9B',
  },

  LoginLink: {
    color: '#007AFF',
    fontWeight: '600',
  },

});