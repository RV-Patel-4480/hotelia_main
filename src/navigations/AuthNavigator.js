import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ScreenWidth, ScreenHeight } from "_styles/dimension";

import OnBoarding1 from "_screens/OnBoarding1";
import OnBoarding2 from "_screens/OnBoarding2";
import OnBoarding3 from "_screens/OnBoarding3";
import OnBoarding from "_screens/OnBoarding";
import Login from "_screens/Login";
import Register from "_screens/Register";
import OTP from "_screens/OTP";
import PasswordChanged from "_screens/PasswordChanged";
import CompleteYourProfile from "_screens/CompleteYourProfile";

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ header: null, headerShown: false }}
      initialRouteName="OnBoarding"
    >
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
      <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
      <Stack.Screen name="OnBoarding3" component={OnBoarding3} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="PasswordChanged" component={PasswordChanged} />
      <Stack.Screen
        name="CompleteYourProfile"
        component={CompleteYourProfile}
      />
    </Stack.Navigator>
  );
}
export default AuthNavigator;
