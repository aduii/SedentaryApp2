import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getNewsApi, getNewsDetailByUrlApi } from "../../api/news";

const NewsScreen = () => {
  const [news, setNews] = useState([]);
  console.log("News---->", news);

  useEffect(() => {
    (async () => {
      await loadNews();
    })();
  }, []);

  const loadNews = async () => {
    try {
      const response = await getNewsApi();
      const newsArray = [];

      for await (const article of response.articles) {
        console.log(article);
      }

      setNews(newsArray);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <Text>NewsScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NewsScreen;
