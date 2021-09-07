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

import {hp, wp} from '../constants/theme';
import {Icons} from '../constants';
import {brColor} from '../constants/consts';

// create a component
const AppIntroScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/images/RegisterBackground.jpg')}
        style={{
          width: wp(100),
          height: hp(100),
          backgroundColor: 'transparent',
        }}>
        <View
          style={{
            marginVertical: hp(20),
            alignSelf: 'center',
            width: wp(80),
            height: hp(60),
            backgroundColor: 'white',
            opacity: 0.82,
            borderRadius: 10,
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
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
            style={{
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
            }}>
            <Text style={{textAlign: 'center'}}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity>
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
});

//make this component available to the app
export default AppIntroScreen;
