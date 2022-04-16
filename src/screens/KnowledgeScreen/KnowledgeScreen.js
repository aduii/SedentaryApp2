import { StyleSheet, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getQuestions } from "../../api/questions";
import QuestionsList from "../../components/QuestionsList";
import CustomButton from "../../components/CustomButton";

const KnowledgeScreen = () => {
  const [questions, setQuestions] = useState([]);

  const loadQuestions = async () => {
    const data = await getQuestions();
    setQuestions(data);
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  const onSendAnswers = () => {
    // navigation.navigate("ForgotPassword");
    Alert.alert("Enhorabuena", "Respuestas enviadas");
  };

  return (
    <SafeAreaView style={styles.root}>
      <QuestionsList questions={questions}></QuestionsList>
      <CustomButton onPress={onSendAnswers} text="Enviar" type="primary" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 5,
  },
});

export default KnowledgeScreen;
