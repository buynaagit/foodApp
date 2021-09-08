import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import {brColor} from '../constants/consts';
import {hp, wp} from '../constants/theme';

const Button = ({text, onPress, style, textColor, disabled = false}) => {
  return (
    <TouchableOpacity style={[styles.pressBtn, style]} onPress={onPress}>
      {disabled ? (
        <ActivityIndicator color={'white' || textColor} size={17} />
      ) : (
        <Text style={textColor}> {text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  pressBtn: {
    width: wp(80),
    height: 45,
    borderRadius: 30,
    alignSelf: 'center',
    backgroundColor: brColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
