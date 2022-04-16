import { FlatList } from "react-native";
import AnswersCard from "../AnswersCard";
import React from "react";

const AnswersList = ({ answers }) => {
  return (
    <FlatList
      data={answers}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => String(item.Id)}
      renderItem={({ item }) => <AnswersCard item={item} />}
    />
  );
};

export default AnswersList;
