import { Text, View, StyleSheet, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomTitleInput from "../../components/CustomTitleInput/CustomTitleInput";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

const ConfirmEmailScreen = () => {
  const route = useRoute();

  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  const onConfirmPressed = async (data) => {
    try {
      await Auth.confirmSignUp(data.email, data.code);
      Alert.alert("Enhorabuena", "Se registró con éxito su correo");
      navigation.navigate("Login");
    } catch (e) {
      Alert.alert("Código inválido", e.message);
    }
  };
  const onLoginPressed = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.register}>
          <Text style={styles.header_title}>Confirma tu correo</Text>

          <CustomTitleInput textValue="Correo electrónico" />
          <CustomInput
            name="email"
            control={control}
            placeholder="Ingrese su correo electrónico"
          />

          <CustomTitleInput textValue="Código" />
          <CustomInput
            name="code"
            control={control}
            placeholder="Ingrese su código de confirmación"
          />

          <CustomButton
            onPress={handleSubmit(onConfirmPressed)}
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

export default ConfirmEmailScreen;
