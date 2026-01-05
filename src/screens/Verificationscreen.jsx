import { StyleSheet, Text, View, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const Verificationscreen = () => {
       const navigation = useNavigation();
  

  return (
   <SafeAreaView style={styles.container} >
   <StatusBar barStyle="dark-content" />

  <TouchableOpacity
            onPress={() => navigation.goBack()}>
           <Icon name="chevron-back" size={26} color="#007AFF"/>
  </TouchableOpacity>

  {/* <View> */}
          <Text style={styles.title}>
            Verify <Text style={styles.highlight}>Account </Text>
          </Text>
          <Text style={styles.subtitle}>
            Code Has Been Send To <Text style={{color:'#0a0a0aff'}} >sarakhan360@gmail.com</Text> 
          </Text>
          <Text style={styles.subtitle} >
            Enter The Code To Verify Your Account.
          </Text>

           <View style={styles.otpContainer}>
        <TextInput style={[styles.otpBox, styles.active]} />
        <TextInput style={[styles.otpBox, styles.active]} />
        <TextInput style={styles.otpBox} />
        <TextInput style={styles.otpBox} />
      </View>

       <Text style={styles.resendText}>
        Didn’t Receive Code? <Text style={styles.resend}>Resend</Text>
      </Text>

  {/* </View> */}

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
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginTop: 30,
  },
  highlight: {
    color: '#1E88FF',
  },
  subtitle: {
    fontSize: 14,
    color: '#9A9A9A',
    marginTop: 6,
  },
  otpContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  otpBox: {
    width: 55,
    height: 55,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    marginRight: 12,
  },
  active: {
    borderColor: '#1E88FF',
  },
  resendText: {
    marginTop: 20,
    fontSize: 14,
    color: '#9A9A9A',
  },
  resend: {
    color: '#1E88FF',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#1E88FF',
    paddingVertical: 15,
    borderRadius: 10,
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});