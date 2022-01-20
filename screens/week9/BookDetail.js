import React, { useLayoutEffect } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BookDetail() {
    const route = useRoute();
    const { item } = route.params;
    //DELETE POPUP
    const confirmDelete = () => {
        return Alert.alert(
            "ยืนยันการลบ?",
            "คุณแน่ใจหรือไม่ว่าจะลบรายการนี้?",
            [
                { text: "ยกเลิก", },
                { text: "ยืนยัน", onPress: () => { removeProduct(); }, },
            ]
        );
    };
    const removeProduct = async () => {
        try {
            let string_value;
            //READ ALL
            string_value = await AsyncStorage.getItem("@products");
            let products = string_value != null ? JSON.parse(string_value) : [];
            //console.log("PRESS!!",products.length);     
            //INSERT NEW DATA INTO ARRAY TOP
            if (item) {
                let index = products.findIndex((p_item => p_item.id == item.id));
                //Update object's name property.
                products.splice(index, 1);
                console.log(products.length);
            }
            //WRITE
            string_value = JSON.stringify(products);
            await AsyncStorage.setItem("@products", string_value);
            //REDIRECT TO
            navigation.navigate("Book");
        } catch (e) {
            // saving error
        }
    };




    //CONFIG HEADER BAR
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{ flexDirection: "row", width: 100, justifyContent: "space-around" }}>
                    <TouchableOpacity onPress={() => { navigation.navigate("BookForm", { "item": item }); }}>
                        <FontAwesome name="edit" size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { confirmDelete(); }}>
                        <FontAwesome name="trash" size={30} />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation]);

    return (
        <View style={{ backgroundColor: "white", padding: 20, flex: 1 }}>
            <View style={{ flexDirection: "row" }}>
                <Image style={{ flex: 1, resizeMode: "contain", aspectRatio: 1 / 1 }} source={{ uri: item.image }} />
            </View>
            <Text style={{ fontSize: 20, height: 70, marginVertical: 10 }}> {item.name} </Text>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ color: "green", fontSize: 20 }}>{item.price}</Text>
                <Text style={{ paddingTop: 6 }}> บาท</Text>
            </View>
        </View>
    );
}
