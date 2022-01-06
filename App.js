import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import BottomTab from "./navigations/BottomTab";
import HomeStack from './navigations/HomeStack';
import RootStack from "./navigations/RootStack";

export default function App() {
  return (
    <NavigationContainer>
      {/* <HomeStack /> */}
      {/* <BottomTab /> */}
      <RootStack />
    </NavigationContainer>
  );
}
