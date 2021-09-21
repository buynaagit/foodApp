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
const PopularScreen = ({navigation}) => {
  const paperTheme = useTheme();
  const {colors} = useTheme();
  const {toggleTheme} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View>
        <StatusBar barStyle={'light-content'} />
        <FlatList
          keyExtractor={(item, index) => `${index}`}
          showsVerticalScrollIndicator={false}
          data={card}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('PopularDetails')}>
              <ImageBackground
                imageStyle={{borderRadius: wp(3)}}
                source={{uri: item.img}}
                style={styles.imgStyle}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
                <View style={styles.blackOverlay} />
              </ImageBackground>
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
    width: wp(90),
    height: hp(40),
    backgroundColor: 'black',
    opacity: 0.2,
    borderRadius: wp(3),
    padding: hp(2),
  },
  subtitle: {
    color: 'white',
    fontSize: 30,
    zIndex: 1,
    position: 'absolute',
    bottom: hp(4),
    left: wp(4),
  },
  title: {
    color: 'white',
    position: 'absolute',
    textAlign: 'center',
    zIndex: 1,
    bottom: hp(1),
    left: wp(4),
    fontSize: 18,
  },
  imgStyle: {
    width: wp(90),
    height: hp(40),
    marginRight: wp(3),
    marginVertical: hp(1),
  },
});

//make this component available to the app
export default PopularScreen;
