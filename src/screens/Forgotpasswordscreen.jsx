import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Forgotpasswordscreen = () => {
   const navigation = useNavigation();
  
  return (
    <SafeAreaView>

      <TouchableOpacity
                  onPress={() => navigation.goBack()}>
                 <Icon name="chevron-back" size={26} color="#007AFF"/>
        </TouchableOpacity>

    </SafeAreaView>
  )
}

export default Forgotpasswordscreen

const styles = StyleSheet.create({})