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

export default function Section8() {
    return (
        <View style={{ flex: 1, padding: 10, flexDirection : "row", justifyContent : "space-between", borderTopWidth : 1, borderTopColor:'#cccccc' }}>
            <View>
                <Text>Price</Text>
                <Text style={{ fontSize : 20, color : 'red' }}>$399.99</Text>
                <Text>AVG/Night</Text>
            </View>
            <View style={{ paddingVertical : 20 }}>
                <Button title="Book Now" color="red" />
            </View>
        </View>
    );
}
