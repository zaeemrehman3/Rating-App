import { View, Text, TextInput, StyleSheet, TouchableOpacity,} from 'react-native';
import React,  { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Manageinp = () => {
  return (
   <View style={styles.form}>
      {/* User Name Field */}
      <View style={styles.inputContainer}>
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>Full Name</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Sara Ahmed Khan"
          placeholderTextColor="#000"
        />
      </View>

      {/* Email Field */}
      <View style={[styles.inputContainer, { marginTop: hp('3%') }]}>
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>Enter Phone Number</Text>
        </View>
        <TextInput
          style={[styles.input, styles.inactiveBorder]}
          placeholder="Enter Phone Number"
          placeholderTextColor="#999"
        />
      </View>

      <View style={[styles.inputContainer, { marginTop: hp('3%') }]}>
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>Enter Designation</Text>
        </View>
        <TextInput
          style={[styles.input, styles.inactiveBorder]}
          placeholder="Enter Your Company Address"
          placeholderTextColor="#999"
        />
      </View>

      <View style={[styles.inputContainer, { marginTop: hp('3%') }]}>
        <View style={styles.labelWrapper}>
        </View>
        <TouchableOpacity style={[styles.input, styles.dropdown]} activeOpacity={0.7}>
          <Text  style={styles.placeholder} >Enter Your Role</Text> 
          <Ionicons name="chevron-down" size={20} color="#777" />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: hp('1.8%')}} >
        <Text style={{ fontSize: hp('2.2%'), fontWeight:700 }} >Give Edit Request</Text>
      </View>

   
      <View style={styles.editRequestBox}>
     <TextInput
       style={styles.editInput}
       placeholder="Enter Your Edit Request Email"
      placeholderTextColor="#999"
     />

  <TouchableOpacity style={styles.sendBtn}>
    <Ionicons name="paper-plane-outline" size={20} color="#fff" />
  </TouchableOpacity>
</View>

<View style={styles.chipsContainer}>
  <View style={styles.chip}>
    <Text style={styles.chipText}>Abdulmunim@360gmail.Com</Text>
    <Ionicons name="close" size={14} color="#555" />
  </View>

  <View style={styles.chip}>
    <Text style={styles.chipText}>Example@Email.Com</Text>
    <Ionicons name="close" size={14} color="#555" />
  </View>
</View>






      </View>

  );
};

export default Manageinp;

const styles = StyleSheet.create({

  form: {
    marginTop: hp('4.5%'),
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
    borderColor: '#007AFF', 
    borderRadius: wp('2%'),
    paddingHorizontal: wp('4%'),
    fontSize: hp('1.8%'),
    color: '#000',
    justifyContent: 'center',
  },

  inactiveBorder: {
    borderColor: '#E0E0E0',
  },

  dropdown: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderColor: '#E0E0E0',
},

placeholder: {
  color: '#000',
  fontSize: hp('1.8%'),
},

editRequestBox: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#E0E0E0',
  borderRadius: wp('2%'),
  marginTop: hp('1.5%'),
  overflow: 'hidden',
},

editInput: {
  flex: 1,
  height: hp('6.5%'),
  paddingHorizontal: wp('4%'),
  fontSize: hp('1.8%'),
  color: '#000',
},

sendBtn: {
  width: wp('12%'),
  height: hp('6.5%'),
  backgroundColor: '#007AFF',
  alignItems: 'center',
  justifyContent: 'center',
},

chipsContainer: {
  flexDirection: 'row',
  flexWrap: 'nowrap',
  marginTop: hp('1%'),
  alignItems:'center',
},

chip: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#F2F2F2',
  paddingHorizontal: wp('3%'),
  paddingVertical: hp('0.8%'),
  borderRadius: wp('5%'),
  marginRight: wp('2%'),
},

chipText: {
  fontSize: hp('1.6%'),
  marginRight: wp('1.5%'),
  color: '#333',
},



});