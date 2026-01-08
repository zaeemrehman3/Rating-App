import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Forgotpasswordscreen = () => {
   const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.container} >

      <TouchableOpacity
                  onPress={() => navigation.goBack()}>
                 <Icon name="chevron-back" size={26} color="#007AFF"/>
        </TouchableOpacity>

        <View style={{marginTop:50}} >
        <Text style={styles.title}>
          Forgot <Text style={styles.highlight}>Password? </Text>
        </Text>
        <Text style={styles.subtitle}>
          Don't Worry! It Occurs. Please Enter The Email Address 
        </Text>
        <Text style={styles.suubtitle} >
          Linked With Your Account.
        </Text>
        </View>

           <View style={styles.form}>
                <View style={styles.inputContainer}>
                  <View style={styles.labelWrapper}>
                    <Text style={styles.label}>Email</Text>
                  </View>
                  <TextInput
                    style={[styles.input, styles.activeBorder]}
                    placeholder="Enter Your Email"
                    placeholderTextColor="#C7C7CD"
                  />
                </View>

                </View>
        
                 

    </SafeAreaView>
  )
}

export default Forgotpasswordscreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
  },
  highlight: {
    color: '#1E88FF',
  },
  subtitle: {
    fontSize: 14,
    color: '#9A9A9A',
    marginTop: 22,
  },

  suubtitle: {
    fontSize: 14,
    color: '#9A9A9A',
  },

   form: {
    marginTop: hp('4%'),
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
    // height: hp('6%'),
    paddingVertical: 30,
    borderWidth: 1.5,
    borderRadius: wp('2.5%'),
    paddingHorizontal: wp('4%'),
    fontSize: wp('3.8%'),
    color: '#fff',
  },
  activeBorder: {
    borderColor: '#3B82F6',
  },

})