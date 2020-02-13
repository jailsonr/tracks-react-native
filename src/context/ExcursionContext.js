import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";

const excusionReducer = (state, action) => {
  switch (action.type) {
    case "see_excursion_detail":
      return null;
    case "get_all_excursions":
      return null;
    default:
      return null;
  }
};

export const { Provider, Context } = createDataContext(authReducer, {
  getAllExcursions
});
