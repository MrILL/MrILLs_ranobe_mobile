import React from "react";
import {
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export function Card({ data }) {
  const { title, img_url } = data;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: img_url,
        }}
      />
      <Text style={styles.textTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    borderRadius: 16,
  },

  image: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: "100%",
  },

  textTitle: {
    fontFamily: "Roboto",
    fontSize: 16,
    padding: 2,
  },
});
