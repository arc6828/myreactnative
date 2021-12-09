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
import MyIcon from "../week3/MyIcon";
// import MyIcon from "./MyIcon";

export default function Section6() {
    return (
        <View style={{ flex: 1, marginHorizontal : 10 , padding : 10 , borderBottomWidth : 1, borderBottomColor:'#cccccc'}}>
            <Text style={{ fontSize : 20  }}>Location</Text>
            <Text style={{ color : 'gray', paddingVertical : 10 }}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
            <View style={{ flexDirection: "row" }}>
                <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 7/2 }} source={require("../../assets/week3/map.jpg")} />
            </View>

        </View>
    );
}
