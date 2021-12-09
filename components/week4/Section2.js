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

export default function Section2() {
    return (
        <View style={{ flex: 1, margin: 50, marginBottom : 0 , padding: 10, borderWidth: 1, borderColor: 'gray', borderRadius: 20, alignItems : "center" , marginTop : -40, backgroundColor : 'white' }}>
            <Text style={{ fontSize : 20 }}>Hilton San Francisco</Text>
            <View style={{ flexDirection: "row" }}>
                <FontAwesome name="star" size={24} color="orange" />
                <FontAwesome name="star" size={24} color="orange" />
                <FontAwesome name="star" size={24} color="orange" />
                <FontAwesome name="star" size={24} color="orange" />
                <FontAwesome name="star-half" size={24} color="orange" />
            </View>
            <Text style={{ color : 'gray', textAlign : "center" }}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
        </View>
    );
}
