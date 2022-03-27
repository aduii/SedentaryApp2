import { Text, View, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomTitleInput from "../../components/CustomTitleInput/CustomTitleInput";

const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onSendPressed = () => {
    console.warn("On Send Pressed");
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.register}>
          <Text style={styles.header_title}>Resetear contraseña</Text>

          <CustomTitleInput textValue="Código" />
          <CustomInput
            value={code}
            setValue={setCode}
            placeholder="Ingrese el código enviado al correo electrónico"
          />

          <CustomTitleInput textValue="Contraseña nueva" />
          <CustomInput
            value={newPassword}
            setValue={setNewPassword}
            placeholder="Ingrese su nueva contraseña"
          />

          <CustomButton
            onPress={onSendPressed}
            text="Confirmar"
            type="primary"
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
