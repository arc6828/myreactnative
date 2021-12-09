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

export default function Section7() {
    return (
        <View style={{ flex: 1, padding: 10, marginHorizontal : 10 }}>
            <Text style={{ fontSize : 20 }}>Room Type</Text>
            <View style={{ flexDirection: "row", padding: 10 }}>
                <Image
                    style={{ width: 100, height: 100, borderRadius: 30 / 2 }}
                    source={require("../../assets/week3/room-8.jpg")}
                />
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>Standard Twin Room</Text>
                    <Text style={{ fontSize: 20, color:'red', marginTop : 15 , marginBottom : 5 }}>$399.99</Text>
                    <Text style={{ color: "blue" }}>Hurry Up! This is your last room!</Text>
                </View>
            </View>
        </View>
    );
}
