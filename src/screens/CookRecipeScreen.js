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
  SafeAreaView,
} from 'react-native';

import Video from 'react-native-video';
import {AuthContext} from '../context';
import {hp, wp} from '../constants/theme';
import {brColor} from '../constants/consts';
import {FONTS, COLORS} from '../constants';
import {useTheme} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';
import IconArrow from 'react-native-vector-icons/AntDesign';
import IconShare from 'react-native-vector-icons/FontAwesome5';
import Button from '../components/button';

const stars = [1, 2, 3, 4, 5];

// create a component
const CookRecipeScreen = ({route, navigation}) => {
  const paperTheme = useTheme();
  const {colors} = useTheme();

  const [show, setShow] = useState(false);
  const [pause, setPause] = useState(true);
  const {toggleTheme} = useContext(AuthContext);
  const {params} = route.params;

  const ref = React.useRef();

  const toggleShow = () => {
    setShow(!show);
  };

  // const renderStar = () => {
  //   if () {
  //     retun (
  //       <View></View>
  //     )
  //   }
  // // }

  console.log(`params`, params);
  return (
    <ScrollView style={styles.container}>
      <View>
        <StatusBar barStyle={'light-content'} />
      </View>
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
        <View style={{width: wp(100), height: hp(32.45), marginTop: hp(2)}}>
          <Video
            paused={pause}
            controls
            fullscreen
            style={{
              flex: 1,
            }}
            source={require('../assets/videos/takoyaki.mp4')} // Can be a URL or a local file.
          />
          <View style={styles.ratingVideo}>
            <Image source={params.star} style={{width: 100, height: 20}} />
            <View style={{flexDirection: 'row'}}>
              <Icon name="like2" color={colors.brandText} size={wp(5)} />
              <View style={{justifyContent: 'center', marginLeft: wp(2)}}>
                <Text style={{color: colors.subText}}>{params.likes}</Text>
              </View>
              <View style={{justifyContent: 'center', marginLeft: wp(2)}}>
                <IconShare
                  style={{marginLeft: wp(2)}}
                  name="share-alt"
                  color={colors.brandText}
                  size={wp(4.5)}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Button
            onPress={() => setPause(!pause)}
            text={pause ? 'Start Cooking' : 'Pause Cooking'}
            style={{width: wp(38)}}
            textColor={{color: 'white'}}
          />
          <Button
            text="+ Add to list"
            textColor={{color: brColor}}
            style={styles.btnStyle}
          />
        </View>
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
});

//make this component available to the app
export default CookRecipeScreen;
