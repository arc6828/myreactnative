import React, { useEffect, useLayoutEffect, useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import BookStorage from "../../storages/BookStorage";
import BookLaravel from "../../services/BookLaravel";

export default function BookDetail() {
    const route = useRoute();
    const { item } = route.params;
    const [book, setBook] = useState(item);
    //DELETE POPUP
    const confirmDelete = () => {
        return Alert.alert(
            "ยืนยันการลบ?",
            "คุณแน่ใจหรือไม่ว่าจะลบรายการนี้?",
            [
                { text: "ยกเลิก", },
                { text: "ยืนยัน", onPress: () => { deleteBook(); }, },
            ]
        );
    };

    const deleteBook = async () => {
        //REMOVE BOOK
        // await BookStorage.removeItem(item);
        await BookLaravel.destroyItem(item);
        //REDIRECT TO
        navigation.navigate("Book");
    };

    useEffect(async () => {
        // let b = await BookStorage.readItemDetail(item);
        let b = await BookLaravel.getItemDetail(item);
        setBook(b);
    }, []);










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
                <Image style={{ flex: 1, resizeMode: "contain", aspectRatio: 1 / 1 }} source={{ uri: book.image }} />
            </View>
            <Text style={{ fontSize: 20, height: 70, marginVertical: 10 }}> {book.name} </Text>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ color: "green", fontSize: 20 }}>{book.price}</Text>
                <Text style={{ paddingTop: 6 }}> บาท</Text>
            </View>
        </View>
    );
}
