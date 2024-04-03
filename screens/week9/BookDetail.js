import React, { useEffect, useState } from "react";
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
    const navigation = useNavigation();
    const route = useRoute();   
    const [book, setBook] = useState({
        "id":"xxxx",
        "name":"Example Book",
        "price":"100",
        "image":"https://picsum.photos/300",
    });
    const [modalVisible, setModalVisible] = useState(false);      

    

    //DELETE POPUP    
    const deleteBook = async () => {
        //REMOVE BOOK
        // await BookStorage.removeItem(item);
        
        // await BookService.destroyItem(item);
        //REDIRECT TO
        navigation.navigate("Book");
    };
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

    // TOP RIGHT MENU
    const TopRightMenu = ({id})=>(
        <View style={{ flexDirection: "row", width: 100, justifyContent: "space-around" }}>
            <TouchableOpacity 
                onPress={() => { navigation.navigate("BookForm", { "id": id }); }}
                >
                <FontAwesome name="edit" size={30} />
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => { confirmDelete(); }}
                >
                <FontAwesome name="trash" size={30} />
            </TouchableOpacity>
        </View>
    );
    const onLoad = async () => {      
       
        // const route = useRoute();    
        // const { id } = route.params;
        // let b = await BookStorage.readItemDetail(id);
        // setBook(b);
        navigation.setOptions({ headerRight: () => ( <TopRightMenu id="xxx" /> ) });
    };
    useEffect(() => { onLoad(); }, []);

    if(Object.keys(book).length == 0){ return <View></View> }

    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <TouchableOpacity onPress={() => { setModalVisible(true); }} >
                <View style={{ flexDirection: "row" }}>
                    <Image style={{ flex: 1, resizeMode: "contain", aspectRatio: 1 / 1 }} source={{ uri: book.image }} />
                </View>
            </TouchableOpacity>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20, marginVertical: 10 }}> {book.name} </Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "green", fontSize: 20 }}>{book.price}</Text>
                    <Text style={{ paddingTop: 6 }}> บาท</Text>
                </View>
            </View>
            
            {/* <Modal visible={modalVisible} transparent={true} onRequestClose={() => { setModalVisible(false); }} >
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
            </Modal> */}
        </View>
    );
}
