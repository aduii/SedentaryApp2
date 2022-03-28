import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import Navigation from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      {/* <LoginScreen /> */}
      {/* <SignupScreen /> */}
      {/* <ConfirmEmailScreen /> */}
      {/* <ForgotPasswordScreen /> */}
      <Navigation />
    </NavigationContainer>
  );
}
