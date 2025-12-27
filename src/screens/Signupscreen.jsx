import { View, Text, TouchableOpacity,  StyleSheet, StatusBar } from 'react-native';
import React, { useState } from 'react';
import Registerinput from '../components/specific/Registerinput';
import Registerbtn from '../components/specific/Registerbtn';
import Validation from '../utils/Validation';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Signupscreen = () => {
     const navigation = useNavigation();

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
      <StatusBar barStyle="dark-content" />

       <TouchableOpacity style={styles.backBtn}
         onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" size={26} color="#007AFF"/>
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

    <View>
    <Registerinput
       email={email}
        setEmail={setEmail}
         password={password}
          setPassword={setPassword}
           />
    </View>
    
    <View >
      {error && <Text style={{ color: "red", marginLeft: 10 }}>{error}</Text>}
      <View style={{marginTop:80}} >
      <Registerbtn  submitFunc={submitFunc} />
      </View>
    </View>
    </View>
    
    
    </SafeAreaView>
  )
}

export default Signupscreen

const styles = StyleSheet.create({

  icontainer: {
  flex: 1,
  justifyContent: 'center',
},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },

   backBtn: {
    marginTop: 20,
  },

 header: {
    marginTop: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
  },

  highlight: {
    color: '#007AFF',
  },
  
 subtitle: {
    marginTop: 6,
    color: '#9B9B9B',
    fontSize: 14,
  },

})