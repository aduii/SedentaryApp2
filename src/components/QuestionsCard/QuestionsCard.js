import { View, Text, StyleSheet } from "react-native";
import { getAnswerByQuestionId } from "../../api/answers";
import AnswersList from "../AnswersList";
import React, { useState, useEffect } from "react";

const QuestionsCard = ({ item }) => {
  const [answers, setAnswers] = useState([]);

  const loadAnswers = async () => {
    const data = await getAnswerByQuestionId(item.Id);
    setAnswers(data);
  };

  useEffect(() => {
    loadAnswers();
  }, []);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Pregunta {item.Id}</Text>
      <Text style={styles.question}>{item.Text}</Text>
      <AnswersList answers={answers} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: 100,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#AED6F1",
    marginVertical: 5,
    marginHorizontal: 5,
    //Shadow Effect
    shadowColor: "#470000",
    shadowOffset: { width: 0.5, height: 1 },
    shadowOpacity: 0.1,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#051C60",
  },
  question: {
    textAlign: "justify",
    fontSize: 16,
  },
});

export default QuestionsCard;
