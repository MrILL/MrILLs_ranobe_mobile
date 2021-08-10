import React from "react";
import { View, StyleSheet } from "react-native";
import { MyText } from "../components/MyText";

export function RanobeIssueListScreen({ ranobeId }) {
  return (
    <View style={styles.container}>
      <MyText>suckama!</MyText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE1CC",
  },
});
