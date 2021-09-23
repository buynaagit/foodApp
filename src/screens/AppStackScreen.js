import React from 'react';

import VerifyScreen from './VerifyScreen';
import ChooseFoodScreen from './ChooseFood';
import CategoryScreen from './ChooseCategory';
import CookRecipeScreen from './CookRecipeScreen';
import PopularDetailsScreen from './PopularDetailsScreen';
import CookRecipeScreenText from './CookRecipeScreenText';
import MyBottomTabs from '../navigators/BottomTabNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppStackScreen = ({navigation}) => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Verify" component={VerifyScreen} />
    <Stack.Screen name="Category" component={CategoryScreen} />
    <Stack.Screen name="Food" component={ChooseFoodScreen} />
    <Stack.Screen name="Home" component={MyBottomTabs} />
    <Stack.Screen name="CookRecipe" component={CookRecipeScreen} />
    <Stack.Screen name="PopularDetails" component={PopularDetailsScreen} />
    <Stack.Screen name="CookRecipeText" component={CookRecipeScreenText} />
  </Stack.Navigator>
);

export default AppStackScreen;
