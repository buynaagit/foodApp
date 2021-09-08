//import liraries
import React, {useContext} from 'react';

import {AuthContext} from '../context';
import {hp, wp} from '../constants/theme';
import FastImage from 'react-native-fast-image';
import {useTheme} from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Switch, TextInput, TouchableRipple} from 'react-native-paper';

import {images} from '../constants';
import Button from '../components/button';
import {brColor} from '../constants/consts';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const RegisterScreen = ({navigation}) => {
  const paperTheme = useTheme();
  const {colors} = useTheme();
  const {toggleTheme} = useContext(AuthContext);

  const LoginBtn = () => {
    navigation.navigate('Verify');
  };

  return (
    <View style={styles.container}>
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
          <TextInput
            textContentType={'emailAddress'}
            returnKeyType={'next'}
            textAlign={'right'}
            selectionColor={brColor}
            placeholder="Your Email"
            keyboardType={'email-address'}
            placeholderTextColor={colors.text}
            keyboardAppearance={paperTheme.dark ? 'dark' : 'light'}
            style={{backgroundColor: colors.background, color: colors.text}}
          />
          <View>
            <TextInput
              textContentType={'password'}
              selectionColor={brColor}
              secureTextEntry={true}
              placeholder="Password"
              keyboardAppearance={paperTheme.dark ? 'dark' : 'light'}
              placeholderTextColor={colors.text}
              style={{backgroundColor: colors.background, color: colors.text}}
            />
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
                  <Switch value={paperTheme.dark} />
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
});

//make this component available to the app
export default RegisterScreen;
