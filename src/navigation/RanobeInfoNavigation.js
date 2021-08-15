import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { TabBarItem } from "../components/Tabs";
import { TabBar, TabView } from "react-native-tab-view";
import { RanobeInfoScreen } from "./RanobeInfoScreen";
import { RanobeIssueListScreen } from "./RanobeIssueListScreen";

export function RanobeInfoNavigation({ route, navigation }) {
  const { ranobeId } = route.params;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "info", title: "Информация" },
    { key: "issues", title: "Главы" },
  ]);

  const layout = useWindowDimensions();

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={({ route }) => {
        switch (route.key) {
          case "info":
            return (
              <RanobeInfoScreen navigation={navigation} ranobeId={ranobeId} />
            );
          case "issues":
            return (
              <RanobeIssueListScreen
                navigation={navigation}
                ranobeId={ranobeId}
              />
            );
          default:
            return null;
        }
      }}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          indicatorStyle={{ opacity: 0 }}
          activeColor="black"
          inactiveColor="white"
          labelStyle={styles.tab_label}
          style={styles.tab_container}
          renderTabBarItem={(props) => <TabBarItem {...props} />}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  tab_container: {
    paddingBottom: 4,
    backgroundColor: "#FFE1CC",
    elevation: 0,
  },

  tab_label: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "none",
  },
});
