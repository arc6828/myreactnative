import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from "react-native";

const ProductFormCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleCreate = async () => {
    if (!title || !description || !price) {
      Alert.alert("Error", "กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return;
    }

    const newItem = {
      title: title,
      description: description,
      price: price,
    };

    try {
      const response = await fetch("https://api.example.com/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });

      if (response.ok) {
        Alert.alert("Success", "ข้อมูลถูกเพิ่มเรียบร้อยแล้ว!");
        setTitle("");
        setDescription("");
        setPrice("");
      } else {
        throw new Error("Failed to add data.");
      }
    } catch (error) {
      Alert.alert("Error", "เกิดข้อผิดพลาด: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>ชื่อสินค้า:</Text>
      <TextInput
        style={styles.input}
        placeholder="กรอกชื่อสินค้า"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>รายละเอียด:</Text>
      <TextInput
        style={styles.input}
        placeholder="กรอกรายละเอียด"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Text style={styles.label}>ราคา:</Text>
      <TextInput
        style={styles.input}
        placeholder="กรอกราคา"
        keyboardType="numeric"
        value={price}
        onChangeText={(text) => setPrice(text)}
      />
      <Button title="เพิ่มข้อมูล" onPress={handleCreate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
  },
});

export default ProductFormCreate;
