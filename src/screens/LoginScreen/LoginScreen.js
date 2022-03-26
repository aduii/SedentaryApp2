import {
  Text,
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../../assets/images/logo_1.png";
import CustomInput from "../../components/CustomInput";

const LoginScreen = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();
  return (
    <SafeAreaView style={styles.root}>
      <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} />
      <CustomInput
        value={username}
        setValue={setUserName}
        placeholder="Usuario"
      />
      <CustomInput
        value={password}
        setValue={setPassword}
        placeholder="Contraseña"
        secureTextEntry={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D6EAF8",

    paddingLeft: 10,
    paddingRight: 10,
  },
  logo: {
    width: "70%",
    maxWidth: 200,
    maxHeight: 200,
  },
});

export default LoginScreen;
