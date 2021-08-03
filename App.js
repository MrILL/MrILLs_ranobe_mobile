import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
// import { card } from "";
import { Shit } from "./Shit";
import { Card } from "./src/components/card";

export default function App() {
  console.log("=================App=================");

  const data = Array.from({ length: 50 }, (_, i) => {
    return {
      id: i,
      title: "Tensei shite inaka de slowlife wo okuritai",
      img_url:
        "https://ranobelib.me/uploads/cover/tensei-shite-inaka-de-slowlife-wo-okuritai-novel/cover/cover_250x350.jpg",
    };
  });

  const popularList = (
    <View style={styles.container}>
      {data.map((v) => (
        <View style={styles.itemContainer} key={v.id}>
          <Card data={v} />
        </View>
      ))}
    </View>
  );

  const a = (
    <View style={styles.content_container}>
      <FlatList
        data={data}
        renderItem={(v) => <Card data={v.item} />}
        horizontal={true}
      />

      <Text style={(styles.text, { fontSize: 21 })}>Популярное</Text>
      {popularList}

      <StatusBar style="auto" />
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Shit data={data} />
        {/* {a} */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
  },

  text_title: {
    fontSize: 18,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  content_container: {
    padding: 16,
  },
});
