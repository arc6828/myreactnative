import React, { useEffect, useLayoutEffect, useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View, Modal, ToastAndroid } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import BookStorage from "../../storages/BookStorage";
// import BookLaravel from "../../services/BookLaravel";
import File from "../../helpers/File";
import ImageViewer from 'react-native-image-zoom-viewer';
import BookService from "../../services/BookService";

export default function BookDetail() {
    const route = useRoute();
    const { item } = route.params;
    const [book, setBook] = useState(item);
    const [modalVisible, setModalVisible] = useState(false);
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
    await BookService.destroyItem(item);
    //REDIRECT TO
    navigation.navigate("Book");
};

const onLoad = async () => {
    // let b = await BookStorage.readItemDetail(item);
    let b = await BookService.getItemDetail(item);
    setBook(b);
};

useEffect(() => { onLoad(); }, []);

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
            <TouchableOpacity onPress={() => { setModalVisible(true); }} >
                <View style={{ flexDirection: "row" }}>
                    <Image style={{ flex: 1, resizeMode: "contain", aspectRatio: 1 / 1 }} source={{ uri: book?book.image:"" }} />
                </View>
            </TouchableOpacity>
            <Text style={{ fontSize: 20, height: 70, marginVertical: 10 }}> {book?book.name:""} </Text>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ color: "green", fontSize: 20 }}>{book?book.price:""}</Text>
                <Text style={{ paddingTop: 6 }}> บาท</Text>
            </View>
            <Modal visible={modalVisible} transparent={true} onRequestClose={() => { setModalVisible(false); }} >
                <ImageViewer imageUrls={[{ url: book?book.image:"", props: {} }]}
                    enableSwipeDown={true}
                    onCancel={() => { console.log("SwipeDown"); setModalVisible(false); }}
                    onSave={(uri) => {
                        File.download(uri);
                        // alert("Save"); 
                        ToastAndroid.showWithGravity(
                            "Saved",
                            ToastAndroid.SHORT,
                            ToastAndroid.BOTTOM
                        );
                    }}
                />
            </Modal>
        </View>
    );
}
