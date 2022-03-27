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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();
  const onLoginPressed = () => {
    console.warn("Login");
  };
  const onForgotPasswordPressed = () => {
    console.warn("Forgot your password");
  };
  const onRegisterPressed = () => {
    console.warn("On Register");
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <Image
          source={Logo}
          style={[styles.header_logo, { height: height * 0.3 }]}
        />
        <Text style={styles.header_title}>Sedentary App</Text>
      </View>
      <View style={styles.login}>
        <CustomInput
          value={email}
          setValue={setEmail}
          placeholder="Correo electrónico"
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
        <CustomButton
          onPress={onRegisterPressed}
          text="Registrarme Ahora"
          type="secondary"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#D6EAF8",
    paddingLeft: 10,
    paddingRight: 10,
  },
  header: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  login: {
    flex: 1.5,
    alignItems: "center",
    justifyContent: "flex-start",
    alignContent: "flex-end",
    paddingTop: 10,
  },
  header_title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#051C60",
  },
  header_logo: {
    width: "70%",
    maxWidth: 200,
    maxHeight: 200,

    marginVertical: 10,
  },
});

export default LoginScreen;
