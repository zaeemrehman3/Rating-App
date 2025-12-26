import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InputFields = ({ email, setEmail, password, setPassword }) => {

  const [secure, setSecure] = useState(true);

  return (
    <SafeAreaView>
      <View style={styles.form}>

        <Text style={styles.label}>User Name / Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Username / Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={[styles.label, { marginTop: 16 }]}>Password</Text>
        <View style={styles.passwordBox}>
          <TextInput
            style={styles.passwordInput}
            placeholder="************"
            placeholderTextColor="#999"
            secureTextEntry={secure}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <Ionicons
              name={secure ? 'eye-off-outline' : 'eye-outline'}
              size={22}
              color="#999"
            />
          </TouchableOpacity>

        
        </View>

         <TouchableOpacity style={styles.forgotBtn}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default InputFields;

const styles = StyleSheet.create({ 
  form: { marginTop: 40, },
   label: { fontSize: 14, color: '#000', marginBottom: 6, },
    input: { height: 50, borderWidth: 1, borderColor: '#007AFF', borderRadius: 8, paddingHorizontal: 12, }, 
    passwordBox: { height: 50, borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 8, paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }, 
    passwordInput: { flex: 1, marginRight: 8, }, 
    forgotBtn: { alignSelf: 'flex-end', marginTop: 8, }, 
    forgotText: { color: '#9B9B9B', fontSize: 12, }, 
  });