import { StyleSheet, Text, View, Alert } from 'react-native';
import React, { useState } from 'react';
import InputFields from '../components/specific/InputFields';
import Button from '../components/specific/Button';
import Validation from '../utils/Validation';
import { SafeAreaView } from 'react-native-safe-area-context';

const Loginscreen = () => {
   const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState(null);
      const [formData, setFormData] = useState([]);

const  submitFunc = () => {
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
    <SafeAreaView style={styles.container} >

      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>
          Log in to <Text style={styles.highlight}>grow</Text> 👋
        </Text>
        <Text style={styles.subtitle}>
          Glad To Have You Back On Track!
        </Text>
      </View>

    <View>
    <InputFields
       email={email}
        setEmail={setEmail}
         password={password}
          setPassword={setPassword}
           />
    </View>
    
    <View>
      {error && <Text style={{ color: "red", marginLeft: 10 }}>{error}</Text>}
      <Button submitFunc={submitFunc} />
    </View>
    
      </SafeAreaView>
  );
};

export default Loginscreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },

  titleContainer: {
    marginBottom: 50,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  highlight: {
    color: '#007AFF', // The primary blue color
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
  },

});