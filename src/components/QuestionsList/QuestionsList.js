import { FlatList, StyleSheet } from "react-native";
import React from "react";
import QuestionsCard from "../QuestionsCard";

const QuestionsList = ({ questions }) => {
  return (
    <FlatList
      data={questions}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => String(item.Id)}
      renderItem={({ item }) => <QuestionsCard item={item} />}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});

export default QuestionsList;
