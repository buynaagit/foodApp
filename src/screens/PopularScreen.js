//import liraries
import React, {useContext} from 'react';

import {hp, wp} from '../constants/theme';

import {useTheme} from '@react-navigation/native';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';

import {images} from '../constants';
import {AuthContext} from '../context';
import {brColor} from '../constants/consts';
import {Switch, TouchableRipple} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';

// create a component
const FeaturedScreen = ({navigation}) => {
  const paperTheme = useTheme();
  const {colors} = useTheme();
  const {toggleTheme} = useContext(AuthContext);

  const isFocused = useIsFocused();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
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

//make this component available to the app
export default FeaturedScreen;
