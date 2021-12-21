import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {    
    const [count, setCount] = useState("0");

    const onPressButton = ()=>{
        console.log("PRESSED!");
        let newCount = Number(count) + 1;
        // let newCount = parseInt(count) + 1;

        setCount(newCount);

    };

    return (
        <View>
            <View style={{ flexDirection : "row", justifyContent : "space-around", padding : 20 }}>
                <TouchableOpacity onPress={ onPressButton }>
                    <FontAwesome name="heart" size={40} color="orange" />
                </TouchableOpacity>
                <Text style={{ fontSize : 30 }}>{ count }</Text>
            </View>
        </View>
    );
}
