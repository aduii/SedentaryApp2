import { NavigationContainer } from "@react-navigation/native";
import Amplify from "aws-amplify";
import { SafeAreaView } from "react-native-safe-area-context";
import config from "./src/aws-exports";

import Navigation from "./src/navigation";

Amplify.configure(config);

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
