import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "../../components/week3/Card";
import Hotel from "../../components/week3/Hotel";
import Menu from "../../components/week3/Menu";
import MyIcon from "../../components/week3/MyIcon";
import Signup from "../../components/week3/Signup";

export default function Resort() {
  return (
    <ScrollView>
      <View style={{ flex: 1, paddingTop: 50 }}>
        <Text>Quiz of Week 4</Text>
      </View>
    </ScrollView>
  );
}
