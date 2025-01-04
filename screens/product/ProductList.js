import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet } from "react-native";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ฟังก์ชันดึงข้อมูลจาก API
  const fetchData = async () => {
    try {
      const response = await fetch("https://api.example.com/products"); // แทน URL ของ API ที่ใช้
      const json = await response.json();
      setData(json); // บันทึกข้อมูลลง State
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false); // ปิด Loading ไม่ว่าจะสำเร็จหรือเกิดข้อผิดพลาด
    }
  };

  useEffect(() => {      
    fetchData();
  }, []);

  // หากกำลังโหลด ให้แสดง Loading Indicator
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  // หากเกิดข้อผิดพลาด ให้แสดงข้อความ Error
  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "red" }}>{error}</Text>
      </View>
    );
  }

  // การแสดงข้อมูลใน FlatList
  return (
    <FlatList
      data={data} // ข้อมูลที่จะแสดง
      keyExtractor={(item) => item.id.toString()} // กำหนด Key ให้แต่ละรายการ
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
  },
  price: {
    color: "green",
    marginTop: 5,
  },
});

export default ProductList;
