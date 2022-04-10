import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  Linking,
} from "react-native";
import React from "react";

const NewsCard = (props) => {
  const { newItem } = props;

  const goToNew = () => {
    Linking.openURL(newItem.url);
  };

  return (
    <TouchableWithoutFeedback onPress={goToNew}>
      <View style={styles.card}>
        {newItem.image && (
          <Image source={{ uri: newItem.image }} style={styles.image} />
        )}
        <Text style={{ fontWeight: "bold", textAlign: "justify" }}>
          {newItem.title}
        </Text>
        {(newItem.author && <Text>Autor: {newItem.author}</Text>) || (
          <Text>Autor: Anónimo</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
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
  image: {
    resizeMode: "stretch",
    width: "100%",
    height: 100,
  },
});

export default NewsCard;
