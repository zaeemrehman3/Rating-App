import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Manageinp from '../components/specific/Manageinp'
import ManageProfileHeader from '../components/specific/ManageProfileHeader'
import Managebtn from '../components/specific/Managebtn';


const Manageprofile = () => {

    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container} >
    <StatusBar barStyle="dark-content" />


    <View>

    <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={hp('3.5%')} color="#007AFF" />
    </TouchableOpacity>

    </View>

    <View style={styles.icontainer}>
              <View style={styles.header}>
                <Text style={styles.title}>
                  Manage <Text style={styles.highlight}>Profile</Text>
                </Text>
    </View>

    <View>
        <ManageProfileHeader />
    </View>

    <View>
        <Manageinp />
    </View>

    <View>
        <Managebtn />
    </View>













    </View>
    </SafeAreaView>
  );
};

export default Manageprofile;

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

});