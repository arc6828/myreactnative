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
        alignItems: "stretch",
        padding: 10,
      }}
    >
      <TextInput style={{ fontSize : 20 , marginTop : 10 }} placeholder="Input ID" />
      <TextInput style={{ fontSize : 20 , marginTop : 10 }}  placeholder="Input Email" />
      <TextInput style={{ fontSize : 20 , marginTop : 10 , marginBottom : 10 }}  placeholder="Input Address" />
      <Button title="Sign UP" color="red" />
    </View>
  );
}
