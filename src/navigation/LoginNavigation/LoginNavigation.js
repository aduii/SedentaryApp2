import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../../screens/LoginScreen";
import SignupScreen from "../../screens/SignupScreen";
import ConfirmEmailScreen from "../../screens/ConfirmEmailScreen";
import ForgotPasswordScreen from "../../screens/ForgotPasswordScreen";
import NewPasswordScreen from "../../screens/NewPasswordScreen";
import HomeNavigation from "../HomeNavigation/HomeNavigation";

const Stack = createNativeStackNavigator();

const LoginNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
      <Stack.Screen name="Home" component={HomeNavigation} />
    </Stack.Navigator>
  );
};

export default LoginNavigation;
