import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RootScreen from './RootScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import AppIntroScreen from './AppIntroScreen';
import VerifyScreen from './VerifyScreen';
import CategoryScreen from './ChooseCategory';
import ChooseFoodScreen from './ChooseFood';

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="Root">
    <RootStack.Screen name="Root" component={RootScreen} />
    <RootStack.Screen name="Login" component={LoginScreen} />
    <RootStack.Screen name="Register" component={RegisterScreen} />
    <RootStack.Screen name="AppIntro" component={AppIntroScreen} />
    <RootStack.Screen name="Verify" component={VerifyScreen} />
    <RootStack.Screen name="Category" component={CategoryScreen} />
    <RootStack.Screen name="Food" component={ChooseFoodScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
