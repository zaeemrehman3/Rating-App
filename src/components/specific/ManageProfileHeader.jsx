import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ManageProfileHeader = () => {
  return (
    <View style={styles.container}>

      <View style={styles.avatarWrapper}>
        <View style={styles.avatar} />

        <TouchableOpacity style={styles.editIcon}>
          <Ionicons name="pencil" size={14} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.textWrapper}>
        <Text style={styles.welcomeText}>Welcome SaraKhan!!</Text>
        <Text style={styles.emailText}>sarakhan@360gmail.com</Text>
      </View>

    </View>
  );
};

export default ManageProfileHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('1%'),
    gap: wp('4%'),
  },

  avatarWrapper: {
    position: 'relative',
  },

  avatar: {
    width: wp('14%'),
    height: wp('14%'),
    borderRadius: wp('3%'),
    backgroundColor: '#E5E5E5',
    borderWidth: 1,
    borderColor: '#007AFF',
  },

  editIcon: {
    position: 'absolute',
    bottom: -hp('0.5%'),
    right: -wp('1%'),
    backgroundColor: '#007AFF',
    width: wp('6%'),
    height: wp('6%'),
    borderRadius: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  textWrapper: {
    flex: 1,
  },

  welcomeText: {
    fontSize: hp('2.2%'),
    fontWeight: '400',
    color: '#000',
  },

  emailText: {
    marginTop: hp('0.4%'),
    fontSize: hp('1.6%'),
    color: '#8E8E93',
  },
});

