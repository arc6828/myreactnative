import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "../../components/week3/Card";
import Hotel from "../../components/week3/Hotel";
import Menu from "../../components/week3/Menu";
import MyIcon from "../../components/week3/MyIcon";
import Signup from "../../components/week3/Signup";
import Section1 from "../../components/week4/Section1";
import Section2 from "../../components/week4/Section2";
import Section3 from "../../components/week4/Section3";
import Section4 from "../../components/week4/Section4";
import Section5 from "../../components/week4/Section5";
import Section6 from "../../components/week4/Section6";
import Section7 from "../../components/week4/Section7";
import Section8 from "../../components/week4/Section8";

export default function Resort() {
  return (
    <ScrollView>
      <View style={{ flex: 1, paddingTop: 50 }}>
        {/* <Text>Quiz of Week 4</Text> */}
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </View>
    </ScrollView>
  );
}
