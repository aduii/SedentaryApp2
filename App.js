import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";

export default function App() {
  return (
    <NavigationContainer>
      {/* <LoginScreen /> */}
      <SignupScreen />
    </NavigationContainer>
  );
}
