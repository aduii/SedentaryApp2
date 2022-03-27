import { Text, View, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomTitleInput from "../../components/CustomTitleInput/CustomTitleInput";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");

  const onSendPressed = () => {
    console.warn("On Send Pressed");
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.register}>
          <Text style={styles.header_title}>Recuperar contraseña</Text>
          <CustomTitleInput textValue="Correo electrónico" />
          <CustomInput
            value={email}
            setValue={setEmail}
            placeholder="Ingrese su correo electrónico"
          />

          <CustomButton onPress={onSendPressed} text="Enviar" type="primary" />
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

export default ForgotPasswordScreen;
