//import liraries
import React, {useState, useEffect, useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {hp, wp} from '../constants/theme';
import {useTheme} from '@react-navigation/native';
import {brColor} from '../constants/consts';

// create a component
const VerifyScreen = ({navigation}) => {
  const {colors} = useTheme();
  const [verify, setVerify] = useState('');

  const veriFunction = useCallback(() => {
    if (verify.length === 4) {
      navigation.navigate('Category');
    }
  }, [navigation, verify]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: colors.brandText, fontSize: 28}}>
        Enter the Code {`\n`}to Verify your Phone{' '}
      </Text>
      <Text style={{color: colors.brandText, fontSize: 13, marginTop: hp(5)}}>
        We have s ent you an SMS with a code to{`\n`}the number +976 94982323
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: hp(7),
        }}>
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
        <Text
          style={{
            color: colors.text,
            marginTop: hp(5),
            textDecorationLine: 'underline',
          }}>
          Send a new code
        </Text>
      </TouchableOpacity>

      <TextInput
        style={{position: 'absolute', bottom: 0, color: 'white'}}
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
});

//make this component available to the app
export default VerifyScreen;
