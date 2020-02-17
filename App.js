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
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import MapScreen from "./src/screens/MapScreen";
import { Icon } from "expo";

const switchNavigator = createStackNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator(
    {
      Signup: { screen: SignupScreen },
      Signin: { screen: SigninScreen }
    },
    {
      navigationOptions: {
        headerShown: false
      }
    }
  ),
  mainFlow: createBottomTabNavigator(
    {
      Home: createStackNavigator(
        {
          Home: { screen: HomeScreen },
          ExcursionDetail: { screen: ExcursionDetailScreen }
        },
        {
          navigationOptions: ({ navigation }) => {
            const routeName =
              navigation.state.routes[navigation.state.index].routeName;
            // console.log(routeName);

            let tabBarVisible = routeName == "ExcursionDetail" ? false : true;

            return {
              headerShown: false,
              tabBarVisible
            };
          }
        }
      ),
      Map: { screen: MapScreen },
      Excursions: { screen: TrackCreateScreen },
      Account: { screen: AccountScreen }
    },
    {
      navigationOptions: {
        headerShown: false
      }
    }
  )
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
