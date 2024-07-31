import React, { useReducer } from "react";
import { Platform, SafeAreaView, StatusBar, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { AuthContext } from "./AuthContext";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";

import colors from "_styles/colors";
import storageSystem from "_helpers/StorageSystem";
import SplashScreen from "_screens/SplashScreen";

const AppContainer = () => {
  // Platform.OS == "android" && StatusBar.setBackgroundColor(colors.primary)
  // StatusBar.setBarStyle('light-content', true)

  const [isLoading, setIsLoading] = React.useState(true);
  const [state, dispatch] = useReducer(authReducer, {
    isLoading: true,
    userToken: null,
    user: null,
    email: null,
    firstOpen: false,
    role: false,
  });

  const initialStateLoad = async () => {
    const user = await storageSystem.get("user");
    const userToken = await storageSystem.get("userToken");

    if (!!userToken) {
      const userJson = JSON.parse(user);
      dispatch({
        type: "INITIAL_STATE_LOAD",
        payload: {
          userToken,
          user: userJson,
          email: userJson.email,
          role: userJson.role,
          firstOpen: false,
        },
      });
    } else {
      console.log("Not Authenticated.");
      dispatch({
        type: "INITIAL_STATE_LOAD",
        payload: {
          userToken: null,
          email: null,
          user: null,
          role: null,
          firstOpen: false,
        },
      });
    }
  };

  const setState = async (data) => {
    dispatch({ type: "SET_STATE", payload: { ...data } });
  };

  const signin = async (data) => {
    const { email, userToken, user, role } = data;
    // console.log('SIGN_IN', email, userToken, user, role);
    await storageSystem.setMany([
      ["userToken", userToken || "bearer sldnogledtksptiojpi4cu9tw89yao3s5h"],
      ["email", email || "email@gmail.com"],
      ["user", JSON.stringify(user || {})],
      ["role", role || "user"],
    ]);
    dispatch({ type: "SIGN_IN", payload: { userToken, email, user, role } });
  };

  const signOut = async (data) => {
    setIsLoading(true);
    await storageSystem.clearLogin();
    return dispatch({ type: "SIGN_OUT", payload: data });
  };

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const bootstrapAsync = async () => {
      await storageSystem.getAll();
      try {
        initialStateLoad();
      } catch (e) {
        // Restoring token failed
      }
    };

    bootstrapAsync();
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [state]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
  
    <AuthContext.Provider
      value={{ state, setState, signin, signOut, setState }}
    >
    

      <NavigationContainer>
        {state?.userToken ? <SplashScreen /> : <SplashScreen />}
      </NavigationContainer>
      
    </AuthContext.Provider>
  );
};

export default AppContainer;

const authReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_STATE_LOAD":
      return {
        ...state,
        ...action.payload,
      };
    case "SET_STATE":
      return {
        ...state,
        ...action.payload,
      };
    case "SIGN_OUT":
      // console.log("in reducer signout");
      return { ...state, userToken: null, email: null, user: null, role: null };
    case "SIGN_IN":
    case "SIGN_UP":
      return {
        ...state,
        userToken: action.payload.userToken,
        user: action.payload.user,
        email: action.payload.email,
        role: action.payload.role,
      };
    default:
      return state;
  }
};
