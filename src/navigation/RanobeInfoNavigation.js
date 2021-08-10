import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { TabBarItem } from "../components/Tabs";
import { TabBar, TabView } from "react-native-tab-view";
import { RanobeInfoScreen } from "./RanobeInfoScreen";
import { RanobeIssueListScreen } from "./RanobeIssueListScreen";

export function RanobeInfoNavigation({ route }) {
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
            return <RanobeInfoScreen ranobeId={ranobeId} />;
          case "issues":
            return <RanobeIssueListScreen ranobeId={ranobeId} />;
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
          style={{
            backgroundColor: "grey",
            elevation: 0,
          }}
          renderTabBarItem={(props) => <TabBarItem {...props} />}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});
