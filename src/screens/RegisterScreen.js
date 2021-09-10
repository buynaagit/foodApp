//import liraries
import React, {useContext} from 'react';

import {AuthContext} from '../context';
import {hp, wp} from '../constants/theme';
import FastImage from 'react-native-fast-image';
import {useTheme} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {TextInput, TouchableRipple} from 'react-native-paper';

import {images} from '../constants';
import Button from '../components/button';
import {brColor} from '../constants/consts';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const RegisterScreen = ({navigation}) => {
  const paperTheme = useTheme();
  const {colors} = useTheme();

  const RegisterBtn = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={paperTheme.dark ? 'light-content' : 'dark-content'}
      />
      <FastImage
        style={{width: wp(100), height: hp(30)}}
        source={images.registerHeader}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.subContainer}>
        <Text style={{color: colors.brandText, fontSize: 25}}>
          Let's start making {`\n`}good meals
        </Text>
        <View style={{marginTop: hp(2)}}>
          <TextInput
            textContentType={'emailAddress'}
            textAlign={'right'}
            selectionColor={brColor}
            placeholder="Your Email"
            keyboardType={'email-address'}
            placeholderTextColor={colors.text}
            keyboardAppearance={paperTheme.dark ? 'dark' : 'light'}
            style={{backgroundColor: colors.background, color: colors.text}}
          />
          <TextInput
            textContentType={'password'}
            selectionColor={brColor}
            secureTextEntry={true}
            placeholder="Password"
            keyboardAppearance={paperTheme.dark ? 'dark' : 'light'}
            placeholderTextColor={colors.text}
            style={{backgroundColor: colors.background, color: colors.text}}
          />
          <Button
            onPress={() => RegisterBtn()}
            textColor={{color: 'white'}}
            text={'Create Account'}
            style={{marginTop: hp(2)}}
          />
          <TouchableOpacity style={styles.btnStyle}>
            <Icon
              name="facebook"
              color={brColor}
              size={16}
              style={{marginRight: wp(2)}}
            />
            <Text style={{color: brColor, fontWeight: '700'}}>
              Sign up with Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    marginTop: hp(3),
    marginHorizontal: wp(10),
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  btnStyle: {
    width: wp(80),
    height: 45,
    borderRadius: 30,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderWidth: 1.5,
    borderColor: brColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(2),
    flexDirection: 'row',
  },
});

//make this component available to the app
export default RegisterScreen;
