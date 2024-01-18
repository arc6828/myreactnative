import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AuthContextProvider } from "./hooks/AuthContextProvider";
import RootStack from "./navigations/RootStack";

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </AuthContextProvider>
  );
}
