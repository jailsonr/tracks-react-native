import { NavigationActions } from "react-navigation";

let navigator;

export const setNavigator = nav => {
  navigator = nav;
};

// routeName = the screen declared on App.js
// params = values we want to pass on
export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};
