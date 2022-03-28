import { Text, View, StyleSheet, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomTitleInput from "../../components/CustomTitleInput/CustomTitleInput";
import { Auth } from "aws-amplify";

const ConfirmEmailScreen = ({ navigation }) => {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");

  const onConfirmPressed = async () => {
    try {
      const response = await Auth.confirmSignUp(email, code);
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

          <CustomTitleInput textValue="Email" />
          <CustomInput
            value={email}
            setValue={setEmail}
            placeholder="Ingrese su correo electrónico"
          />

          <CustomTitleInput textValue="Código" />
          <CustomInput
            value={code}
            setValue={setCode}
            placeholder="Ingrese su código de confirmación"
          />

          <CustomButton
            onPress={onConfirmPressed}
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
