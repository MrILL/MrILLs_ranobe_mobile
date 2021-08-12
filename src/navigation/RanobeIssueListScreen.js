import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { MyText } from "../components/MyText";

const chapters = Array.from({ length: 20 }, (_, i) => {
  return {
    id: i,
    nomer: i,
    title: `${28 - Math.floor(i / 10)} - ${
      187 - i
    } Юпитер / Jupiter, the Bringer of Jollity`,
    publishData:
      i < 2
        ? "Сегодня"
        : i < 7
        ? "Вчера"
        : i < 13
        ? "3 дня назад"
        : "21.04.2021",
  };
});

export function RanobeIssueListScreen({ ranobeId }) {
  return (
    <View style={[styles.container, { paddingTop: 2 }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        style={styles.container}
      >
        {chapters.map((v) => {
          return (
            <View style={styles.line_container} key={v.id}>
              <View style={styles.title_container}>
                <MyText numberOfLines={2}>{v.title}</MyText>
              </View>

              <View style={styles.date_container}>
                <MyText style={styles.date_text}>{v.publishData}</MyText>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE1CC",
  },

  line_container: {
    flex: 1,
    flexDirection: "row",
    padding: 12,
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },

  title_container: {
    flex: 6,
  },

  date_container: {
    flex: 2,
    marginLeft: 8,
    justifyContent: "center",
  },

  date_text: {
    textAlign: "center",
  },
});
