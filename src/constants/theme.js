import {Dimensions, PixelRatio, Platform} from 'react-native';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 320;
export const actOpacity = Platform.OS == 'ios' ? 0.2 : 0.4;
export function ft(size) {
  const newSize = size * scale;
  if (Platform.OS == 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const wp = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

export const hp = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export const brandFontHeavy = Platform.select({
  ios: 'SFProDisplay-Heavy',
  android: 'SF-Pro-Display-Heavy',
});
export const brandFontBlack = Platform.select({
  ios: 'SFProDisplay-Black',
  android: 'SF-Pro-Display-Black',
});
export const brandFontRegular = Platform.select({
  ios: 'SFProDisplay-Regular',
  android: 'SF-Pro-Display-Regular',
});
export const brandFontThin = Platform.select({
  ios: 'SFProDisplay-Thin',
  android: 'SF-Pro-Display-Thin',
});
export const brandFontUltralight = Platform.select({
  ios: 'SFProDisplay-Ultralight',
  android: 'SF-Pro-Display-Ultralight',
});
export const brandFontlight = Platform.select({
  ios: 'SFProDisplay-light',
  android: 'SF-Pro-Display-light',
});
export const brandFontMedium = Platform.select({
  ios: 'SFProDisplay-Medium',
  android: 'SF-Pro-Display-Medium',
});
export const brandFontSemibold = Platform.select({
  ios: 'SFProDisplay-Black',
  android: 'SF-Pro-Display-Black',
});
export const brandFontBold = Platform.select({
  ios: 'SFProDisplay-Bold',
  android: 'SF-Pro-Display-Bold',
});

export const FONTS = {
  titleText: {
    fontFamily: brandFontHeavy,
    fontSize: ft(15),
  },
  PaymentText: {
    fontFamily: brandFontBold,
    fontSize: ft(20),
  },
  HeaderText: {
    fontFamily: brandFontHeavy,
    fontSize: ft(17),
  },
  PaymenPrice: {
    fontFamily: brandFontRegular,
    fontSize: ft(15),
  },
  comingSoon: {
    fontFamily: brandFontThin,
    fontSize: ft(20),
  },
};

export const COLORS = {
  brand: '#5ABAFF',
  white: '#FFFFFF',
  green: '#AFD224',
  text: '#333333',
  greenText: '#06CF90',
  yellow: '#FED130',
  grey: '#E3E1E1',
  warningText: '#C3902E',
  warningContainer: '#F4B43A',
  genderText: '#919191',
};

export const SIZES = {};

const appTheme = {COLORS, SIZES, FONTS};
export default appTheme;
