import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { MyText } from "../components/MyText";

const chapters = Array.from({ length: 100 }, (_, i) => {
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
        : i < 39
        ? "21.04.2021"
        : i < 67
        ? "03.01.2021"
        : "12.11.2020",
  };
});

export function RanobeIssueListScreen({ ranobeId }) {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={chapters}
        renderItem={({ item: { nomer, title, publishData } }) => (
          <View style={styles.line_container}>
            <View style={styles.title_container}>
              <MyText numberOfLines={2}>{title}</MyText>
            </View>

            <View style={styles.date_container}>
              <MyText style={styles.date_text}>{publishData}</MyText>
            </View>
          </View>
        )}
        keyExtractor={({ id }) => id}
      />
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
