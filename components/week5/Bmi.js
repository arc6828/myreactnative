import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

export default function Bmi() {
    const [weight, setWeight] = useState("70");
    const [height, setHeight] = useState("170");
    const [bmi, setBmi] = useState("24.56");
    const [text, setText] = useState("Normal");

    console.log("STATE : ", weight, height, bmi);

    const onPressButton = () => {
        console.log("Button Pressed !!!");
        let output = (weight / (height / 100 * height / 100));
        setBmi(output.toFixed(2));

        //OUTPUT คือ BMI ที่ได้จากการคำนวณ
        let description = "";
        if (output < 18.5)
            description = "Underweight";
        else if (output <= 24.99)
            description = "Normal";
        else if (output <= 29.99)
            description = "Overweight";
        else if (output <= 34.9)
            description = "Obese";
        else
            description = "Extreme Obese";

        //SET STATE HERE
        setText(description);


    };

    return (
        <View>
            {/* View ก้อนที่ 1 */}
            {/* padding, backgroundColor, borderRadius, height, space-around, marginTop */}
            <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 20, height: 150, justifyContent: "space-around", marginTop: 20 }}>
                <Text style={{ fontSize: 20 }}>Weight (kg.)</Text>
                <TextInput onChangeText={(newWeight) => setWeight(newWeight)} value={weight} keyboardType="numeric" style={{ fontSize: 20 }} placeholder="Input your Weight …" />
            </View>
            {/* View ก้อนที่ 2 */}
            <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 20, height: 150, justifyContent: "space-around", marginTop: 20 }}>
                <Text style={{ fontSize: 20 }}>Height (cm.)</Text>
                <TextInput onChangeText={(newHeight) => setHeight(newHeight)} value={height} keyboardType="numeric" style={{ fontSize: 20 }} placeholder="Input your Height …" />
            </View>
            {/* View ก้อนที่ 3 */}
            <View style={{ flexDirection: "row", marginVertical: 20 }}>
                <View style={{ flex: 1, padding: 20, backgroundColor: 'white', borderRadius: 20, height: 150, justifyContent: "center", alignItems: "center", marginTop: 20, marginRight: 10 }}>
                    <Text style={{ fontSize: 30 }}>{bmi}</Text>
                </View>
                <View style={{ flex: 1, padding: 20, backgroundColor: 'white', borderRadius: 20, height: 150, justifyContent: "center", alignItems: "center", marginTop: 20, marginLeft: 10 }}>
                    <Text style={{ fontSize: 30, textAlign : "center" }}>{text}</Text>
                </View>
            </View>
            {/* button */}
            {/* <Button title="Calculate" onPress={ onPressButton }/> */}
            <TouchableOpacity onPress={onPressButton}>
                <View style={{ flexDirection: "row", justifyContent: "center", padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
                    <FontAwesome name="calculator" size={40} color="orange" />
                    <Text style={{ marginLeft: 10, fontSize: 30, textAlign: "center", color: 'white' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}

