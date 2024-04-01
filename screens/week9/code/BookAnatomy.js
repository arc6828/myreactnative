import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function BookAnatomy() {    
    // React Hook like use... (useNavigation, useRoute, useState)
    const navigation = useNavigation(); 
    const [products, setProducts] = useState([]);     
    
    // JavaScript function
    const loadBooks = async () => { };

    // Hook like useEffect()    
    useEffect(() => { loadBooks(); }, []);

    // Component function
    const BookItem = ({ item, index })=>(
        <TouchableOpacity onPress={() => { navigation.navigate("BookDetail", { "id": item.id }); }} style={{ backgroundColor: "white", margin: 7, flex: 1, elevation: 5, }} >
           ...            
        </TouchableOpacity>
    );

    // Render (return)
    return (
        <View style={{ flex: 1 }}>
            ...
        </View>
    );

    
}
