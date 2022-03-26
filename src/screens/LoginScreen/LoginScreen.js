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
import CustomButton from "../../components/CustomButton/CustomButton";

const LoginScreen = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();
  const onLoginPressed = () => {
    console.warn("Login");
  };
  const onForgotPasswordPressed = () => {
    console.warn("Forgot your password");
  };

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
      <CustomButton onPress={onLoginPressed} text="Ingresar" type="primary" />
      <CustomButton
        onPress={onForgotPasswordPressed}
        text="¿Olvidaste tu contraseña?"
        type="secondary"
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

    marginVertical: 10,
  },
});

export default LoginScreen;
