import { StyleSheet, Text, FlatList } from "react-native";
import React from "react";
import NewsCard from "../NewsCard";

const NewsList = (props) => {
  const { news } = props;
  var cnews = 0;
  return (
    <FlatList
      data={news}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      keyExtractor={() => {
        cnews += 1;
        return String(cnews);
      }}
      renderItem={({ item }) => <NewsCard newItem={item} />}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});

export default NewsList;
