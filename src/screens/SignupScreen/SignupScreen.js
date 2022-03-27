import {
  Text,
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomTitleInput from "../../components/CustomTitleInput/CustomTitleInput";
import CustomDatePicker from "../../components/CustomDatePicker";

const SignupScreen = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tall, setTall] = useState("");
  const [weight, setWeight] = useState("");

  const onCreateAccountPressed = () => {
    console.warn("On Create Account");
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.register}>
          <Text style={styles.header_title}>Registro</Text>
          <CustomTitleInput textValue="Nombres Completos" />
          <CustomInput
            value={username}
            setValue={setUserName}
            placeholder="César Flores"
          />
          <CustomTitleInput textValue="Correo electrónico" />
          <CustomInput
            value={email}
            setValue={setEmail}
            placeholder="cesar.flores@upc.edu.pe"
          />
          <CustomTitleInput textValue="Contraseña" />
          <CustomInput
            value={password}
            setValue={setPassword}
            placeholder="**************"
            secureTextEntry={true}
          />
          <CustomTitleInput textValue="Fecha de nacimiento" />
          <CustomDatePicker />

          <CustomTitleInput textValue="Altura (metros)" />
          <CustomInput
            value={tall}
            setValue={setTall}
            placeholder="1.70"
            kbType="numeric"
          />

          <CustomTitleInput textValue="Peso (kg)" />
          <CustomInput
            value={weight}
            setValue={setWeight}
            placeholder="60"
            kbType="numeric"
          />

          <CustomButton
            onPress={onCreateAccountPressed}
            text="Registrarme"
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

export default SignupScreen;
