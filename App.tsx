import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroPage from './src/pages/intro';
import LoginPage from './src/pages/login';
import RegisterPage from './src/pages/register';
import {NativeBaseProvider} from 'native-base';
import {theme} from 'utils/css';
import OtpPage from 'pages/otps';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Intro"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Intro" component={IntroPage} />
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Register" component={RegisterPage} />
            <Stack.Screen name="Otp" component={OtpPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
}

export default App;
