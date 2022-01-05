import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, Image, Text, View } from "react-native";

export default function TourItem(props) {
    return (
        <View style={{ marginRight: 10 }} >
            <Image style={{ width: Dimensions.get("screen").width / 2.5, height: 150, borderRadius: 10 }} source={{ uri: props.item.uri }} />
            <View style={{ marginTop: -30, height: 30, width: Dimensions.get("screen").width / 2.5, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} >
                <Text style={{ fontSize: 20, color: 'white' }}>{props.item.title}</Text>
            </View>
        </View>
    );
}
