//import liraries
import React, {useState, useRef} from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import {AuthContext} from './context';
import {brColor} from './constants/consts';

import AppStackScreen from './screens/AppStackScreen';
import RootStackScreen from './screens/RootStackScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

const App = ({navigation}) => {
  const [logcheck, setLogcheck] = useState(null);
  const [Loading, setLoading] = useState(null);

  const refRegister = useRef();

  const initialLoginState = {
    isLoading: true,
    userEmail: null,
    userPassword: null,
  };

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const CustomDefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff',
      text: '#333333',
      card: '#ffffff',
      brandText: brColor,
      subText: '#686868',
    },
  };

  const CustomDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#333333',
      text: '#ffffff',
      brandText: '#ffffff',
      subText: '#ffffff',
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_Password':
        return {
          ...prevState,
          userEmail: action.email,
          userPassword: action.password,
          isLoggedin: action.isLoggedin,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userEmail: action.email,
          userPassword: action.password,
          isLoggedin: action.isLoggedin,
          isLoading: true,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userEmail: null,
          userPassword: null,
          isLoading: true,
          isLoggedin: null,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userEmail: action.email,
          userPassword: action.Password,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      toggleTheme: () => {
        setIsDarkTheme(isDarkTheme => !isDarkTheme);
      },
      signIn: async (_email, _password) => {
        let result;
        try {
          const jsonValue = await AsyncStorage.getItem('@userData');
          const userData = JSON.parse(jsonValue);
          if (userData != null) {
            result = userData.find(
              ({email, password}) => email === _email && password === _password,
            );
            if (result) {
              dispatch({
                type: 'LOGIN',
                email: result.email,
                password: result.password,
                isLoggedin: true,
              });
            }
          } else {
            console.log(`error123 `);
          }
        } catch (e) {
          //
        }
      },
      storePassword: () => {
        dispatch({
          type: 'RETRIEVE_Password',
          password: loginState.userPassword,
          email: loginState.userEmail,
          isLoggedin: loginState.isLoggedin,
        });
      },
      getState: loginState,
      signOut: async => {
        dispatch({
          type: 'LOGOUT',
          password: null,
          email: null,
          isLoggedin: false,
        });
      },
      signUp: async (email, password) => {
        setLoading(true);
        let obj = [{email: email, password: password}];
        try {
          let usersJSON = await AsyncStorage.getItem('@userData');
          console.log(`usersJSON`, JSON.parse(usersJSON));
          if (usersJSON != null) {
            let usersArray = JSON.parse(usersJSON);
            usersArray.push({
              email: email,
              password: password,
            });
            AsyncStorage.setItem('@userData', JSON.stringify(usersArray));
            dispatch({
              type: 'REGISTER',
              email: email,
              password: password,
            });
          } else {
            AsyncStorage.setItem('@userData', JSON.stringify(obj));
            dispatch({
              type: 'REGISTER',
              email: email,
              password: password,
            });
          }
        } catch (e) {
          //
        }
        setLoading(false);
      },
    }),
    [loginState],
  );

  React.useEffect(() => {
    const getPasswordFromAsync = async () => {
      let userinfo;
      userinfo = null;
      try {
        userinfo = await AsyncStorage.getItem('@userData');
        console.log(`user infos`, JSON.parse(userinfo));
      } catch (e) {
        //
      }
      dispatch({type: 'RETRIEVE_Password', password: userinfo.password});
    };
    getPasswordFromAsync();
    // configureGoogleSignIn();
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={theme}>
        {loginState.isLoggedin ? <AppStackScreen /> : <RootStackScreen />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
