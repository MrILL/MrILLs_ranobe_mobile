import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { MyText } from "../components/MyText";
import { DomainIco } from "../components/DomainIco";

//TODO use api
const getData = (ranobeId) => {
  return {
    img_url:
      "https://ranobelib.me/uploads/cover/sinbunim-gyeolhonhago-sipji-anh-ayo/cover/FyCRZCh9vvkC_250x350.jpg",
    country: "Китай",
    publish_year: "2019",
    translate_status: "В процессе",
    genre: ["Фентези", "Приключение", "Комедия"],
    author: ["Rinoz", "Swooshie"],
    total_issues: [
      {
        domain: "ranobes.com",
        issues: 504,
      },
      {
        domain: "ranobelib.me",
        issues: 501,
      },
      {
        domain: "ranobehub.org",
        issues: 502,
      },
    ],
    description:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. ",
  };
};

const BoldText = (params) => {
  return (
    <MyText style={{ ...params.style, fontWeight: "bold" }}>
      {params.children}
    </MyText>
  );
};

export function RanobeInfoScreen({ ranobeId }) {
  const ranobeData = getData(ranobeId);

  const imageWidth = useWindowDimensions().width;
  console.log(imageWidth);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View>
        <Image
          style={[styles.image, { height: imageWidth }]}
          source={{
            uri: ranobeData.img_url,
          }}
        />

        {[
          ["Страна:", ranobeData.country],
          ["Год выпуска:", ranobeData.publish_year],
          ["Статус перевода:", ranobeData.translate_status],
          ["Жанр:", ranobeData.genre.reduce((acc, v) => acc + ", " + v)],
          ["Автор:", ranobeData.author],
        ].map((pair) => (
          <View style={styles.line_container} key={pair[0]}>
            <BoldText style={styles.text}>{pair[0]}</BoldText>
            <MyText style={{ ...styles.text, marginLeft: 4 }}>{pair[1]}</MyText>
          </View>
        ))}

        <View style={[styles.line_container, { marginTop: 2 }]}>
          <BoldText style={styles.text}>Главы:</BoldText>
          <View style={styles.domains_container}>
            {ranobeData.total_issues.map(({ domain, issues }) => {
              return (
                <View style={styles.domains_item} key={domain}>
                  <DomainIco domain={domain} style={styles.ico} />
                  <MyText style={styles.text}>{issues}</MyText>
                </View>
              );
            })}
          </View>
        </View>

        <BoldText style={styles.text}>Описание:</BoldText>
        <MyText style={styles.text}>{ranobeData.description}</MyText>

        {/* For some spaces in the bot, because paddingBottom in scrollview seems not work  */}
        <View style={{ height: 8 }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE1CC",
    paddingHorizontal: 8,
  },

  image: {
    marginVertical: 4,
  },

  domains_container: {
    marginLeft: 4,
    paddingRight: 4,
    flexDirection: "row",
    backgroundColor: "#E6CBB8",
    borderRadius: 4,
  },

  domains_item: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 4,
  },

  line_container: {
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    fontSize: 16,
  },

  ico: {
    margin: 4,
    height: 20,
    width: 20,
  },
});
