import React from 'react';
import { StyleSheet,Text, Button, View, ScrollView, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainHeader from '../components/MainHeader';
import ActivityBox from '../components/ActivityBox';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <View>
          <MainHeader title="Udin"/>
        </View>

        <ScrollView>
          <View style={styles.activity}>
            <Text style={styles.title}>Activity</Text>

            <ActivityBox />
            <ActivityBox />
            <ActivityBox />
            <ActivityBox />
            <ActivityBox />
            <ActivityBox />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box:{
    flex:1,
    backgroundColor:'#EEEEEE',
    borderRadius:20,
    justifyContent:'center',
    marginBottom:20,
    padding:15
  },
  container:{
    backgroundColor:'#FFFFFF',
    paddingBottom:40
  },
  title:{
    fontSize:20,
    color:'#0F0F0F',
    marginBottom:10,
    fontWeight:'400'
  },
  activity:{
    backgroundColor:'#EEEEEE',
    paddingHorizontal: 15,
    paddingVertical:15,
    borderRadius:25,
    marginHorizontal:15
  }
})

export default HomeScreen
