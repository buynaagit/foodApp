//import liraries
import React, {useContext, useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';

import {AuthContext} from '../context';
import {hp, wp} from '../constants/theme';
import {brColor} from '../constants/consts';
import {FONTS, COLORS} from '../constants';
import {useTheme} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';
import IconArrow from 'react-native-vector-icons/AntDesign';
import {Directions, Ingredients} from '../staticData/myData';

const stars = [1, 2, 3, 4, 5];

// create a component
const CookRecipeScreenText = ({route, navigation}) => {
  const {colors} = useTheme();
  const [selectedIng, setSelectedIng] = useState(true);
  const [selectedDir, setSelectedDir] = useState(false);
  const [show, setShow] = useState(false);
  const {params} = route.params;

  const toggleShow = () => {
    setShow(!show);
  };

  const selectDir = () => {
    setSelectedDir(true);
    setSelectedIng(false);
  };

  const selectIng = () => {
    setSelectedDir(false);
    setSelectedIng(true);
  };

  console.log(`params`, params);
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <TouchableOpacity
        style={styles.arrowButton}
        onPress={() => navigation.pop()}>
        <Icon name="left" size={20} color={'black'} />
      </TouchableOpacity>
      <View>
        <Image
          source={{uri: params.img}}
          style={{width: wp(100), height: hp(50)}}
        />
      </View>
      <View style={styles.subContainer}>
        <View
          style={{
            marginHorizontal: wp(5),
          }}>
          <View style={styles.action}>
            <Text style={[FONTS.HeaderText2, {color: colors.brandText}]}>
              {params.title}
            </Text>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: colors.text}}> {params.rating} </Text>
              <Text style={{color: colors.subText}}> cooked </Text>
            </View>
          </View>
          <Text
            style={[FONTS.descText, {color: colors.subText, marginTop: hp(1)}]}>
            {params.desc}
          </Text>
          <View style={{flexDirection: 'row', marginTop: hp(2)}}>
            <Image source={params.star} style={{width: 100, height: 20}} />
            <View style={{justifyContent: 'center'}}>
              <Text style={{color: colors.subText, marginLeft: wp(1)}}>
                {params.reviews}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.secContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{color: colors.subText}}>Severage</Text>
              <Text
                style={[
                  styles.secTitle,
                  {
                    color: colors.text,
                  },
                ]}>
                {params.severage}
              </Text>
            </View>
            <View>
              <Text style={{color: colors.subText}}>Prep. Time</Text>
              <Text
                style={[
                  styles.secTitle,
                  {
                    color: colors.text,
                  },
                ]}>
                {params.preptime}
              </Text>
            </View>
            <View>
              <Text style={{color: colors.subText}}>Cook time</Text>
              <Text
                style={[
                  styles.secTitle,
                  {
                    color: colors.text,
                  },
                ]}>
                {params.cooktime}
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={{flexDirection: 'row', marginTop: hp(3)}}
              onPress={() => toggleShow()}>
              <Text style={{color: colors.subText}}>Description</Text>
              <IconArrow
                style={{marginLeft: wp(1)}}
                name={show ? 'up' : 'down'}
                size={wp(4)}
                color={colors.brandText}
              />
            </TouchableOpacity>
            {show == true && (
              <Text style={{marginTop: hp(1), color: colors.text}}>
                {params.description}
              </Text>
            )}
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(2),
          }}>
          <View>
            <TouchableOpacity
              style={styles.section}
              onPress={() => selectIng()}>
              <Text
                style={[
                  styles.ingText,
                  {color: selectedIng ? brColor : colors.text},
                ]}>
                INGREDIENTS
              </Text>
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: selectedIng ? brColor : 'white',
                width: wp(50),
                height: hp(0.1),
              }}
            />
          </View>
          <View>
            <TouchableOpacity
              style={styles.section}
              onPress={() => selectDir()}>
              <Text
                style={[
                  styles.ingText,
                  {color: selectedDir ? brColor : colors.text},
                ]}>
                DIRECTIONS
              </Text>
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: selectedDir ? brColor : 'white',
                width: wp(50),
                height: hp(0.1),
              }}
            />
          </View>
        </View>
        {selectedIng && (
          <View style={{paddingHorizontal: wp(5), marginBottom: hp(5)}}>
            {Ingredients.map((e, index) => (
              <View style={{}}>
                <Text style={[styles.ingredText, {color: colors.text}]}>
                  {e}
                </Text>
                <View style={styles.underline} />
              </View>
            ))}
          </View>
        )}
        {selectedDir && (
          <View style={{marginVertical: hp(2), paddingHorizontal: wp(5)}}>
            {Directions.map((e, index) => (
              <View style={{marginVertical: hp(1)}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.dirContainer}>
                    <Text style={{color: 'white'}}> {index + 1} </Text>
                  </View>
                  <Text
                    style={[
                      styles.ingredText,
                      {color: colors.brandText, marginLeft: wp(4)},
                    ]}>
                    {e.title}
                  </Text>
                </View>
                <Text style={[styles.ingredText, {color: colors.text}]}>
                  {e.description}
                </Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    marginTop: hp(2),
  },
  divider: {
    backgroundColor: brColor,
    width: wp(100),
    height: hp(0.05),
    marginTop: hp(2),
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: hp(0.5),
  },
  ratingVideo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    backgroundColor: '#b7a48520',
  },
  secContainer: {
    marginLeft: wp(5),
    marginRight: wp(14),
    marginTop: hp(2),
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: hp(3.5),
    paddingBottom: hp(5),
  },
  btnStyle: {
    width: wp(38),
    backgroundColor: 'white',
    borderColor: brColor,
    borderWidth: 1.3,
  },
  section: {
    backgroundColor: '#b7a48515',
    width: wp(50),
    height: hp(5),
    justifyContent: 'center',
  },
  ingText: {
    textAlign: 'center',
    color: COLORS.brand,
    fontWeight: '700',
  },
  ingredText: {
    marginVertical: hp(1.5),
    fontWeight: '700',
  },
  underline: {
    backgroundColor: '#b7a48540',
    width: wp(100),
    height: hp(0.1),
  },
  dirContainer: {
    width: wp(8),
    height: wp(8),
    backgroundColor: brColor,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: wp(5),
    marginTop: hp(4),
    zIndex: 1,
  },
});

//make this component available to the app
export default CookRecipeScreenText;
