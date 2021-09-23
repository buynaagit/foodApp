import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {images} from '../constants';
import {hp, wp} from '../constants/theme';
import NewScreen from '../screens/NewScreen';
import {useTheme} from '@react-navigation/native';
import PopularScreen from '../screens/PopularScreen';
import FeaturedScreen from '../screens/FeaturedScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const FeaturedStack = createNativeStackNavigator();
const PopularStack = createNativeStackNavigator();
const NewStack = createNativeStackNavigator();

const MyTabs = () => {
  const {colors} = useTheme();
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{width: wp(100), height: hp(39), justifyContent: 'flex-end'}}
        source={images.HomeHeader2}>
        <View style={styles.blackOverlay} />
        <Text style={styles.headerText}>20 Weekend{`\n`}Dinner Recipes</Text>
        <Text style={styles.subHeader}>Lorem ipsum boi boi boi</Text>
        <TouchableOpacity style={styles.viewMore}>
          <Text
            style={{
              color: 'black',
              zIndex: 1,
            }}>
            View more
          </Text>
        </TouchableOpacity>
      </ImageBackground>
      <Tab.Navigator
        tabBarPressColor="red"
        initialRouteName="Featured"
        screenOptions={{
          tabBarActiveTintColor: colors.brandText,
          tabBarLabelStyle: {fontSize: 12},
          tabBarStyle: {backgroundColor: colors.Tab},
          swipeEnabled: false,
        }}>
        <Tab.Screen name="Featured" component={FeaturedStackScreen} />
        <Tab.Screen name="Popular" component={PopularStackScreen} />
        <Tab.Screen name="New" component={NewStackScren} />
      </Tab.Navigator>
    </View>
  );
};

export default MyTabs;

const FeaturedStackScreen = ({navigation}) => {
  return (
    <FeaturedStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <FeaturedStack.Screen name="Featured" component={FeaturedScreen} />
    </FeaturedStack.Navigator>
  );
};

const PopularStackScreen = ({navigation}) => {
  return (
    <PopularStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <PopularStack.Screen name="Popular" component={PopularScreen} />
      {/* <PopularStack.Screen
        name="PopularDetails"
        component={PopularDetailsScreen}
      /> */}
    </PopularStack.Navigator>
  );
};

const NewStackScren = ({navigation}) => {
  return (
    <NewStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <NewStack.Screen name="Lesson" component={NewScreen} />
    </NewStack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    marginTop: hp(3),
    marginHorizontal: wp(5),
  },
  viewMore: {
    backgroundColor: 'white',
    zIndex: 1,
    width: wp(25),
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    borderRadius: wp(4),
    alignSelf: 'flex-end',
    marginBottom: hp(2),
    right: wp(4),
  },
  blackOverlay: {
    backgroundColor: 'black',
    width: wp(100),
    height: hp(39),
    position: 'absolute',
    top: 0,
    zIndex: 1,
    opacity: 0.4,
  },
  headerText: {
    color: 'white',
    fontSize: 27,
    fontWeight: '700',
    left: wp(8),
    marginBottom: hp(1),
    zIndex: 1,
  },
  subHeader: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    left: wp(8),
    zIndex: 1,
  },
  highlight: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(33),
    height: hp(6),
  },
});
