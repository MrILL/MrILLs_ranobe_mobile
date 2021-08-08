import React from "react";
import { StyleSheet } from "react-native";
import { BaseCard } from "./BaseCard";

export function VerticalCard(props) {
  return <BaseCard {...props} styles={styles} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 4,
    backgroundColor: "#FFF",
    borderRadius: 16,
  },

  infoContainer: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 14,
  },

  textTitleNumberOfLines: 2,
});
