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
  // console.log("Card ctx | data: ", data);
  console.log(data);
  const { title, img_url } = data;

  // console.log(getTextWidth());

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
    // height: 280, //TODO

    backgroundColor: "#E5E5E5",
    borderRadius: 16,
  },

  image: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: "100%",
    // height: "80%",
  },

  textTitle: {
    flex: 1,
    fontFamily: "Roboto",
    fontSize: 16,
  },
});
