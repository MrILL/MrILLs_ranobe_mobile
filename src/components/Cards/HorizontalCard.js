import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

export function HorizontalCard({ data }) {
  const { title, img_url } = data;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: img_url,
        }}
      />

      <View style={styles.infoContainer}>
        <Text style={styles.textTitle} numberOfLines={1}>
          {title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 230,
    elevation: 4,
    backgroundColor: "#FFF",
    borderRadius: 16,
  },

  image: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: "100%",
  },

  infoContainer: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 6,
    paddingBottom: 10,
  },

  textTitle: {
    flex: 4,
    fontFamily: "Roboto",
    fontSize: 14,
    width: "100%",
  },

  bookmarkIcon: {
    flex: 1,
    marginRight: 10,
    fontSize: 21,
    color: "#FF8833",
    alignSelf: "center",
    textAlign: "right",
  },
});
