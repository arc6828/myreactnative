import React, { useState } from 'react';
import { View, Text, Button, FlatList, Alert, StyleSheet } from 'react-native';

const ProductDelete = () => {
  const [data, setData] = useState([
    { id: '1', title: 'Task 1' },
    { id: '2', title: 'Task 2' },
    { id: '3', title: 'Task 3' },
  ]);

  const deleteItem = (id) => {
    // Confirm before delete
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            // Update state
            setData((prevData) => prevData.filter((item) => item.id !== id));

            // Send DELETE request to API (Example)
            fetch(`https://api.example.com/items/${id}`, {
              method: 'DELETE',
            })
              .then((response) => {
                if (response.ok) {
                  console.log('Item deleted successfully');
                } else {
                  console.error('Failed to delete item');
                }
              })
              .catch((error) => console.error('Error:', error));
          },
        },
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
      <Button title="Delete" onPress={() => deleteItem(item.id)} />
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ProductDelete;
