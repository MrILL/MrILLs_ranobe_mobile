import React from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { MyText } from "../components/MyText";
import { HorizontalCard } from "../components/Cards/HorizontalCard";
import { VerticalCard } from "../components/Cards/VerticalCard";

export function FeedScreen({ navigation }) {
  const data = Array.from({ length: 20 }, (_, i) => {
    if (i == 1) {
      return {
        id: 1,
        title: "inbunim-gyeol",
        img_url:
          "https://ranobelib.me/uploads/cover/sinbunim-gyeolhonhago-sipji-anh-ayo/cover/FyCRZCh9vvkC_250x350.jpg",
      };
    }

    return {
      id: i,
      title: "Приключения Кори в Соблазнении Эмо-Ботаника",
      img_url:
        "https://ranobelib.me/uploads/cover/tensei-shite-inaka-de-slowlife-wo-okuritai-novel/cover/cover_250x350.jpg",
    };
  });

  const window = useWindowDimensions();

  const cardOnPress = () => navigation.navigate("RanobeInfo");

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MyText style={styles.text_title}>Последние главы</MyText>
        <FlatList
          data={data}
          renderItem={(v) => {
            return (
              <View
                style={{
                  marginLeft: 14,
                  width: window.width * 0.8,
                  paddingTop: 6,
                  paddingBottom: 6,
                }}
              >
                <HorizontalCard data={v.item} onPress={() => cardOnPress()} />
              </View>
            );
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />

        <MyText style={styles.text_title}>Популярное</MyText>
        <View style={styles.popular_container}>
          {data.map((v) => (
            <View style={styles.popular_item_container} key={v.id}>
              <VerticalCard data={v} onPress={() => cardOnPress()} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text_title: {
    fontSize: 28,
    marginLeft: 12,
    marginTop: 16,
    marginBottom: 4,
  },

  container: {
    flex: 1,
    backgroundColor: "#FFE1CC",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },

  popular_container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 6,
  },

  popular_item_container: {
    width: "50%",
    height: 270,
    padding: 6,
    paddingTop: 0,
    paddingBottom: 12,
  },
});