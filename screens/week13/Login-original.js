import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const onLogin = async () => { };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Login</Text>
            <Text style={{ color: "red" }}>{message}</Text>
            <TextInput style={{ width: "90%", padding: 10 }} autoCapitalize="none" placeholder="Email" onChangeText={(text) => setEmail(text)} value={email} />
            <TextInput style={{ width: "90%", padding: 10 }} secureTextEntry autoCapitalize="none" placeholder="Password" onChangeText={(text) => setPassword(text)} value={password} />
            <Button title="Login" style={{ padding: 10 }} onPress={onLogin} />
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={{ padding: 10 }}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}


