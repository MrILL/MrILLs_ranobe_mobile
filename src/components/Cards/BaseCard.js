import React from "react";
import {
  Text,
  Image,
  View,
  TouchableHighlight,
  StyleSheet,
} from "react-native";

export function BaseCard({ data, onPress, styles }) {
  const { title, img_url } = data;

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      style={[defaultStyles.container, styles.container]}
      underlayColor="#E6C8B8"
      onPress={onPress}
    >
      <View style={[defaultStyles.container, styles.container]}>
        <Image
          style={[defaultStyles.image, styles.image]}
          source={{
            uri: img_url,
          }}
        />

        <View style={[defaultStyles.infoContainer, styles.infoContainer]}>
          <Text
            style={[defaultStyles.textTitle, styles.textTitle]}
            numberOfLines={
              styles.textTitleNumberOfLines ||
              defaultStyles.textTitleNumberOfLines
            }
          >
            {title}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: 230,
    elevation: 4,
    backgroundColor: "#FFF",
    borderRadius: 16,
  },

  image: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: "100%",
  },

  infoContainer: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 6,
    paddingBottom: 10,
  },

  textTitle: {
    flex: 4,
    fontFamily: "Roboto",
    fontSize: 14,
    width: "100%",
  },

  textTitleNumberOfLines: 1,

  // bookmarkIcon: {
  //   flex: 1,
  //   marginRight: 10,
  //   fontSize: 21,
  //   color: "#FF8833",
  //   alignSelf: "center",
  //   textAlign: "right",
  // },
});
