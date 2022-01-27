import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, KeyboardAvoidingView, ScrollView, Text, TextInput, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import BookStorage from "../../storages/BookStorage";
import BookLaravel from "../../services/BookLaravel";

export default function BookForm() {
  const [id, setId] = useState("_" + Math.random().toString(36).substring(2, 9));
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const route = useRoute();
  const { item } = route.params;
  const navigation = useNavigation();
  useLayoutEffect(() => { navigation.setOptions({ title: item ? "edit" : "create" }); }, [navigation]);
  useEffect(async() => {
    if (item) {
      // let book = await BookStorage.readItemDetail(item);
      let book = await BookLaravel.getItemDetail(item);      
      setId(book.id);
      setName(book.name);
      setPrice(book.price.toString());
      setImage(book.image);
    }
  }, []);

  const saveBook = async () => {
    //A NEW ITEM
    let new_data = { id: id, name: name, price: price, image: image };
    //SAVE
    // await BookStorage.writeItem(new_data);
    if(item){
      await BookLaravel.updateItem(new_data);
    }else{
      await BookLaravel.storeItem(new_data);
    }

    //REDIRECT TO
    navigation.navigate("Book");
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
      <Button title="SAVE" color="tomato" onPress={saveBook} />
    </KeyboardAvoidingView>
  );
}
