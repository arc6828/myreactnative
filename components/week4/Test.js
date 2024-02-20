import React from "react";
import { Image, ScrollView, View } from "react-native";
import { Avatar,  Button,  Card,  Divider,  Icon,  Text } from "react-native-paper";

export default function Test() {
  return (
    <ScrollView style={{ paddingVertical: 25, flex: 1 }}>
      <View>
        <Card.Cover style={{ borderRadius: 0 }} source={require("../../assets/week3/room-6.jpg")} />

        <Card.Content
          style={{
            marginTop: -30,
            backgroundColor: "#fafafa",
            marginHorizontal: 20,
            padding: 20,
            borderRadius: 10,
          }}
        >
          <Text variant="titleLarge" style={{ textAlign: "center" }}> Hilton San Francisco </Text>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Icon source="star" color={"orange"} size={20} />
            <Icon source="star" color={"orange"} size={20} />
            <Icon source="star" color={"orange"} size={20} />
            <Icon source="star" color={"orange"} size={20} />
            <Icon source="star-half" color={"orange"} size={20} />
          </View>
          <Text variant="bodyMedium" style={{ textAlign: "center" }}> Facilities provided may range from a modest quality mattress in a small room to large suites </Text>
        </Card.Content>
      </View>

      <View>
        <Card.Title
          title="Excellent"
          subtitle="See 801 reviews"
          left={(props) => ( <Avatar.Text size={40} style={{ backgroundColor: "tomato" }} color="white" label="9.5" /> )}
        />
      </View>

      <Divider />

      <Card.Content style={{ paddingVertical: 10 }}>
        <Text variant="titleLarge">Hotel Description</Text>
        <Text variant="bodyMedium"> 218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore        </Text>
      </Card.Content>

      <Divider />
      {/* icon */}
      <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 10, }} >
        <View>
          <Icon source="wifi" color={"lightblue"} size={30} />
          <Text style={{ textAlign: "center" }}>wifi</Text>
        </View>
        <View>
          <Icon source="coffee" color={"lightblue"} size={30} />
          <Text style={{ textAlign: "center" }}>coffee</Text>
        </View>
        <View>
          <Icon source="shower" color={"lightblue"} size={30} />
          <Text style={{ textAlign: "center" }}>shower</Text>
        </View>
        <View>
          <Icon source="car" color={"lightblue"} size={30} />
          <Text style={{ textAlign: "center" }}>car</Text>
        </View>
        <View>
          <Icon source="paw" color={"lightblue"} size={30} />
          <Text style={{ textAlign: "center" }}>paw</Text>
        </View>
      </View>

      <Divider />

      <Card.Content style={{ paddingVertical: 10 }}>
        <Text variant="titleLarge">Location</Text>
        <Text variant="bodyMedium"> 218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et… </Text>
        <Card.Cover style={{ marginTop: 10 }} source={{ uri: "https://picsum.photos/700" }} />
      </Card.Content>

      <Divider />

      <View style={{ padding: 15 }}>
        <Text variant="titleLarge">Room Type</Text>
        <View style={{ flexDirection: "row"}}>
          <Image style={{ width: 100, height: 100, borderRadius: 30 / 2 }} source={require("../../assets/week3/room-8.jpg")} />
          <Card.Content style={{ paddingLeft: 10 }}>
            <Text variant="titleMedium">Standard Twin Room</Text>
            <Text variant="titleLarge" style={{ color: "red", marginTop: 15, marginBottom: 5 }} > $399.99 </Text>
            <Text variant="bodyMedium" style={{ color: "blue" }}> Hurry Up! This is your last room!</Text>
          </Card.Content>
        </View>
      </View>

      <Divider />

      <View style={{ padding: 15, flexDirection: "row", justifyContent: "space-between" }} >
        <View>
          <Text variant="bodyMedium" >Price</Text>
          <Text variant="titleLarge" style={{ color: "red" }}>$399.99</Text>
          <Text variant="bodyMedium" >AVG/Night</Text>
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Button mode="contained" buttonColor="tomato">Book Now</Button>
        </View>
      </View>

      <Divider />
      
      <View style={{ marginBottom : 20 }}></View>
    </ScrollView>
  );
}
