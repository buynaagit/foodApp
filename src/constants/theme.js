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

export const COLORS = {
  brand: '#b7a485',
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

export const FONTS = {
  titleText: {
    fontSize: ft(15),
    fontWeight: '600',
  },
  subtitle: {
    fontSize: ft(11),
    color: '#919191',
  },
  HeaderText: {
    fontSize: ft(15),
    fontWeight: '600',
  },
  HeaderText2: {
    fontSize: ft(20),
    fontWeight: 'bold',
  },
  descText: {
    fontSize: ft(10),
  },
};

export const SIZES = {};

const appTheme = {COLORS, SIZES, FONTS};
export default appTheme;
