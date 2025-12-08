import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Authscreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.textContainer} > 
        <Text style={styles.title} >Revolutionizing</Text>

         <Text> 
        <Text style={[styles.title, styles.highlight]}>Employee</Text>
        <Text style={styles.title} > Insights</Text>
        </Text>  
        
        <Text style={styles.description} >An App for companies to manage employees, provide transparent rating and highlight to performers for growth and evaluation</Text>
    </View>


    <View>
        <Text>Authentication</Text>
    </View> 

     <View>
        <Text>Authentication</Text>
    </View>       


    </SafeAreaView>
  );
};

export default Authscreen;

const styles = StyleSheet.create({

    container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    },

    textContainer: {
    paddingHorizontal: 10,
    marginBottom: 40,
    },

    title: {
    fontSize: 32,
    // fontWeight: '700',
    color: '#504b4bff',
    lineHeight: 40,
  },

  highlight: {
    color: '#007AFF', 
    fontWeight: '700',
  },

  description: {
    fontSize: 14,
    color: 'gray',
    marginTop: 10,
    lineHeight: 20,
  },


});