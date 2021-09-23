import React from 'react';
import {useTheme} from '@react-navigation/native';
import {brColor} from '../constants/consts';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CookBookScreen from '../screens/CookBookScreen';
import TopBarNavigator from '../navigators/TopBarNavigator';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const MyBottomTabs = () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor={brColor}
      labeled={false}
      barStyle={{backgroundColor: colors.Tab}}>
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
