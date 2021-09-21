import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CookRecipeScreen from './CookRecipeScreen';
import MyBottomTabs from '../navigators/BottomTabNavigator';
import PopularDetailsScreen from './PopularDetailsScreen';
import CookRecipeScreenText from './CookRecipeScreenText';

const Stack = createNativeStackNavigator();

const AppStackScreen = ({navigation}) => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={MyBottomTabs} />
    <Stack.Screen name="CookRecipe" component={CookRecipeScreen} />
    <Stack.Screen name="PopularDetails" component={PopularDetailsScreen} />
    <Stack.Screen name="CookRecipeText" component={CookRecipeScreenText} />
  </Stack.Navigator>
);

export default AppStackScreen;
