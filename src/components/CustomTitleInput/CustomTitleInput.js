import { View, Text, StyleSheet } from "react-native";
import React from "react";

const CustomTitleInput = ({ textValue }) => {
  return (
    <View style={styles.container}>
      <Text>{textValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    marginVertical: 5,
  },
});

export default CustomTitleInput;
