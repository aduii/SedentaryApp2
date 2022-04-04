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
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#AED6F1",
    borderColor: "blue",
    marginVertical: 5,
  },
  image: {
    resizeMode: "stretch",
    width: "100%",
    height: 100,
  },
});

export default NewsCard;
