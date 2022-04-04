import { Text, View, StyleSheet, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomTitleInput from "../../components/CustomTitleInput/CustomTitleInput";
import CustomDatePicker from "../../components/CustomDatePicker";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { useForm } from "react-hook-form";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignupScreen = () => {
  const { control, handleSubmit, watch } = useForm();
  const pass = watch("password");

  const navigation = useNavigation();

  const onCreateAccountPressed = async (data) => {
    const { email, password, username, date, tall, weight } = data;
    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          name: username,
          birthdate: date,
          "custom:tall": tall,
          "custom:weight": weight,
        },
      });
      Alert.alert("Falta 1 paso", "Verifique su correo electrónico");
      navigation.navigate("ConfirmEmail");
    } catch (e) {
      Alert.alert("No se puede registrar", e.message);
    }
  };
  const onLoginPressed = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.register}>
          <Text style={styles.header_title}>Registro</Text>

          <CustomTitleInput textValue="Nombres completos" />
          <CustomInput
            name="username"
            placeholder="César Flores"
            rules={{ required: "Nombres completos obligatorio" }}
            control={control}
          />

          <CustomTitleInput textValue="Correo electrónico" />
          <CustomInput
            name="email"
            placeholder="cesar.flores@upc.edu.pe"
            rules={{
              required: "Correo electrónico obligatorio",
              pattern: {
                value: EMAIL_REGEX,
                message: "Correo electrónico inválido",
              },
            }}
            control={control}
          />

          <CustomTitleInput textValue="Contraseña" />
          <CustomInput
            name="password"
            placeholder="7 caracteres min."
            rules={{
              required: "Contraseña obligatorio",
              minLength: {
                value: 7,
                message: "7 caracteres como mínimo",
              },
            }}
            control={control}
            secureTextEntry={true}
          />

          <CustomTitleInput textValue="Repite la contraseña" />
          <CustomInput
            name="password_repeat"
            placeholder="Repite la contraseña"
            rules={{
              required: "Repite la contraseña obligatorio",
              validate: (value) =>
                value === pass || "No coincide con la contraseña",
            }}
            control={control}
            secureTextEntry={true}
          />

          <CustomTitleInput textValue="Fecha de nacimiento" />
          <CustomDatePicker
            name="date"
            control={control}
            rules={{ required: "Fecha de nacimiento obligatorio" }}
          />

          <CustomTitleInput textValue="Altura (metros)" />
          <CustomInput
            name="tall"
            control={control}
            rules={{
              required: "Talla obligatorio",
              validate: (value) =>
                (value >= 1 && value <= 3) || "Talla incorrecta",
            }}
            placeholder="Entre 1 - 3"
            kbType="numeric"
          />

          <CustomTitleInput textValue="Peso (kg)" />
          <CustomInput
            name="weight"
            control={control}
            rules={{
              required: "Peso obligatorio",
              validate: (value) =>
                (value >= 1 && value <= 200) || "Peso incorrecto",
            }}
            placeholder="Entre 1 - 200"
            kbType="numeric"
          />

          <Text style={styles.text}>
            Al registrarse, confirma que acepta nuestros{" "}
            <Text style={styles.link}>Términos de uso</Text> y{" "}
            <Text style={styles.link}>Política de privacidad</Text>
          </Text>
          <CustomButton
            onPress={handleSubmit(onCreateAccountPressed)}
            text="Registrarme"
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
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
});
export default SignupScreen;
