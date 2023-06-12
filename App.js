import React, { useState } from "react";
import { StatusBar, useColorScheme } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./src/pages/home";
import IntroPage from "./src/pages/intro";
import LoginPage from "./src/pages/login";
import RegisterPage from "./src/pages/register";
import { NativeBaseProvider } from "native-base";
import { theme } from "utils/css";
import OtpPage from "pages/otps";
import { retrieveData } from "redux/auths/api";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();
function App() {
  const isDarkMode = useColorScheme() === "dark";
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const isLoggedIn = await retrieveData();
    setIsLoggedIn(isLoggedIn);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
        {!isLoading && (
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName={isLoggedIn ? "Home" : "Intro"}
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Home" component={HomePage} />
              <Stack.Screen name="Intro" component={IntroPage} />
              <Stack.Screen name="Login" component={LoginPage} />
              <Stack.Screen name="Register" component={RegisterPage} />
              <Stack.Screen name="Otp" component={OtpPage} />
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </Provider>
    </NativeBaseProvider>
  );
}

export default App;
