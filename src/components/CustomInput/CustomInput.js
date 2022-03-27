import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry = false,
  kbType,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        keyboardType={kbType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",

    borderColor: "#AED6F1",
    borderWidth: 1,
    borderRadius: 5,

    padding: 10,
    marginVertical: 5,
  },
  input: {},
});

export default CustomInput;
