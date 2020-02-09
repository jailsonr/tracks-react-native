import React from "react";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
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
      Signin: { screen: SigninScreen }
    },
    {
      headerShown: false
    }
  ),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: { screen: TrackListScreen },
      TrackDetail: { screen: TrackDetailScreen }
    }),
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
