//import liraries
import React, {useState, useEffect, useCallback} from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {hp, wp} from '../constants/theme';
import {useTheme} from '@react-navigation/native';
import {brColor} from '../constants/consts';
12313;
// create a component
const VerifyScreen = ({navigation}) => {
  const paperTheme = useTheme();
  const {colors} = useTheme();
  const [verify, setVerify] = useState('');

  const veriFunction = () => {
    if (verify.length === 4) {
      navigation.navigate('Category');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={paperTheme.dark ? 'light-content' : 'dark-content'}
      />
      <Text style={{color: colors.brandText, fontSize: 28}}>
        Enter the Code {`\n`}to Verify your Phone{' '}
      </Text>
      <Text style={{color: colors.brandText, fontSize: 13, marginTop: hp(5)}}>
        We have s ent you an SMS with a code to{`\n`}the number +976 94982323
      </Text>
      <View style={styles.cardContainer}>
        <View
          style={
            verify.length >= 1
              ? [styles.dot, {backgroundColor: brColor}]
              : styles.dot
          }
        />
        <View
          style={
            verify.length >= 2
              ? [styles.dot, {backgroundColor: brColor}]
              : styles.dot
          }
        />
        <View
          style={
            verify.length >= 3
              ? [styles.dot, {backgroundColor: brColor}]
              : styles.dot
          }
        />
        <View
          style={
            verify.length >= 4
              ? [styles.dot, {backgroundColor: brColor}]
              : styles.dot
          }
        />
      </View>
      <TouchableOpacity>
        <Text style={[styles.send, {color: colors.text}]}>Send a new code</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.textInput}
        autoFocus={true}
        keyboardType="number-pad"
        onChangeText={setVerify}
        maxLength={4}
        onSubmitEditing={veriFunction()}
      />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: wp(10),
    marginTop: hp(15),
  },
  dot: {
    backgroundColor: 'gray',
    width: wp(5),
    height: wp(5),
    borderRadius: 50,
    marginRight: wp(6),
  },
  textInput: {position: 'absolute', bottom: 0, color: 'white'},
  send: {
    marginTop: hp(5),
    textDecorationLine: 'underline',
  },
  cardContainer: {
    flexDirection: 'row',
    marginTop: hp(7),
  },
});

//make this component available to the app
export default VerifyScreen;
