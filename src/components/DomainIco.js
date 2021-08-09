import React from "react";
import { Image, StyleSheet } from "react-native";

const ranobehubIco = require("../../assets/ranobehub.org.png");
const ranobelibIco = require("../../assets/ranobelib.me.png");
const ranobesIco = require("../../assets/ranobes.com.png");
const unknownIco = require("../../assets/unknown.png");

export function DomainIco({ domain, style }) {
  const getDomainIcoSrc = (domain) => {
    switch (domain) {
      case "ranobehub.org":
        return ranobehubIco;
      case "ranobelib.me":
        return ranobelibIco;
      case "ranobes.com":
        return ranobesIco;
      default:
        return unknownIco;
    }
  };

  return (
    <Image style={[styles.container, style]} source={getDomainIcoSrc(domain)} />
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
  },
});
