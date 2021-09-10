import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeaturedScreen from '../screens/FeaturedScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CookBookScreen from '../screens/CookBookScren';
import TopBarNavigator from '../navigators/TopBarNavigator';
import {brColor} from '../constants/consts';

const Tab = createMaterialBottomTabNavigator();

const MyBottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor={brColor}
      labeled={false}
      barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="Feed"
        component={TopBarNavigator}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="layers-triple"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CookBook"
        component={CookBookScreen}
        options={{
          tabBarLabel: 'CookBook',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyBottomTabs;
