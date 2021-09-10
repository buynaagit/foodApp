//import liraries
import React, {useState, useRef} from 'react';
import {useTheme} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {hp, wp} from '../constants/theme';
import {brColor} from '../constants/consts';
import Button from '../components/button';
import FlashMessage from 'react-native-flash-message';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {SafeAreaView} from 'react-native-safe-area-context';
import {category} from '../staticData/myData';

const generateRandomNumber = () => {
  let myArr = [];
  for (let i = 0; i < category.length * 4; i++) {
    myArr.push(Math.floor(Math.random() * (30 - 16) + 16));
  }
  console.log(`myArr`, myArr);
  return myArr;
};
// create a component
const CategoryScreen = ({navigation}) => {
  const [randomNums, setrandomNums] = useState(generateRandomNumber());
  const [isloading, setLoading] = useState(true);

  const [count, setCount] = useState(0);
  const {colors} = useTheme();

  const handleTouch = async idx => {
    console.log(`category`, category);
    if (count < 5) {
      setCount(count + 1);
      if (idx <= 4) {
        category[0].datta[idx - 1].selected = true;
      } else if (idx >= 5 && idx <= 8) {
        category[1].datta[idx - 5].selected = true;
      } else if (idx >= 9 && idx <= 12) {
        category[2].datta[idx - 9].selected = true;
      } else if (idx >= 13 && idx <= 16) {
        category[3].datta[idx - 13].selected = true;
      }
    } else {
      showMessage({
        message: 'Complete',
        description: 'You have alreday choosen 5 cuisine',
        type: 'success',
      });
    }
  };

  const ref = useRef();

  const ContinueBtn = () => {
    if (count >= 5) {
      navigation.navigate('Food');
    } else {
      ref.current.showMessage({
        message: 'Choose 5 cuisine',
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
          marginTop: hp(10),
        }}>
        <Text
          style={{color: colors.brandText, fontSize: 20, fontWeight: '500'}}>
          Choose your favorite{`\n`}favorite cuisines
        </Text>
        <Text style={{color: colors.brandText, marginTop: hp(1)}}>
          {count} of 5
        </Text>
      </View>
      <ScrollView style={{marginTop: hp(9), height: hp(100)}}>
        {category.map((item, index) => (
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {item.datta.map((e, index) => (
              <TouchableOpacity
                disabled={e.selected ? true : false}
                onPress={() => {
                  handleTouch(e.index);
                }}
                style={
                  e.selected
                    ? {
                        backgroundColor: 'white',
                        height: wp(randomNums[e.index - 1]),
                        width: wp(randomNums[e.index - 1]),
                        borderRadius: 100,
                        marginHorizontal: wp(2),
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: hp(1),
                        shadowColor: 'rgb(0, 0, 0)',
                        shadowOffset: {
                          width: 0,
                          height: 3,
                        },
                        shadowOpacity: 0.29,
                        shadowRadius: 4.65,
                        elevation: 2,
                      }
                    : {
                        backgroundColor: '#C2B280',
                        height: wp(randomNums[e.index - 1]),
                        width: wp(randomNums[e.index - 1]),
                        borderRadius: 100,
                        marginHorizontal: wp(2),
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: hp(1),
                      }
                }>
                <Text style={e.selected ? {color: brColor} : {color: 'white'}}>
                  {e.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ))}
      </ScrollView>
      <Button
        style={{marginBottom: hp(2)}}
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
  },
  card: {
    backgroundColor: '#C2B280',
    paddingHorizontal: wp(9),
    height: wp(10),
    borderRadius: 18,
    marginHorizontal: wp(2),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(1),
  },
});

//make this component available to the app
export default CategoryScreen;
