import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FeedScreen } from "./src/navigation/FeedScreen";
import { RanobeInfoNavigation } from "./src/navigation/RanobeInfoNavigation";

const Stack = createNativeStackNavigator();

export default function App() {
  console.log("=================App=================");

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Feed">
          <Stack.Screen
            name="Feed"
            component={FeedScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RanobeInfo"
            component={RanobeInfoNavigation}
            options={({ route }) => ({ title: route.params.title })}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar hidden />
    </>
  );
}
