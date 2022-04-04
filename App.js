import { NavigationContainer } from "@react-navigation/native";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";

import LoginNavigation from "./src/navigation/LoginNavigation";

Amplify.configure(config);

export default function App() {
  return (
    <NavigationContainer>
      <LoginNavigation />
    </NavigationContainer>
  );
}
