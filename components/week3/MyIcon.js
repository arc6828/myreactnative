import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
{/* <MyIcon title='หัวใจ' name='heart' size={30} color='orange'  /> */}
export default function MyIcon(props) {
  return (
    <View style={{ flex: 1 , alignItems : "center"  }}>
      <FontAwesome name={ props.name } size={ props.size } color={ props.color } />
      <Text>{ props.title }</Text>
    </View>
  );
}
