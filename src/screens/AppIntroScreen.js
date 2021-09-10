//import liraries
import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Icons} from '../constants';
import {hp, wp} from '../constants/theme';
import {brColor} from '../constants/consts';
import FastImage from 'react-native-fast-image';

// create a component
const AppIntroScreen = ({navigation}) => {
  const paperTheme = useTheme();
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={paperTheme.dark ? 'light-content' : 'dark-content'}
      />
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/images/RegisterBackground.jpg')}
        style={styles.imgBg}>
        <View style={styles.layerContainer}>
          <View style={{alignItems: 'center'}}>
            <FastImage
              source={Icons.ChefIcon}
              style={{
                width: wp(10),
                height: wp(10),
                marginBottom: hp(2),
              }}
            />
            <Text style={{color: brColor, fontSize: 30, fontWeight: 'bold'}}>
              Good Food
            </Text>
          </View>
          <Text style={{textAlign: 'center', fontSize: 15}}>
            Nutrionally balanced, easy,{`\n`}to cook recipes. Quality fresh
            {`\n`}
            local ingredients.
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={styles.crtBtn}>
            <Text style={{textAlign: 'center'}}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text>
              Already have an account?{' '}
              <Text style={{fontWeight: 'bold'}}>Log in </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layerContainer: {
    marginVertical: hp(20),
    alignSelf: 'center',
    width: wp(80),
    height: hp(60),
    backgroundColor: 'white',
    opacity: 0.82,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  imgBg: {
    width: wp(100),
    height: hp(100),
    backgroundColor: 'transparent',
  },
  crtBtn: {
    width: wp(60),
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 2,
  },
});

//make this component available to the app
export default AppIntroScreen;
