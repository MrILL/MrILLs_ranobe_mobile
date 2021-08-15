import React, { useState } from "react";
import { TouchableHighlight, FlatList, View, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";
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

const ranobesChapters = chapters.slice(4, 100);
const ranobelibChapters = chapters.slice(1, 100);
const ranobehubChapters = chapters.slice(3, 100);

const DomainPicker = ({ value, setValue }) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "ranobes.com", value: "ranobes.com" },
    { label: "ranobelib.me", value: "ranobelib.me" },
    { label: "ranobehub.com", value: "ranobehub.com" },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={{
        borderRadius: 8,
        borderWidth: 0,
        backgroundColor: "#E6CBB8",
      }}
      textStyle={{
        fontFamily: "Roboto",
        fontSize: 16,
        color: "black",
        fontWeight: "bold",
      }}
      labelProps={{
        numberOfLines: 1,
      }}
      dropDownContainerStyle={{ backgroundColor: "#E6CBB8" }}
    />
  );
};

export function RanobeIssueListScreen({ navigation, ranobeId }) {
  const layout = useWindowDimensions();

  const [domain, setDomain] = useState("ranobes.com");

  const getChapters = (ranobeId, domain) => {
    switch (domain) {
      case "ranobes.com":
        return ranobesChapters;
      case "ranobelib.me":
        return ranobelibChapters;
      case "ranobehub.com":
        return ranobehubChapters;
    }
  };
  const chaptersList = getChapters(ranobeId, domain);

  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          right: 0,
        }}
      >
        <View
          style={{
            width: layout.width * 0.55,
            marginVertical: 4,
            marginRight: 8,
          }}
        >
          <DomainPicker value={domain} setValue={setDomain} />
        </View>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View
            style={{
              height: 59,
              borderBottomColor: "white",
              borderBottomWidth: 1,
            }}
          />
        )}
        data={chaptersList}
        renderItem={({ item: { nomer, title, publishData } }) => (
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#E6C8B8"
            onPress={() => navigation.navigate("Chapter", { ranobeId, domain })}
          >
            <View style={styles.line_container}>
              <View style={styles.title_container}>
                <MyText numberOfLines={2}>{title}</MyText>
              </View>

              <View style={styles.date_container}>
                <MyText style={styles.date_text}>{publishData}</MyText>
              </View>
            </View>
          </TouchableHighlight>
        )}
        keyExtractor={({ id }) => id}
      />

      <View
        style={{
          position: "absolute",
          right: 16,
          bottom: 16,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          width: "35%",
          borderRadius: 8,
          backgroundColor: "#E6CBB8",
        }}
      >
        <View>
          <MyText
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "black",
            }}
          >
            Продолжить
          </MyText>
        </View>
      </View>
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
