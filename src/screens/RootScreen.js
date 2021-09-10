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

import {useTheme} from '@react-navigation/native';
import {hp, wp} from '../constants/theme';

import {brColor} from '../constants/consts';
// create a component
const RootScreen = ({navigation}) => {
  const paperTheme = useTheme();
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={paperTheme.dark ? 'light-content' : 'dark-content'}
      />
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/images/Root.jpg')}
        style={styles.imgBg}>
        <Text style={styles.headerText}>Good Food</Text>
        <Text style={styles.subheaderText}>Deliciously Simple</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('AppIntro')}
          style={styles.btnContainer}>
          <View style={styles.btn}>
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
  btn: {
    backgroundColor: brColor,
    width: wp(80),
    height: 45,
    justifyContent: 'center',
    borderRadius: 30,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '500',
    marginTop: hp(14),
  },
  btnContainer: {
    position: 'absolute',
    bottom: hp(10),
    alignSelf: 'center',
  },
  subheaderText: {textAlign: 'center', marginTop: hp(2), fontSize: 15},
  imgBg: {
    width: wp(100),
    height: hp(100),
    backgroundColor: 'transparent',
  },
});

//make this component available to the app
export default RootScreen;
