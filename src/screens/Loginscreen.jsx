import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import React, { useState } from 'react';
import InputFields from '../components/specific/InputFields';
import Button from '../components/specific/Button';
import Validation from '../utils/Validation';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Loginscreen = () => {
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
    setFormData((prev) => [...prev, { email, password }]);

    setEmail('');
    setPassword('');
    navigation.navigate('Verificationscreen')
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Icon name="chevron-back" size={wp('7%')} color="#007AFF" />
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Log in to <Text style={styles.highlight}>grow</Text> 👋
          </Text>
          <Text style={styles.subtitle}>
            Glad To Have You Back On Track!
          </Text>
        </View>

        <InputFields
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />

        <View style={styles.footer}>
          {error && <Text style={styles.errorText}>{error}</Text>}
          <View style={styles.buttonWrapper}>
            <Button submitFunc={submitFunc} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Loginscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: wp('5%'),
  },
  backBtn: {
    marginTop: hp('1%'),
    marginLeft: wp('4%'),
  },
  header: {
    marginTop: hp('6%'),
    marginBottom: hp('2%'),
  },
  title: {
    fontSize: wp('8.5%'), 
    fontWeight: '700',
    color: '#000',
  },
  highlight: {
    color: '#007AFF',
  },
  subtitle: {
    marginTop: hp('1%'),
    color: '#9B9B9B',
    fontSize: wp('4%'),
    fontWeight: '500',
  },
  footer: {
    marginTop: hp('2%'),
    flex: 1,
  },
  errorText: {
    color: 'red',
    fontSize: wp('3.2%'),
    marginLeft: wp('2%'),
    marginBottom: hp('1%'),
  },
  buttonWrapper: {
    marginTop: hp('10%'), 
  },
});