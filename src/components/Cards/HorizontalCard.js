import React from "react";
import { StyleSheet } from "react-native";
import { BaseCard } from "./BaseCard";

export function HorizontalCard(props) {
  const newStyles = {
    ...styles,
    container: { ...styles.container, ...props.style },
  };

  return <BaseCard {...props} styles={newStyles} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 230,
    elevation: 4,
    borderRadius: 16,
  },

  infoContainer: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 6,
    paddingBottom: 10,
  },

  textTitleNumberOfLines: 1,
});
