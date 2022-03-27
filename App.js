import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ConfirmEmailScreen from "./src/screens/ConfirmEmailScreen/ConfirmEmailScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import NewsPasswordScreen from "./src/screens/NewPasswordScreen/";

export default function App() {
  return (
    <NavigationContainer>
      {/* <LoginScreen /> */}
      {/* <SignupScreen /> */}
      {/* <ConfirmEmailScreen /> */}
      {/* <ForgotPasswordScreen /> */}
      <NewsPasswordScreen />
    </NavigationContainer>
  );
}
