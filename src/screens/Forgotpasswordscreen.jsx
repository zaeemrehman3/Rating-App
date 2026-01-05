import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Forgotpasswordscreen = () => {
   const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.container} >

      <TouchableOpacity
                  onPress={() => navigation.goBack()}>
                 <Icon name="chevron-back" size={26} color="#007AFF"/>
        </TouchableOpacity>

        <View style={{marginTop:60}} >
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

})