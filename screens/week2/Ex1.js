import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Button } from 'react-native';

export default function Ex1() {
  const navigation = useNavigation();
  return (
    <View style={{ flex : 1 }}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ backgroundColor: '#50E3C2', height: 116 }}></View>
      </View>
      <Button title="Next" onPress={ ()=>{ navigation.navigate("Ex2")  } } />
    </View>
  );
}
