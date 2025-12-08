import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const { height, width } = Dimensions.get('window');


const InputFields = ({ email, setEmail, password, setPassword }) => {

 return (

    <SafeAreaView style={styles.container}>

    <View style={styles.formContainer}>
    <TextInput style={styles.input}
    placeholder='Enter Your Email'
    value={email}
    onChangeText={setEmail}
    keyboardType='email-address'
    autoCapitalize='none'
    placeholderTextColor={'#999'}
    />
    <Text style={styles.inputLabel}>User Name / Email</Text>
    </View>


    <View style={styles.passwordContainer} >
    <TextInput style={styles.passwordInput}
    placeholder='***********'
    value={password} 
    onChangeText={setPassword}
    placeholderTextColor={'#999'}
    secureTextEntry={true}
    />
    <Text style={styles.inputLabel}>Password</Text>
    </View>
    
    </SafeAreaView>
  );
};

export default InputFields; 

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },

    formContainer: {
    marginBottom: height * 0.15, // Push buttons down
  },

     formContainer: {
    marginBottom: height * 0.15,
  },

  input: {
    height: 55,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 25,
  },
  inputLabel: {
    position: 'absolute',
    top: -10, 
    left: 15,
    fontSize: 12,
    color: '#888',
    backgroundColor: '#fff',
    paddingHorizontal: 5,
  },
  
  passwordContainer: {
    height: 55,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 15,
  },
});