//import liraries
import React, {useState} from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthContext} from './context';
import RootScreen from './screens/RootScreen';
import AppIntroScreen from './screens/AppIntroScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import {brColor} from './constants/consts';
import HomeScreen from './screens/HomeScreen';
import VerifyScreen from './screens/VerifyScreen';
import CategoryScreen from './screens/ChooseCategory';
import ChooseFoodScreen from './screens/ChooseFood';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const CustomDefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff',
      text: '#333333',
      card: '#ffffff',
      brandText: brColor,
    },
  };

  const CustomDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#333333',
      text: '#ffffff',
      brandText: '#ffffff',
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const authContext = React.useMemo(
    () => ({
      toggleTheme: () => {
        setIsDarkTheme(isDarkTheme => !isDarkTheme);
      },
    }),

    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Root">
          <Stack.Screen name="Root" component={RootScreen} />
          <Stack.Screen name="AppIntro" component={AppIntroScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Verify" component={VerifyScreen} />
          <Stack.Screen name="Category" component={CategoryScreen} />
          <Stack.Screen name="Food" component={ChooseFoodScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
