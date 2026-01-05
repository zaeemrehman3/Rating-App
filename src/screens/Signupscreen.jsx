import { View, Text, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Registerinput from '../components/specific/Registerinput';
import Registerbtn from '../components/specific/Registerbtn';
import Validation from '../utils/Validation';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
// Import responsive tools
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Signupscreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState([]);

  const submitFunc = () => {
    const result = Validation(email, password);

    if (result !== null) {
      setError(result);
      return;
    }

    setError(null);
    setFormData(prev => [...prev, { email, password }]);

    setEmail('');
    setPassword('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: hp('4%') }}>
        
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={hp('3.5%')} color="#007AFF" />
        </TouchableOpacity>

        <View style={styles.icontainer}>
          <View style={styles.header}>
            <Text style={styles.title}>
              Start your <Text style={styles.highlight}>journey now!!</Text>
            </Text>
            <Text style={styles.subtitle}>
              Join Us And Unlock Endless Possibilities
            </Text>
          </View>

          <View style={styles.inputSection}>
            <Registerinput
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </View>

          <View style={styles.footer}>
            {error && <Text style={styles.errorText}>{error}</Text>}
            <View style={styles.buttonWrapper}>
              <Registerbtn submitFunc={submitFunc} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signupscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: wp('6%'),
  },
  icontainer: {
    flex: 1,
  },
  backBtn: {
    marginTop: hp('2%'),
    left: -wp('2%'), 
  },
  header: {
    marginTop: hp('5%'),
    marginBottom: hp('3%'),
  },
  title: {
    fontSize: hp('3.8%'),
    fontWeight: '700',
    color: '#000',
    lineHeight: hp('4.8%'),
  },
  highlight: {
    color: '#007AFF',
  },
  subtitle: {
    marginTop: hp('0.8%'),
    color: '#9B9B9B',
    fontSize: hp('2%'),
    fontWeight: '500',
  },
  inputSection: {
    marginTop: hp('2%'),
  },
  footer: {
    marginTop: hp('2%'),
  },
  errorText: {
    color: "red",
    fontSize: hp('1.7%'),
    marginLeft: wp('2%'),
  },
  buttonWrapper: {
    marginTop: hp('6%'), 
  },
});