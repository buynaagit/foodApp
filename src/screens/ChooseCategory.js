//import liraries
import React, {useState, useRef} from 'react';
import {useTheme} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {hp, wp} from '../constants/theme';
import {brColor} from '../constants/consts';
import Button from '../components/button';
import FlashMessage from 'react-native-flash-message';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {SafeAreaView} from 'react-native-safe-area-context';

// create a component
const CategoryScreen = ({navigation}) => {
  const [count, setCount] = useState(0);
  const [pressed, setPressed] = useState(false);
  const {colors} = useTheme();

  const handleTouch = () => {
    setCount(count + 1);
  };

  const ref = useRef();

  const ContinueBtn = () => {
    if (count >= 5) {
      navigation.navigate('Food');
    } else {
      showMessage({
        message: 'Chosen cuisine not enough',
        description: 'At least 5 cuisin need to be chosen',
        type: 'warning',
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlashMessage ref={ref} />
      <View
        style={{
          marginHorizontal: wp(10),
          marginBottom: hp(3),
        }}>
        <Text
          style={{color: colors.brandText, fontSize: 20, fontWeight: '500'}}>
          Choose your favorite{`\n`}favorite cuisines
        </Text>
        <Text style={{color: colors.brandText, marginTop: hp(1)}}>
          {count} of 5
        </Text>
      </View>
      <ScrollView horizontal={true} style={{marginTop: hp(5)}}>
        <View>
          <TouchableOpacity
            onPress={() => {
              handleTouch();
            }}
            style={{
              backgroundColor: '#483C32',
              width: wp(17),
              height: wp(17),
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: hp(-1),
            }}>
            <Text style={{color: 'white'}}>Swedish</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#C2B280',
              width: wp(19.5),
              height: wp(19.5),
              borderRadius: 50,
              marginLeft: wp(8),
              marginVertical: hp(2),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}>Chinese</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#988558',
              width: wp(22),
              height: wp(22),
              borderRadius: 100,
              marginRight: wp(1),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}>Brazil</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 3,
              backgroundColor: 'white',
              width: wp(25),
              height: wp(25),
              borderRadius: 50,
              shadowColor: 'rgb(0, 0, 0)',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.29,
              shadowRadius: 4.65,
              elevation: 2,
            }}>
            <Text>American</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#483C32',
              width: wp(35),
              height: wp(35),
              borderRadius: 80,
              marginLeft: wp(0),
              marginVertical: hp(2),
            }}>
            <Text style={{color: 'white'}}>Japanese</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#C2B280',
              width: wp(18),
              height: wp(18),
              marginLeft: wp(-10),
              borderRadius: 100,
              marginHorizontal: wp(3),
            }}>
            <Text style={{color: 'white'}}>Indian</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#C2B280',
              width: wp(15),
              height: wp(15),
              borderRadius: 50,
              marginTop: hp(6),
              marginLeft: wp(-7),
            }}>
            <Text style={{color: 'white'}}>Czech</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#988558',
              width: wp(25),
              height: wp(25),
              borderRadius: 50,
              marginLeft: wp(4),
              marginVertical: hp(2),
            }}>
            <Text style={{color: 'white'}}>Italian</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#C2B280',
              width: wp(18),
              height: wp(18),
              borderRadius: 100,
              marginLeft: wp(-5),
              marginHorizontal: wp(3),
            }}>
            <Text style={{color: 'white'}}>Thai</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#483C32',
              width: wp(30),
              height: wp(30),
              borderRadius: 80,
              marginLeft: wp(-12),
            }}>
            <Text style={{color: 'white'}}>Mexican</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#483C32',
              width: wp(21),
              height: wp(21),
              borderRadius: 100,
              marginHorizontal: wp(3),
              marginTop: hp(16),
              marginLeft: wp(-14),
            }}>
            <Text style={{color: 'white'}}>Germany</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Button
        onPress={() => ContinueBtn()}
        text={'Continue'}
        textColor={{color: 'white'}}
      />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp(10),
    marginBottom: hp(8),
  },
});

//make this component available to the app
export default CategoryScreen;
