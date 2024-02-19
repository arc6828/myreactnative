import React from 'react';
import { Button, TextInput, View } from 'react-native';


export default function Signup() {
    return (
        <View style={{ padding : 20  ,flex: 1, alignItems: "stretch"  }}>
            <TextInput style={{ fontSize : 20 , marginTop : 10 }} placeholder="Input ID" />
            <TextInput style={{ fontSize : 20 , marginTop : 10 }}  placeholder="Input Email" />
            <TextInput style={{ fontSize : 20 , marginTop : 10 , marginBottom : 10 }}  placeholder="Input Address" />
            <Button title="Sign UP" color="red" />
        </View>    
    );
}
