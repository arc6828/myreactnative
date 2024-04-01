import React, { useEffect, useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function BookDetail() {
    const navigation = useNavigation();
    // const route = useRoute();   
    const [book, setBook] = useState({
        "id":"xxxx",
        "name":"Example Book",
        "price":"100",
        "image":"https://picsum.photos/300",
    });     

    //DELETE POPUP    
    const deleteBook = async () => {    };
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
    const TopRightMenu = ()=>(
        <View style={{ flexDirection: "row", width: 100, justifyContent: "space-around" }}>
            <TouchableOpacity 
                // onPress={() => { navigation.navigate("BookForm", { "id": book.id }); }}
                >
                <FontAwesome name="edit" size={30} />
            </TouchableOpacity>
            <TouchableOpacity 
                // onPress={() => { confirmDelete(); }}
                >
                <FontAwesome name="trash" size={30} />
            </TouchableOpacity>
        </View>
    );
    const onLoad = async () => {      
        // navigation.setOptions({ headerRight: () => ( <TopRightMenu /> ) });               
    };
    useEffect(() => { onLoad(); }, []);
    // CONDITIONAL RENDERING
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
        </View>
    );
}
