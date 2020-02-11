import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

const signup = dispatch => async ({ email, password }) => {
  // make api request to sign up with that email and password
  // if we signup, modify our state, and say that we are authenticated
  // if signing uo fails, we probably need to reflect an error message
  // somewhere
  try {
    console.log(`Email: ${email} Pass: ${password}`);
    const response = await trackerApi.post("/signup", { email, password });
    console.log(response.data.token);
    //console.log(response.data);
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });

    navigate("Home");
  } catch (error) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign up"
    });
  }
};

const signin = dispatch => async ({ email, password }) => {
  // Try to signin
  // Handle success by updatinf state
  // Handle failure by showing error message (somehow)
  try {
    const response = await trackerApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
    navigate("Home");
  } catch (error) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign in"
    });
  }
};

const signinout = dispatch => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signinout, signup },
  { token: null, errorMessage: "" }
);
