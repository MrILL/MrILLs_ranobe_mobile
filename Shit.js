import React from "react";
import {
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Card } from "./src/components/card";

export function Shit({ data }) {
  return (
    <View style={styles.container}>
      {data.map((v) => (
        <View style={styles.itemContainer} key={v.id}>
          <Card data={v} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 6,
  },

  itemContainer: {
    width: "50%",
    height: 250,
    // height: "100%",
    padding: 6,
  },
});
