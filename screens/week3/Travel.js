import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Signup from '../../components/week3/Signup';

export default function Travel() {
    return (        
        <View style={{ flex: 1, flexDirection: 'column'  }}>
            {/* <Text> Week 3 </Text> */}
            <Signup />
        </View>
    );
}
