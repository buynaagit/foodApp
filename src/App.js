//import liraries
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RootScreen from './screens/RootScreen';
import AppIntroScreen from './screens/AppIntroScreen';

const Stack = createNativeStackNavigator();
// create a component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Root">
        <Stack.Screen name="Root" component={RootScreen} />
        <Stack.Screen name="AppIntro" component={AppIntroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
