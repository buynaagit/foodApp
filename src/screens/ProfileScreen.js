//import liraries
import React, {useContext, useState, useRef, useEffect} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
  FlatList,
  Modal,
} from 'react-native';

import {AuthContext} from '../context';
import Button from '../components/button';
import {hp, wp} from '../constants/theme';
import {brColor} from '../constants/consts';
import {FONTS} from '../constants';
import {TextInput} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import FlashMessage from 'react-native-flash-message';
import Feather from 'react-native-vector-icons/Feather';
import {card, food, foodList} from '../staticData/myData';
import {Switch, TouchableRipple} from 'react-native-paper';
import Close from 'react-native-vector-icons/MaterialIcons';
import IconLogOut from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const FeaturedScreen = ({navigation}) => {
  const paperTheme = useTheme();
  const {colors} = useTheme();
  const {signOut} = useContext(AuthContext);
  const {toggleTheme} = useContext(AuthContext);
  const [selected, setSelected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [usersJSON, setUsersJSON] = useState('');

  const ref = useRef();

  useEffect(() => {
    getUsers();
  }, []);

  const [userData, setUserData] = React.useState({
    email: '',
    password: '',
    Oldpassword: '',
    confirm_password: '',
    isValidEmail: false,
    isValidPassword: false,
  });

  const getUsers = async () => {
    let data = await AsyncStorage.getItem('@userData');
    data = JSON.parse(data);
    setUsersJSON(data);
    console.log(`userJSON ---->`, usersJSON);
  };

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

  const handleEmailChange = val => {
    if (val.trim().length >= 10 && val.includes('@')) {
      setUserData({
        ...userData,
        email: val,
        isValidEmail: true,
      });
    } else {
      setUserData({
        ...userData,
        email: val,
        isValidEmail: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 6) {
      setUserData({
        ...userData,
        password: val,
        isValidPassword: true,
      });
    } else {
      setUserData({
        ...userData,
        password: val,
        isValidPassword: false,
      });
    }
  };
  const handleOldPasswordChange = val => {
    if (val.trim().length >= 6) {
      setUserData({
        ...userData,
        Oldpassword: val,
      });
    } else {
      setUserData({
        ...userData,
        Oldpassword: val,
        isValidPassword: false,
      });
    }
  };

  const handleConfirmPasswordChange = val => {
    setUserData({
      ...userData,
      confirm_password: val,
    });
  };

  const toggleModal = () => {
    setUserData({
      isValidEmail: false,
      isValidPassword: false,
      isValidOldPassword: false,
    });
    setModalVisible(!modalVisible);
  };

  const resetPassword = async () => {
    try {
      if (userData.email && userData.confirm_password && usersJSON != null) {
        const index = usersJSON.findIndex(obj => obj.email == userData.email);
        if (usersJSON[index].password === userData.Oldpassword) {
          usersJSON[index].password = await userData.confirm_password;
          AsyncStorage.setItem('@userData', JSON.stringify(usersJSON));
          ref.current.showMessage({
            message: 'Password changed succesfully',
            type: 'success',
          });
          toggleModal();
        } else if (usersJSON[index].password !== userData.Oldpassword) {
          ref.current.showMessage({
            message: 'Old password is not correct',
            type: 'warning',
          });
        }
      } else {
        ref.current.showMessage({
          message: 'Text inputs must befilled',
          type: 'warning',
        });
      }
    } catch (e) {
      console.log('catch error -->', e);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <FlashMessage ref={ref} />
      <View style={styles.settings}>
        <TouchableOpacity onPress={() => toggleModal()}>
          <Icon name="settings" color={colors.text} size={25} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileTop}>
        <View style={styles.action}>
          <Image
            source={{
              uri: 'https://scontent.fuln1-2.fna.fbcdn.net/v/t1.6435-9/194361129_2252491984885281_4338819841966953823_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dj0l77KDhFAAX8pDEYC&_nc_ht=scontent.fuln1-2.fna&oh=02741abd131fcadc7bba068c8ed9e436&oe=6171A4FC',
            }}
            style={styles.profileStyle}
          />
          <View>
            <Text style={[FONTS.titleText, {color: colors.text}]}>
              Buynaa Ganbold
            </Text>
            <View style={styles.follwers}>
              <View>
                <Text style={[FONTS.titleText, {color: colors.text}]}>
                  1208
                </Text>
                <Text
                  style={[
                    FONTS.descText,
                    styles.followers,
                    {
                      color: colors.text,
                    },
                  ]}>
                  Followers
                </Text>
              </View>
              <View>
                <Text style={[FONTS.titleText, {color: colors.text}]}>308</Text>
                <Text style={[FONTS.descText, {color: colors.text}]}>
                  Following
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.subContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={[
              FONTS.titleText,
              {color: colors.text, marginVertical: hp(2)},
            ]}>
            Food Photos
          </Text>
          <TouchableOpacity>
            <Text
              style={[
                FONTS.subtitle,
                {color: colors.text, marginVertical: hp(2), marginRight: wp(4)},
              ]}>
              Show all
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            keyExtractor={(item, index) => `${index}`}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={card}
            renderItem={({item, index}) => (
              <TouchableOpacity onPress={() => btnHandlerRecipeText(item)}>
                <Image source={{uri: item.img}} style={styles.imgStyle}></Image>
              </TouchableOpacity>
            )}
          />
        </View>
        <Text style={[FONTS.titleText, {color: colors.text, marginTop: hp(1)}]}>
          Favorite Foods
        </Text>
        <FlatList
          style={{paddingBottom: hp(1)}}
          keyExtractor={(item, index) => `${index}`}
          data={food}
          renderItem={({item, index}) => (
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              {item.datta.map(
                (e, index) =>
                  e.selected && (
                    <View style={[styles.card, styles.shadow]}>
                      <Text style={{color: brColor}}>{e.name}</Text>
                    </View>
                  ),
              )}
            </ScrollView>
          )}
        />
        <Text
          style={[
            FONTS.titleText,
            {color: colors.text, marginVertical: hp(2)},
          ]}>
          Favorite Recipes
        </Text>
        <FlatList
          keyExtractor={(item, index) => `${index}`}
          showsVerticalScrollIndicator={false}
          data={foodList}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => btnHandler(item)}
              style={{marginTop: hp(1)}}>
              <View style={styles.bottomContainer}>
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
                  <Text
                    style={[
                      styles.views,
                      {
                        color: colors.subText,
                      },
                    ]}>
                    views
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      <Modal transparent={true} animationType="slide" visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView, {backgroundColor: colors.Tab}]}>
            <View style={styles.modalBottomSection}>
              <View>
                <TouchableOpacity
                  style={[
                    styles.logOut,
                    {backgroundColor: colors.text, marginRight: wp(5)},
                  ]}
                  onPress={() => signOut()}>
                  <Text style={{color: colors.background, marginRight: wp(2)}}>
                    Log Out
                  </Text>
                  <IconLogOut
                    name="logout"
                    color={colors.background}
                    size={25}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableRipple onPress={() => toggleTheme()}>
                  <View style={styles.preference}>
                    <View pointerEvents="none">
                      <Switch value={paperTheme.dark} />
                    </View>
                    <Text
                      style={{
                        color: colors.text,
                        marginLeft: wp(2),
                        fontWeight: '500',
                      }}>
                      Dark theme
                    </Text>
                  </View>
                </TouchableRipple>
              </View>
            </View>
            <View style={styles.closeIcon}>
              <TouchableOpacity onPress={() => toggleModal()}>
                <Close name="close" color={colors.text} size={25} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => setSelected(!selected)}
              style={{marginTop: hp(2)}}>
              <Text style={{color: colors.text}}>Forgot Password?</Text>
            </TouchableOpacity>
            {selected && (
              <View style={{marginTop: hp(1)}}>
                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    onChangeText={val => handleEmailChange(val)}
                    textContentType={'emailAddress'}
                    textAlign={'right'}
                    selectionColor={brColor}
                    placeholder="Your Email"
                    keyboardType={'email-address'}
                    placeholderTextColor={colors.text}
                    keyboardAppearance={paperTheme.dark ? 'dark' : 'light'}
                    style={{backgroundColor: colors.background, width: wp(70)}}
                  />
                  {userData.isValidEmail && (
                    <View style={{justifyContent: 'center'}}>
                      <Feather name="check-circle" color="green" size={20} />
                    </View>
                  )}
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    onChangeText={val => handleOldPasswordChange(val)}
                    selectionColor={brColor}
                    secureTextEntry={true}
                    placeholder="old password"
                    keyboardAppearance={paperTheme.dark ? 'dark' : 'light'}
                    placeholderTextColor={colors.text}
                    style={{backgroundColor: colors.background, width: wp(70)}}
                  />
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    onChangeText={val => handlePasswordChange(val)}
                    selectionColor={brColor}
                    secureTextEntry={true}
                    placeholder="new password"
                    keyboardAppearance={paperTheme.dark ? 'dark' : 'light'}
                    placeholderTextColor={colors.text}
                    style={{backgroundColor: colors.background, width: wp(70)}}
                  />
                  {userData.isValidPassword && (
                    <View style={{justifyContent: 'center'}}>
                      <Feather name="check-circle" color="green" size={20} />
                    </View>
                  )}
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    onChangeText={val => handleConfirmPasswordChange(val)}
                    selectionColor={brColor}
                    secureTextEntry={true}
                    placeholder="new password confirm"
                    keyboardAppearance={paperTheme.dark ? 'dark' : 'light'}
                    placeholderTextColor={colors.text}
                    style={{backgroundColor: colors.background, width: wp(70)}}
                  />
                  {userData.password &&
                  userData.confirm_password &&
                  userData.password === userData.confirm_password ? (
                    <View style={{justifyContent: 'center'}}>
                      <Feather name="check-circle" color="green" size={20} />
                    </View>
                  ) : null}
                </View>
                <Button
                  disabled={loading}
                  onPress={() => resetPassword()}
                  textColor={{color: 'white'}}
                  text={'Reset password'}
                  style={{marginTop: hp(2)}}
                />
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  follwers: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp(1),
  },
  followers: {
    textAlign: 'center',
    marginRight: wp(3),
  },
  subContainer: {
    flex: 1,
    marginTop: hp(1),
    marginBottom: hp(1),
    marginLeft: wp(4),
  },
  blackOverlay: {
    width: wp(68),
    height: hp(18),
    backgroundColor: 'black',
    opacity: 0.2,
    borderRadius: wp(3),
    padding: hp(2),
  },
  profileTop: {
    paddingTop: hp(5),
    height: hp(30),
    width: wp(100),
    backgroundColor: '#b7a48565',
    justifyContent: 'center',
    alignItems: 'center',
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
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
    width: wp(40),
    height: hp(18),
    marginRight: wp(3),
    borderRadius: wp(3),
  },
  profileStyle: {
    width: wp(35),
    height: wp(35),
    borderRadius: wp(50),
    marginRight: wp(7),
  },
  card: {
    backgroundColor: '#C2B280',
    paddingHorizontal: wp(10),
    height: wp(10),
    borderRadius: 18,
    marginHorizontal: wp(2),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(1),
  },
  settings: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
    marginTop: hp(25),
    marginRight: wp(4),
    borderRadius: 10,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 2,
  },
  toggleDark: {
    backgroundColor: 'orange',
    borderRadius: 10,
    zIndex: 1,
  },
  shadow: {
    backgroundColor: 'white',
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 2,
  },
  preference: {
    flexDirection: 'row',
    alignItems: 'center',
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
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: wp(4),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    height: hp(65),
    width: wp(90),
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  logOut: {
    flexDirection: 'row',
    width: wp(26),
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp(2),
    borderRadius: 10,
  },
  modalBottomSection: {
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    justifyContent: 'space-between',
    bottom: hp(4),
  },
  closeIcon: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: hp(2),
    right: wp(3),
  },
});

//make this component available to the app
export default FeaturedScreen;
