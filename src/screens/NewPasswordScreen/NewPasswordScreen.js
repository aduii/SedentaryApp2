import { Text, View, StyleSheet, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomTitleInput from "../../components/CustomTitleInput/CustomTitleInput";
import { Auth } from "aws-amplify";

const NewPasswordScreen = ({ navigation }) => {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSendPressed = async () => {
    try {
      await Auth.forgotPasswordSubmit(email, code, password);
      Alert.alert("Enhorabuena", "Contraseña cambiada");
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Este correo no está registrado o el codigo es inválido");
    }
  };
  const onLoginPressed = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.register}>
          <Text style={styles.header_title}>Resetear contraseña</Text>

          <CustomTitleInput textValue="Correo electrónico" />
          <CustomInput
            value={email}
            setValue={setEmail}
            placeholder="Ingrese su correo electrónico"
          />

          <CustomTitleInput textValue="Código" />
          <CustomInput
            value={code}
            setValue={setCode}
            placeholder="Ingrese el código enviado al correo electrónico"
          />

          <CustomTitleInput textValue="Contraseña nueva" />
          <CustomInput
            value={password}
            setValue={setPassword}
            placeholder="Ingrese su nueva contraseña"
          />

          <CustomButton
            onPress={onSendPressed}
            text="Confirmar"
            type="primary"
          />
          <CustomButton
            onPress={onLoginPressed}
            text="Volver a Login"
            type="secondary"
          />
        </View>
      </ScrollView>
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
  register: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    alignContent: "flex-end",
    paddingTop: 10,
  },
  header_title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
});

export default NewPasswordScreen;
