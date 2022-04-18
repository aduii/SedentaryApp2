import { View, Text, StyleSheet } from "react-native";
import React from "react";

const AnswersCard = ({ item }) => {
  return (
    <View>
      <Text style={styles.answer}>{item.Text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  answer: {
    textAlign: "justify",
    fontSize: 16,
  },
  checkbox: {
    alignSelf: "center",
  },
});

export default AnswersCard;
