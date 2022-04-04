import { StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  getNewsApi,
  getNewsDetailByUrlApi,
  getNewsApi2,
  getNewsDetailByUrlApi2,
} from "../../api/news";
import NewsList from "../../components/NewsList";

const NewsScreen = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      await loadNews();
    })();
  }, []);

  const loadNews = async () => {
    var i = 0;
    var i2 = 0;
    try {
      const response = await getNewsApi();
      const response2 = await getNewsApi2();
      const newsArray = [];

      for await (const article of response.articles) {
        const newDetail = await getNewsDetailByUrlApi();

        newsArray.push({
          title: newDetail.articles[i].title,
          author: newDetail.articles[i].author,
          content: newDetail.articles[i].content,
          journal: newDetail.articles[i].source.name,
          url: newDetail.articles[i].url,
          image: newDetail.articles[i].urlToImage,
        });
        var i = i + 1;
      }

      for await (const article of response2.articles) {
        const newDetail = await getNewsDetailByUrlApi2();

        newsArray.push({
          title: newDetail.articles[i2].title,
          author: newDetail.articles[i2].author,
          content: newDetail.articles[i2].content,
          journal: newDetail.articles[i2].source.name,
          url: newDetail.articles[i2].url,
          image: newDetail.articles[i2].urlToImage,
        });
        var i2 = i2 + 1;
      }
      setNews(newsArray);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <NewsList news={news} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default NewsScreen;
