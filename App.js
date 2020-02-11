import React from "react";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/Create";
import ExcursionDetailScreen from "./src/screens/ExcursionDetailScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";

const switchNavigator = createStackNavigator({
  loginFlow: createStackNavigator(
    {
      Signup: { screen: SignupScreen },
      Signin: { screen: SigninScreen },
      Home: { screen: HomeScreen }
    },
    {
      navigationOptions: {
        headerShown: false
      },
      initialRouteName: "Home"
    }
  ),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator(
      {
        Home: { screen: HomeScreen },
        ExcursionDetail: { screen: ExcursionDetailScreen }
      },
      {
        headerShown: false
      }
    ),
    TrackCreate: { screen: TrackCreateScreen },
    Account: { screen: AccountScreen }
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App
        ref={navigator => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
