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

export default function Section3() {
    return (
        <View style={{ flex: 1, marginHorizontal : 10 , marginTop : 10, borderBottomWidth : 1, borderBottomColor:'#cccccc' }}>
            <View style={{ flexDirection: "row", padding: 10 }}>
                {/* <Image
                    style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
                    source={require("../../assets/week3/profile-2.jpg")}
                /> */}
                <View style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: "white" }}>9.5</Text>
                </View>

                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20, color : 'red' }}>Excellent</Text>
                    <Text style={{ color: "gray" }}>See 801 reviews</Text>
                </View>
            </View>
        </View>
    );
}
