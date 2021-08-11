import React from "react";
import { Text, StyleSheet } from "react-native";

export function MyText(params) {
  const { style } = params;

  return <Text {...params} style={[styles.default, style]} />;
}

const styles = StyleSheet.create({
  default: {
    fontFamily: "Roboto",
  },
});
