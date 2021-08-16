import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export function ChapterScreen({ route }) {
  const { ranobeId, domain } = route.params;

  const getChapter = (ranobeId, domain) => {
    return require("../../assets/chapter.json");
  };

  const chapter = getChapter(ranobeId, domain);

  return (
    <View style={styles.container}>
      <WebView source={{ html: chapter.body }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
