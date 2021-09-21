//import liraries
import React, {useContext, useState, useRef} from 'react';

import {View, Text, StyleSheet, StatusBar} from 'react-native';

import {AuthContext} from '../context';
import {images} from '../constants';
import Button from '../components/button';
import {hp, wp} from '../constants/theme';
import {brColor} from '../constants/consts';
import FastImage from 'react-native-fast-image';
import {useTheme} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import Feather from 'react-native-vector-icons/Feather';
import {Switch, TextInput, TouchableRipple} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const RegisterScreen = ({navigation}) => {
  const paperTheme = useTheme();
  const {colors} = useTheme();
  const {toggleTheme} = useContext(AuthContext);
  const {signIn} = useContext(AuthContext);
  const [loading, setloading] = useState(false);

  const [userData, setUserData] = React.useState({
    email: '',
    password: '',
    isValidEmail: false,
    isValidPassword: false,
    secureTextEntry: true,
  });

  const ref = useRef();

  const textInputChange = val => {
    if (val.trim().length >= 10 && val.includes('@')) {
      setUserData({
        ...userData,
        email: val,
        isValidEmail: true,
      });
    } else {
      setUserData({
        ...userData,
        email: val,
        isValidEmail: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 6) {
      setUserData({
        ...userData,
        password: val,
        isValidPassword: true,
      });
    } else {
      setUserData({
        ...userData,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setUserData({
      ...userData,
      secureTextEntry: !userData.secureTextEntry,
    });
  };

  const LoginBtn = async () => {
    setloading(true);
    let result = null;
    try {
      if (userData.email && userData.password) {
        let usersJSON = await AsyncStorage.getItem('@userData');
        if (usersJSON != null) {
          let userObj = JSON.parse(usersJSON);
          console.log(`userObj`, userObj);

          result = userObj.find(
            ({email, password}) =>
              email === userData.email && password === userData.password,
          );
          console.log(`result`, result);
          if (result == undefined) {
            ref.current.showMessage({
              message: `Email or password is wrong`,
              type: 'warning',
            });
          } else {
            await signIn(userData.email, userData.password);
          }
        }
      } else {
        ref.current.showMessage({
          message: 'All inputs must be filled',
          type: 'warning',
        });
      }
    } catch (e) {
      console.log(`error`, e);
    }
    setloading(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={paperTheme.dark ? 'light-content' : 'dark-content'}
      />
      <FlashMessage ref={ref} />
      <FastImage
        style={{width: wp(100), height: hp(30)}}
        source={images.loginHeader}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.subContainer}>
        <Text style={{color: colors.brandText, fontSize: 25}}>
          Let's start making {`\n`}good meals
        </Text>
        <View style={{marginTop: hp(2)}}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <TextInput
                onChangeText={val => textInputChange(val)}
                textContentType={'emailAddress'}
                returnKeyType={'next'}
                textAlign={'right'}
                selectionColor={brColor}
                placeholder="Your Email"
                keyboardType={'email-address'}
                placeholderTextColor={colors.text}
                keyboardAppearance={paperTheme.dark ? 'dark' : 'light'}
                style={{backgroundColor: colors.background, width: wp(70)}}
              />
            </View>
            {userData.isValidEmail && (
              <View style={{justifyContent: 'center'}}>
                <Feather name="check-circle" color="green" size={20} />
              </View>
            )}
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              onChangeText={val => handlePasswordChange(val)}
              textContentType={'password'}
              selectionColor={brColor}
              secureTextEntry={true}
              placeholder="Password"
              keyboardAppearance={paperTheme.dark ? 'dark' : 'light'}
              placeholderTextColor={colors.text}
              style={{backgroundColor: colors.background, width: wp(70)}}
            />
            {userData.isValidPassword && (
              <View style={{justifyContent: 'center'}}>
                <Feather name="check-circle" color="green" size={20} />
              </View>
            )}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: hp(2),
            }}>
            <TouchableRipple onPress={() => toggleTheme()}>
              <View style={styles.preference}>
                <View pointerEvents="none">
                  <Switch value={console.log(`1`)} />
                </View>
                <Text
                  style={{
                    color: colors.text,
                    marginLeft: wp(2),
                    fontWeight: '500',
                  }}>
                  Remember
                </Text>
              </View>
            </TouchableRipple>
            <Text style={{fontWeight: '500', color: colors.text}}>Forgot?</Text>
          </View>
          <Button
            onPress={() => LoginBtn()}
            textColor={{color: 'white'}}
            text={'Log in'}
            style={{marginTop: hp(2)}}
          />
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
    alignItems: 'center',
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
  errorMsg: {
    color: brColor,
    fontSize: 14,
    marginLeft: wp(2),
  },
});

//make this component available to the app
export default RegisterScreen;
