import React from "react";
import MapView from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";

export default function UniversityMarkers(props) {

    return props.items.map((item) => (
        <MapView.Marker
            coordinate={{
                "latitude": Number(item.latitude),
                "longitude": Number(item.longitude)
            }}
            title={item.name}
            key={item.id.toString()}
            description={item.address}
        >
            <FontAwesome name="university" size={20} color="tomato" />
        </MapView.Marker>
    ));
}
