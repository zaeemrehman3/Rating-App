import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Splash from '../assets/images/Splash.png';
import Loginbtn from '../components/specific/Loginbtn';
import Signupbtn from '../components/specific/Signupbtn';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Authscreen = () => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.imageContainer}>
        <Image
          source={Splash}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Revolutionizing</Text>

        <Text>
          <Text style={[styles.title, styles.highlight]}>Employee</Text>
          <Text style={styles.title}> Insights</Text>
        </Text>

        <Text style={styles.description}>
          An App for companies to manage employees, provide transparent rating
          and highlight top performers for growth and evaluation
        </Text>
      </View>

      <Loginbtn />
      <Signupbtn />

    </SafeAreaView>
  );
};

export default Authscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: wp('5%'),
  },

  imageContainer: {
    height: hp('45%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('3%'),
  },

  image: {
    width: wp('90%'),
    height: '100%',
  },

  textContainer: {
    paddingHorizontal: wp('2%'),
    marginBottom: hp('4%'),
  },

  title: {
    fontSize: wp('8%'),
    color: '#504b4bff',
    lineHeight: wp('9%'),
  },

  highlight: {
    color: '#007AFF',
    fontWeight: '700',
  },

  description: {
    fontSize: wp('3.6%'),
    color: 'gray',
    marginTop: hp('1.5%'),
    lineHeight: wp('5%'),
  },
});
