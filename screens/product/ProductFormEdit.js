import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

const ProductFormEdit = ({ route, navigation }) => {
  const { productId } = route.params; // รับ ID ของสินค้าเพื่อดึงข้อมูล
  const [product, setProduct] = useState({ title: "", description: "", price: "" });
  const [loading, setLoading] = useState(false);

  // ฟังก์ชันดึงข้อมูลสินค้าเดิม
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.example.com/products/${productId}`);
        const data = await response.json();
        setProduct(data); // เก็บข้อมูลเดิมใน State
      } catch (error) {
        Alert.alert("Error", "Failed to fetch product data");
      }
      setLoading(false);
    };
    fetchProduct();
  }, [productId]);

  // ฟังก์ชันอัปเดตข้อมูล
  const handleUpdate = async () => {
    if (!product.title || !product.description || !product.price) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    try {
      const response = await fetch(`https://api.example.com/products/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product), // ส่งข้อมูลที่แก้ไขไปยัง API
      });

      if (response.ok) {
        Alert.alert("Success", "Product updated successfully");
        navigation.goBack(); // กลับไปหน้าก่อนหน้า
      } else {
        throw new Error("Failed to update product");
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  // หากอยู่ระหว่างการโหลด
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={product.title}
        onChangeText={(text) => setProduct({ ...product, title: text })}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        value={product.description}
        onChangeText={(text) => setProduct({ ...product, description: text })}
      />

      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        value={product.price}
        onChangeText={(text) => setProduct({ ...product, price: text })}
        keyboardType="numeric"
      />

      <Button title="Save Changes" onPress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductFormEdit;
