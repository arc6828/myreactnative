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
// import MyIcon from "./MyIcon";

export default function Section4() {
    return (
        <View style={{ flex: 1, padding : 20, marginHorizontal : 10 }}>
            <Text style={{ fontSize : 20 }}>Hotel Description</Text>
            <Text style={{ color : 'gray' }}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
        </View>
    );
}
