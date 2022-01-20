import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, KeyboardAvoidingView, ScrollView, Text, TextInput, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BookForm() {
    const [id, setId] = useState("_" + Math.random().toString(36).substring(2, 9));
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const route = useRoute();
    const { item } = route.params;
    const navigation = useNavigation();
    useLayoutEffect(() => { navigation.setOptions({ title: item ? "edit" : "create" }); }, [navigation]);
    useEffect(() => {
        if (item) {
            setId(item.id);
            setName(item.name);
            setPrice(item.price.toString());
            setImage(item.image);
        }
    }, []);

    const writeProducts = async () => {
        console.log("PRESS!!");
        try {
          let string_value;
          //A NEW ITEM
          let new_data = {
            id: id,
            name: name,
            price: price,
            image: image,
          };
          //READ ALL
          string_value = await AsyncStorage.getItem("@products");
          let products = string_value != null ? JSON.parse(string_value) : [];     
          //INSERT NEW DATA INTO ARRAY TOP
          if(item){
            let index = products.findIndex((p_item => p_item.id == id));
            //Update object's name property.
            products[index] = new_data;
          }else{
            products.unshift(new_data);
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
    


    return (
        <KeyboardAvoidingView style={{ flex: 1, padding: 20 }}>
            <ScrollView>
                <Text>ชื่อหนังสือ</Text>
                <TextInput placeholder="Enter name ..." value={name} onChangeText={(text) => setName(text)} />
                <Text>ราคา</Text>
                <TextInput placeholder="Enter price ..." value={price} onChangeText={(text) => setPrice(text)} />
                <Text>ลิงค์รูปภาพ</Text>
                <TextInput placeholder="Enter image URL ..." value={image} onChangeText={(text) => setImage(text)} />
            </ScrollView>
            <Button title="SAVE" color="tomato" onPress={ writeProducts } />
        </KeyboardAvoidingView>
    );
}
