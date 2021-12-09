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

export default function Section5() {
    return (
        <View style={{ flex: 1, marginHorizontal : 10, padding: 10 , borderBottomWidth : 1, borderBottomColor:'#cccccc' , borderTopWidth : 1, borderTopColor:'#cccccc' }}>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
                <MyIcon title="wifi" name="wifi" size={30} color="orange" />
                <MyIcon title="coffee" name="coffee" size={30} color="orange" />
                <MyIcon title="bath" name="bath" size={30} color="orange" />
                <MyIcon title="car" name="car" size={30} color="orange" />
                <MyIcon title="paw" name="paw" size={30} color="orange" />
            </View>
        </View>
    );
}
