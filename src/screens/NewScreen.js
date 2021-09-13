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
  const {toggleTheme} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View>
        <StatusBar barStyle={'light-content'} />
        <FlatList
          horizontal={true}
          data={card}
          renderItem={({item, index}) => (
            <TouchableOpacity>
              <ImageBackground
                imageStyle={{borderRadius: wp(3)}}
                source={item.img}
                style={styles.imgStyle}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
                <View style={styles.blackOverlay} />
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={{flex: 1, marginTop: hp(1)}}>
        <FlatList
          data={foodList}
          renderItem={({item, index}) => (
            <TouchableOpacity style={{marginTop: hp(1)}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={item.img}
                    style={{width: wp(19), height: wp(19), borderRadius: wp(3)}}
                  />
                  <View style={{marginLeft: wp(3)}}>
                    <Text style={FONTS.titleText}> {item.title} </Text>
                    <Text style={FONTS.subtitle}> {item.subtitle} </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Icon name="star" size={20} color="#b7a485" />
                      <Icon name="star" size={20} color="#b7a485" />
                      <Icon name="star" size={20} color="#b7a485" />
                      <Icon name="star" size={20} color="#b7a485" />
                      <Icon name="star" size={20} color="#919191" />
                    </View>
                  </View>
                </View>
                <View>
                  <Text
                    style={{fontSize: 18, color: 'gray', textAlign: 'center'}}>
                    {item.rating}
                  </Text>
                  <Text
                    style={{fontSize: 15, color: 'gray', textAlign: 'center'}}>
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
});

//make this component available to the app
export default FeaturedScreen;
