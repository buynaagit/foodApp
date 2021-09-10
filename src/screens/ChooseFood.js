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
  StatusBar,
} from 'react-native';

import {hp, wp} from '../constants/theme';
import Button from '../components/button';
import {food} from '../staticData/myData';
import {brColor} from '../constants/consts';
import FlashMessage from 'react-native-flash-message';
import {SafeAreaView} from 'react-native-safe-area-context';

// create a component
const ChooseFoodScreen = ({navigation}) => {
  const paperTheme = useTheme();
  const [count, setCount] = useState(0);
  const {colors} = useTheme();

  const ref = useRef();

  const handleTouch = async idx => {
    console.log(food);
    if (count < 5) {
      setCount(count + 1);
      if (idx <= 4) {
        food[0].datta[idx - 1].selected = true;
        console.log(food[0].datta[idx - 1].index);
      } else if (idx >= 5 && idx <= 8) {
        food[1].datta[idx - 5].selected = true;
        console.log(food[1].datta[idx - 5].index);
      } else if (idx >= 9 && idx <= 13) {
        food[2].datta[idx - 9].selected = true;
        console.log(food[2].datta[idx - 9].index);
      } else if (idx >= 14 && idx <= 18) {
        food[3].datta[idx - 14].selected = true;
        console.log(food[3].datta[idx - 14].index);
      }
    } else {
      ref.current.showMessage({
        message: 'Complete',
        description: 'You have alreday choosen 5 cuisine',
        type: 'success',
      });
    }
  };

  const ContinueBtn = () => {
    if (count >= 1) {
      navigation.navigate('Home');
    } else {
      ref.current.showMessage({
        message: 'Choose 5 cuisine',
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
          marginTop: hp(10),
          marginHorizontal: wp(10),
        }}>
        <Text
          style={{color: colors.brandText, fontSize: 20, fontWeight: '500'}}>
          Choose your favorite{`\n`}favorite food
        </Text>
        <Text style={{color: colors.brandText, marginTop: hp(1)}}>
          {count} of 5
        </Text>
      </View>
      <FlatList
        scrollEnabled={false}
        style={{marginTop: hp(15)}}
        keyExtractor={({index}) => index}
        data={food}
        renderItem={({item, index}) => (
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {item.datta.map((e, index) => (
              <TouchableOpacity
                disabled={e.selected ? true : false}
                onPress={() => {
                  handleTouch(e.index);
                }}
                style={
                  e.selected
                    ? [
                        styles.card,
                        {
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
                      ]
                    : styles.card
                }>
                <Text style={e.selected ? {color: brColor} : {color: 'white'}}>
                  {e.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      />
      <Button
        style={{marginBottom: hp(10)}}
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
    paddingHorizontal: wp(10),
    height: wp(10),
    borderRadius: 18,
    marginHorizontal: wp(2),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(1),
  },
});

//make this component available to the app
export default ChooseFoodScreen;
