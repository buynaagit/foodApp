//import liraries
import React, {useContext} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';

import {images} from '../constants';
import {AuthContext} from '../context';
import {hp, wp} from '../constants/theme';
import {brColor} from '../constants/consts';
import {FONTS, COLORS} from '../constants';
import {useTheme} from '@react-navigation/native';
import {useIsFocused} from '@react-navigation/native';
import {Switch, TouchableRipple} from 'react-native-paper';
import {card, foodList} from '../staticData/myData';
import Icon from 'react-native-vector-icons/Entypo';

// create a component
const FeaturedScreen = ({navigation}) => {
  const paperTheme = useTheme();
  const {colors} = useTheme();

  const btnHandler = item => {
    navigation.navigate('CookRecipe', {
      params: item,
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <StatusBar barStyle={'light-content'} />
      </View>
      <View style={{flex: 1, marginTop: hp(1)}}>
        <FlatList
          keyExtractor={(item, index) => `${index}`}
          data={foodList}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={{marginTop: hp(1)}}
              onPress={() => btnHandler(item)}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={{uri: item.img}}
                    style={{width: wp(19), height: wp(19), borderRadius: wp(3)}}
                  />
                  <View style={{marginLeft: wp(3)}}>
                    <Text style={[FONTS.titleText, {color: colors.text}]}>
                      {item.title}
                    </Text>
                    <Text style={[FONTS.subtitle, {color: colors.text}]}>
                      {item.subtitle}
                    </Text>
                    <Image
                      source={item.star}
                      style={{width: 100, height: 20}}
                    />
                  </View>
                </View>
                <View>
                  <Text style={[styles.rating, {color: colors.subText}]}>
                    {item.rating}
                  </Text>
                  <Text style={[styles.views, {color: colors.subText}]}>
                    views
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: wp(4),
    marginTop: hp(2),
  },
  blackOverlay: {
    width: wp(68),
    height: hp(18),
    backgroundColor: 'black',
    opacity: 0.2,
    borderRadius: wp(3),
    padding: hp(2),
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
    zIndex: 1,
    position: 'absolute',
    top: hp(4),
    left: wp(4),
  },
  title: {
    color: 'white',
    zIndex: 1,
    position: 'absolute',
    top: hp(1),
    left: wp(4),
  },
  imgStyle: {
    width: wp(68),
    height: hp(18),
    marginRight: wp(3),
  },
  rating: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
  },
  views: {
    fontSize: 15,
    color: 'gray',
    textAlign: 'center',
  },
});

//make this component available to the app
export default FeaturedScreen;
