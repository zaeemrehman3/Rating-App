import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Button = ({submitFunc}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
    <View>
        <TouchableOpacity style={styles.button} onPress={submitFunc}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
    </View>
     <View style={styles.signupRow}>
          <Text style={styles.signupText}>Don’t have an account ?</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Signupscreen')} >
            <Text style={styles.signupLink}> Sign Up</Text>
          </TouchableOpacity>
     </View>
        </SafeAreaView>
  );
};

export default Button;

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

     signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },

  signupText: {
    color: '#9B9B9B',
  },

  signupLink: {
    color: '#007AFF',
    fontWeight: '600',
  },

});