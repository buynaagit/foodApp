//import liraries
import React, {useContext, useState, useRef} from 'react';

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

import {images} from '../constants';
import Button from '../components/button';
import {TextInput} from 'react-native-paper';
import {brColor} from '../constants/consts';
import FlashMessage from 'react-native-flash-message';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const RegisterScreen = ({navigation}) => {
  const paperTheme = useTheme();
  const {colors} = useTheme();
  const {signUp} = useContext(AuthContext);
  const [loading, setloading] = useState(false);

  const ref = useRef();

  const [userData, setUserData] = React.useState({
    email: '',
    password: '',
    confirm_password: '',
    isValidEmail: false,
    isValidPassword: false,
    secureTextEntry: true,
  });

  const handleEmailChange = val => {
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

  const handleConfirmPasswordChange = val => {
    setUserData({
      ...userData,
      confirm_password: val,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setUserData({
      ...userData,
      confirm_secureTextEntry: !userData.confirm_secureTextEntry,
    });
  };

  const signUpBtn = async () => {
    setloading(true);
    let result = null;
    try {
      if (userData.email && userData.password && userData.confirm_password) {
        let usersJSON = await AsyncStorage.getItem('@userData');
        if (usersJSON != null) {
          let userObj = JSON.parse(usersJSON);
          console.log(`userObj`, userObj);

          result = userObj.find(({email}) => email === userData.email);
          console.log(`result`, result);
          if (result != undefined) {
            ref.current.showMessage({
              message: `${userData.email} has already been registered`,
              type: 'warning',
            });
          } else {
            await signUp(userData.email, userData.confirm_password);
            navigation.navigate('Login');
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
        source={images.registerHeader}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.subContainer}>
        <Text style={{color: colors.brandText, fontSize: 25}}>
          Let's start making {`\n`}good meals
        </Text>
        <View style={{marginTop: hp(2)}}>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              onChangeText={val => handleEmailChange(val)}
              textContentType={'emailAddress'}
              textAlign={'right'}
              selectionColor={brColor}
              placeholder="Your Email"
              keyboardType={'email-address'}
              placeholderTextColor={colors.text}
              keyboardAppearance={paperTheme.dark ? 'dark' : 'light'}
              style={{backgroundColor: colors.background, width: wp(70)}}
            />
            {userData.isValidEmail && (
              <View style={{justifyContent: 'center'}}>
                <Feather name="check-circle" color="green" size={20} />
              </View>
            )}
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              onChangeText={val => handlePasswordChange(val)}
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
          <View style={{flexDirection: 'row'}}>
            <TextInput
              onChangeText={val => handleConfirmPasswordChange(val)}
              selectionColor={brColor}
              secureTextEntry={true}
              placeholder="Password confirm"
              keyboardAppearance={paperTheme.dark ? 'dark' : 'light'}
              placeholderTextColor={colors.text}
              style={{backgroundColor: colors.background, width: wp(70)}}
            />
            {userData.password &&
            userData.confirm_password &&
            userData.password === userData.confirm_password ? (
              <View style={{justifyContent: 'center'}}>
                <Feather name="check-circle" color="green" size={20} />
              </View>
            ) : null}
          </View>
          <Button
            disabled={loading}
            onPress={() => signUpBtn()}
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
