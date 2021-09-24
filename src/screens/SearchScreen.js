//import liraries
import React, {useState, useRef} from 'react';

import {
  View,
  Text,
  Image,
  FlatList,
  StatusBar,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {hp, wp} from '../constants/theme';
import {brColor} from '../constants/consts';
import {FONTS} from '../constants';
import {useTheme} from '@react-navigation/native';
import {card, foodList} from '../staticData/myData';
import FlashMessage from 'react-native-flash-message';
import Icon4 from 'react-native-vector-icons/AntDesign';
import SearchIcon from 'react-native-vector-icons/EvilIcons';
import MicrophoneIcon from 'react-native-vector-icons/FontAwesome';

// create a component
const FeaturedScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [resultFoodList, setResultFoodList] = useState('');
  const [resultCardList, setResultCardList] = useState('');
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

  const ref = useRef();

  const searchBtn = async val => {
    let filterCard;
    let filterFood;
    filterCard = await card.find(({subtitle}) => subtitle.includes(val));
    filterFood = await foodList.find(({title}) => title.includes(val));
    if (filterCard || filterFood) {
      setResultCardList(filterCard);
      setResultFoodList(filterFood);
    } else {
      ref.current.showMessage({
        message: 'No food has been found',
        type: 'warning',
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={paperTheme.dark ? 'light-content' : 'dark-content'}
      />
      <FlashMessage ref={ref} />
      <View
        style={{
          marginBottom: hp(1),
          marginLeft: wp(4),
        }}>
        <View style={styles.searchContainer}>
          <Text style={[FONTS.HeaderText2, {color: colors.brandText}]}>
            Search
          </Text>
        </View>
        <View style={styles.dots}>
          <Icon4 name="ellipsis1" size={22} color={brColor} />
        </View>
      </View>
      <View
        style={[
          styles.searchInput,
          {backgroundColor: colors.search, marginLeft: wp(4)},
        ]}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => searchBtn(search)}>
            <SearchIcon name="search" size={20} color={'gray'} />
          </TouchableOpacity>
          <View style={{width: wp(74), marginLeft: wp(2)}}>
            <TextInput
              placeholder="Search"
              placeholderTextColor={colors.gray}
              onChangeText={setSearch}
            />
          </View>
        </View>
        <MicrophoneIcon name="microphone" size={20} color={'gray'} />
      </View>

      {search ? (
        <>
          <View>
            <View>
              {resultCardList ? (
                <View
                  style={{
                    marginLeft: wp(4),
                  }}>
                  <View
                    style={{
                      marginBottom: hp(1),
                    }}>
                    <View style={styles.likedContainer}>
                      <Text style={[FONTS.HeaderText, {color: colors.text}]}>
                        Most Liked Recipes
                      </Text>
                    </View>
                  </View>
                  <View>
                    <View style={{}}>
                      <TouchableOpacity
                        onPress={() => btnHandlerRecipeText(resultCardList)}>
                        <ImageBackground
                          imageStyle={{borderRadius: wp(3)}}
                          source={{uri: resultCardList.img}}
                          style={[styles.imgStyle, {shadowColor: colors.text}]}>
                          <View
                            style={[
                              styles.cardBottom,
                              {backgroundColor: colors.Tab},
                            ]}>
                            <Text
                              style={[styles.subtitle, {color: colors.text}]}>
                              {resultCardList.subtitle}
                            </Text>
                            <View style={styles.action}>
                              <Image
                                source={resultCardList.star}
                                style={{width: 85, height: 15}}
                              />
                            </View>
                          </View>
                        </ImageBackground>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ) : (
                console.log(`no result`)
              )}
            </View>
            <View>
              {resultFoodList ? (
                <View
                  style={{
                    marginLeft: wp(4),
                  }}>
                  <Text
                    style={{
                      marginTop: hp(1),
                      fontWeight: 'bold',
                      color: colors.text,
                    }}>
                    Popular Recipes
                  </Text>
                  <View style={styles.subContainer}>
                    <View>
                      <TouchableOpacity
                        onPress={() => btnHandler(resultFoodList)}
                        style={{marginTop: hp(1)}}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <View style={{flexDirection: 'row'}}>
                            <Image
                              source={{uri: resultFoodList.img}}
                              style={{
                                width: wp(19),
                                height: wp(19),
                                borderRadius: wp(3),
                              }}
                            />
                            <View style={{marginLeft: wp(3)}}>
                              <Text
                                style={[FONTS.titleText, {color: colors.text}]}>
                                {resultFoodList.title}
                              </Text>
                              <Text
                                style={[FONTS.subtitle, {color: colors.text}]}>
                                {resultFoodList.subtitle}
                              </Text>
                              <Image
                                source={resultFoodList.star}
                                style={{width: 100, height: 20}}
                              />
                            </View>
                          </View>
                          <View style={{alignresultFoodLists: 'center'}}>
                            <Text
                              style={[styles.rating, {color: colors.subText}]}>
                              {resultFoodList.rating}
                            </Text>
                            <Text
                              style={[
                                styles.ratingText,
                                {color: colors.subText},
                              ]}>
                              Cooked
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ) : (
                console.log(`no result`)
              )}
            </View>
          </View>
        </>
      ) : (
        <View>
          <View
            style={{
              marginBottom: hp(1),

              marginLeft: wp(4),
            }}>
            <View style={styles.likedContainer}>
              <Text style={[FONTS.HeaderText, {color: colors.text}]}>
                Most Liked Recipes
              </Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: wp(4),
            }}>
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
                    style={[styles.imgStyle, {shadowColor: colors.text}]}>
                    <View
                      style={[
                        styles.cardBottom,
                        {backgroundColor: colors.Tab},
                      ]}>
                      <Text style={[styles.subtitle, {color: colors.text}]}>
                        {item.subtitle}
                      </Text>
                      <View style={styles.action}>
                        <Image
                          source={item.star}
                          style={{width: 85, height: 15}}
                        />
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              )}
            />
          </View>
          <Text
            style={{
              marginTop: hp(1),
              fontWeight: 'bold',
              color: colors.text,
              marginLeft: wp(4),
            }}>
            Popular Recipes
          </Text>
          <View style={styles.subContainer}>
            <FlatList
              style={{height: wp(100)}}
              keyExtractor={(item, index) => `${index}`}
              showsVerticalScrollIndicator={false}
              data={foodList}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => btnHandler(item)}
                  style={{marginTop: hp(1)}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={{uri: item.img}}
                        style={{
                          width: wp(19),
                          height: wp(19),
                          borderRadius: wp(3),
                        }}
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
                      <Text
                        style={[styles.ratingText, {color: colors.subText}]}>
                        Cooked
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dots: {position: 'absolute', right: wp(5)},
  searchContainer: {flexDirection: 'row', alignSelf: 'flex-start'},
  subContainer: {
    marginRight: wp(4),
    marginVertical: hp(1),
  },
  subtitle: {
    zIndex: 1,
    fontSize: 11,
    fontWeight: '600',
  },
  title: {
    fontSize: 12,
    zIndex: 1,
    fontWeight: '600',
  },
  imgStyle: {
    width: wp(40),
    height: hp(20),
    marginRight: wp(4),

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
  likedContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: wp(4),
  },
  rating: {fontSize: 15, textAlign: 'center', fontWeight: '500'},
  ratingText: {fontSize: 15, textAlign: 'center'},
  cardBottom: {
    paddingHorizontal: wp(5),
    justifyContent: 'space-evenly',
    zIndex: 1,
    height: hp(6),
    width: wp(40),
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
  searchInput: {
    height: hp(4.5),
    marginRight: wp(4),
    borderRadius: wp(5),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    marginBottom: hp(1),
  },
});

//make this component available to the app
export default FeaturedScreen;
