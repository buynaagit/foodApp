//import liraries
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';

import {hp, wp} from '../constants/theme';
import {brColor} from '../constants/consts';
import {FONTS} from '../constants';
import {useTheme} from '@react-navigation/native';
import {card, foodList} from '../staticData/myData';
import Icon4 from 'react-native-vector-icons/AntDesign';

// create a component
const FeaturedScreen = ({navigation}) => {
  const {colors} = useTheme();
  const paperTheme = useTheme();
  const btnHandler = item => {
    navigation.navigate('CookRecipe', {
      params: item,
    });
  };

  const btnHandlerRecipeText = item => {
    navigation.navigate('CookRecipeText', {
      params: item,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={paperTheme.dark ? 'light-content' : 'dark-content'}
      />
      <View
        style={{
          marginBottom: hp(1),
        }}>
        <View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
          <Text style={[FONTS.HeaderText, {color: colors.brandText}]}>
            My CookBook
          </Text>
        </View>
        <View style={{position: 'absolute', right: wp(5)}}>
          <Icon4 name="ellipsis1" size={22} color={brColor} />
        </View>
      </View>
      <View>
        <FlatList
          keyExtractor={(item, index) => `${index}`}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={card}
          renderItem={({item, index}) => (
            <TouchableOpacity onPress={() => btnHandlerRecipeText(item)}>
              <ImageBackground
                imageStyle={{borderRadius: wp(3)}}
                source={{uri: item.img}}
                style={styles.imgStyle}>
                <View style={styles.cardBottom}>
                  <Text style={[styles.subtitle, {color: colors.text}]}>
                    {item.subtitle}
                  </Text>
                  <Text style={[styles.title, {color: colors.brandText}]}>
                    {item.title}
                  </Text>
                  <View style={styles.action}>
                    <Image
                      source={item.star}
                      style={{width: 100, height: 20}}
                    />
                    <View>
                      <Text style={[styles.rating, {color: colors.subText}]}>
                        {item.rating}
                      </Text>
                      <Text
                        style={[styles.ratingText, {color: colors.subText}]}>
                        Cooked
                      </Text>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
      </View>
      <Text style={{marginTop: hp(1), fontWeight: 'bold', color: colors.text}}>
        Cooked Recipes
      </Text>
      <View style={styles.subContainer}>
        <FlatList
          keyExtractor={(item, index) => `${index}`}
          showsVerticalScrollIndicator={false}
          data={foodList}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => btnHandler(item)}
              style={{marginTop: hp(1)}}>
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
                <View style={{alignItems: 'center'}}>
                  <Text style={[styles.rating, {color: colors.subText}]}>
                    {item.rating}
                  </Text>
                  <Text style={[styles.ratingText, {color: colors.subText}]}>
                    Cooked
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp(2),
    marginLeft: wp(4),
  },
  subContainer: {
    flex: 1,
    marginVertical: hp(1),
    marginRight: wp(4),
  },
  subtitle: {
    zIndex: 1,
    fontSize: 20,
    fontWeight: '700',
  },
  title: {
    zIndex: 1,
    fontWeight: '600',
  },
  imgStyle: {
    width: wp(80),
    height: hp(60),
    marginRight: wp(4),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: hp(1),
    marginLeft: wp(1),
  },
  rating: {fontSize: 15, textAlign: 'center', fontWeight: '500'},
  ratingText: {fontSize: 15, textAlign: 'center'},
  cardBottom: {
    paddingHorizontal: wp(5),
    justifyContent: 'space-evenly',
    zIndex: 1,
    backgroundColor: 'white',
    height: hp(17),
    width: wp(80),
    position: 'absolute',
    bottom: 0,
    borderBottomLeftRadius: wp(3),
    borderBottomRightRadius: wp(3),
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

//make this component available to the app
export default FeaturedScreen;
