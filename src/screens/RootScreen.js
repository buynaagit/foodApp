//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {hp, wp} from '../constants/theme';

import {brColor} from '../constants/consts';
// create a component
const RootScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/images/Root.jpg')}
        style={{
          width: wp(100),
          height: hp(100),
          backgroundColor: 'transparent',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 40,
            fontWeight: '500',
            marginTop: hp(14),
          }}>
          Good Food
        </Text>
        <Text style={{textAlign: 'center', marginTop: hp(2), fontSize: 15}}>
          Deliciously Simple
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('AppIntro')}
          style={{
            position: 'absolute',
            bottom: hp(10),
            alignSelf: 'center',
          }}>
          <View
            style={{
              backgroundColor: brColor,
              width: wp(80),
              height: 45,
              justifyContent: 'center',
              borderRadius: 30,
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              Start Cooking
            </Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default RootScreen;
