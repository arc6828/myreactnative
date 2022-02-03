import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import GPS from "../../helpers/GPS";
import MyMapView from "../../components/week11/MyMapView";
import { FontAwesome } from "@expo/vector-icons";

export default function Location() {
    const [location, setLocation] = useState(null);
    const [recordLocation, setRecordLocation] = useState(false);

    useEffect(async () => {
        console.log("ENTER SCREEN");
        let loc = await GPS.getLocation();
        if (loc) {
            setLocation(loc);
        }
    }, []);

    //TOP RIGHT MENU
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    style={{ paddingRight: 20 }}
                    onPress={() => { navigation.navigate("LocationQuiz"); }}
                >
                    <Text>Quiz</Text>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);
    //SCREEN UI
    return (
        <View style={{ flex: 1 }}>
            {/* <Text> {JSON.stringify(location)} </Text> */}
            <Text>{location ? new Date(location.timestamp).toString() : "-"}</Text>
            <View style={{ flexDirection: 'row', height: 70, backgroundColor: "#50E3C2" }}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={{ textAlign: 'center' }}>Lat/Lon</Text>
                    <Text style={{ textAlign: 'center' }}>{location ? location.coords.latitude : "-"}</Text>
                    <Text style={{ textAlign: 'center' }}>{location ? location.coords.longitude : "-"}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={{ textAlign: 'center' }}>Speed / Accuracy</Text>
                    <Text style={{ textAlign: 'center' }}>
                        {location ? Number(location.coords.speed * 3.6).toFixed(0) : "-"} km/h
                    </Text>
                    <Text style={{ textAlign: 'center' }}>
                        {location ? Number(location.coords.accuracy).toFixed(0) : "-"} m.
                    </Text>
                </View>
            </View>

            <View style={{ flex: 1 }}>
                <MyMapView
                    location={location}
                    setLocation={setLocation}
                    recordLocation={recordLocation}
                />
            </View>
            <TouchableOpacity
                onPress={() => { setRecordLocation(!recordLocation); }}
                style={{ backgroundColor: "lightblue", flex: 1, alignItems: "center", justifyContent: "center", width: 80, height: 80, borderRadius: 40, position: "absolute", right: 30, bottom: 30, elevation: 5, }} >
                <FontAwesome name={recordLocation ? "pause" : "play"} size={30} />
            </TouchableOpacity>
        </View>
    );
}
