import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Ex1 from "../screens/week2/Ex1";
import Ex2 from "../screens/week2/Ex2";
import Travel from '../screens/week3/Travel';
import Resort from '../screens/week4/Resort';
import Health from '../screens/week5/Health';
import Home from '../screens/week6/Home';
import Ex12 from '../screens/week2/Ex12';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Home" , headerShown : false }}
      />
      <Stack.Screen
        name="Ex1"
        component={Ex1}
        options={{ title: "Exercise 1" }}
      />
      <Stack.Screen
        name="Ex2"
        component={Ex2}
        options={{ title: "Exercise 2" }}
      />      
      <Stack.Screen
        name="Ex12"
        component={Ex12}
        options={{ title: "Exercise 12" }}
      />
      <Stack.Screen
        name="Travel"
        component={Travel}
        options={{ title: "Travel" }}
      />
      
      <Stack.Screen
        name="Resort"
        component={Resort}
        options={{ title: "Resort" }}
      />
      
      <Stack.Screen
        name="Health"
        component={Health}
        options={{ title: "Health" }}
      />
    </Stack.Navigator>
  );

}
