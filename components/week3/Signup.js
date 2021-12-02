import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";

export default function Signup() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        padding : 10
      }}
    >
      <TextInput placeholder="Input ID" />
      <TextInput placeholder="Input Email" />
      <TextInput placeholder="Input Address" />
      <Button title="Sign UP" color="red" />
    </View>
  );
}
