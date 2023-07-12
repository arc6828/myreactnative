# EP 04 : STATE

- dependencies

```bash
# for auto import
npm i --save @types/react-native
```

## State Concept
1. Definition
    - State เป็นตัวแปรชนิดหนึ่งซึ่งอยู่ในรูปของ JavaScript Object
    - ใช้ติดตามและอัพเดทข้อมูลตัวแปรในหน้า JSX
    - ทุกๆ Component จะมี state เป็นของตนเอง ไม่สามารถใช้งาน State ของ Component อื่นโดยตรงได้
    - การเปลี่ยนแปลงของ state จะทำให้ component ต้อง render ใหม่โดยอัตโนมัติ
    - State in React Native is a way to store data that can change over time. It is used to keep track of things like the user's current location, the number of items in a shopping cart, or the state of a loading animation.

    - There are two types of data that control a component: props and state. Props are set by the parent component and they are fixed throughout the lifetime of a component. State, on the other hand, can be changed by the component itself.

    - To use state in a React Native component, you need to use the useState hook. The useState hook takes two arguments: the initial value of the state variable, and a function that is called when the state variable is changed.

    - For example, the following code shows how to use the useState hook to create a component that keeps track of the user's current location:
    ```js
    import React, { useState } from 'react';

    const Location = () => {
        const [location, setLocation] = useState({
            latitude: 0,
            longitude: 0,
        });

        const onLocationChange = (newLocation) => {
            setLocation(newLocation);
        };

        return (
            <View>
                <Text>Current location: {location.latitude}, {location.longitude}</Text>
                <Button onPress={onLocationChange}>Update location</Button>
            </View>
        );
    };

    export default Location;
    ```
    - In this code, the useState hook is used to create two state variables: location and setLocation. The location variable stores the user's current location, and the setLocation function is used to change the value of the location variable.

    - The onLocationChange function is called when the user presses the "Update location" button. This function calls the setLocation function to update the value of the location variable.

    - The Location component renders a text element that shows the user's current location. It also renders a button that the user can press to update their location.

    - When the user presses the button, the onLocationChange function is called. This function calls the setLocation function to update the value of the location variable. The Location component then re-renders itself with the new value of the location variable.
1. Without State
    - HTML code
    ```html
    <div style="background-color:blue" id="a"></div>
    <div style="background-color:blue" id="b"></div>
    :
    <div style="background-color:blue" id="z"></div>
    <button onClick="onPressButton">click</button>
    ```
    - JavaScript code

    ```js
    function onPressButton(){
        let a = document.getElementById("a");   
        let b = document.getElementById("b");  
        //    :
        let z = document.getElementById("z"); 
        a.style.backgroundColor = "red";   
        b.style.backgroundColor = "red";
        //    :
        z.style.backgroundColor = "red";
    }   	
    ```
1. With State
    - HTML code
    ```html
    <div style={{ backgroundColor : color }} id="a"></div>
    <div style={{ backgroundColor : color }} id="b"></div>
    :
    <div style={{ backgroundColor : color }} id="z"></div>
    <button onClick="onPressButton">click</button>
    ```
    - JavaScript code

    ```js
    const [color, setColor] = useState("blue")

    function onPressButton(){
        setColor("red");
    }   	
    ```


1.  Initialize / Set / Get State:
    - Initialize state
    - Set state
    - Get state

1.  Create state variables to hold the necessary data in your component.
    Set initial values for the state variables.
    Display State Data:

1.  Render the data from the state in your component's UI.
    Access the state variables to display the relevant information.
    Update State:

        - Implement functions or event handlers to update the state.
        - Attach event handlers to UI elements (e.g., buttons, input fields) to capture user interactions.
        - Modify the state variables using setState or useState hooks based on user actions or external events.

1.  Pass State as Props:

    - If necessary, pass the state data as props to child components.
    - Ensure child components receive the required state information to display or update.

1.  Handle Asynchronous Operations:

    - If your state involves asynchronous operations (e.g., API requests), handle them using promises, async/await, or callbacks.
    - Update the state variables accordingly when the asynchronous operation completes.

By following this outline, you can effectively manage state in your React Native component. Remember to customize the implementation based on your specific requirements and component structure.

## Practice

### Section 0 : Get Started!!!

1. Create folders and files
   - folder : screens/week5
     - file : screens/week5/Health.js
   - folder : components/week5
     - file : components/week5/Bmi.js
     - file : components/week5/Heartbeat.js
1. Starter code for "components/week5/Bmi.js"

   ```jsx
   import React from "react";
   import { View } from "react-native";

   export default function Bmi() {
     return <View></View>;
   }
   ```

1. Starter code for "components/week5/Heartbeat.js"

   ```jsx
   import React from "react";
   import { View } from "react-native";
   import { FontAwesome } from "@expo/vector-icons";

   export default function Heartbeat() {
     return <View></View>;
   }
   ```

1. Starter code for "screens/week5/Health.js"

   ```jsx
   import React from "react";
   import { View } from "react-native";
   import Bmi from "../../components/week5/Bmi";
   import Heartbeat from "../../components/week5/Heartbeat";

   export default function Health() {
     return (
       <View
         style={{
           flex: 1,
           backgroundColor: "lightblue",
           justifyContent: "center",
           padding: 20,
         }}
       >
         <Bmi />
         <Heartbeat />
       </View>
     );
   }
   ```

1. Edit "App.js"

    ```jsx
    import { StatusBar } from 'expo-status-bar';
    import React from 'react';
    import { StyleSheet, Text, View } from 'react-native';
    import Health from './screens/week5/Health;

    export default function App() {
        return (
            <Health />
        );
    }

    ```

1. Run


### Section 1 : Try to draw components

1. Final Results

2. Finish coding this screen following design
    - View
        - View
            - Text : Weight (kg.)
            - TextInput : Input your Weight …
        - View
            - Text : Height (cm.)
            - TextInput : Input your Height …
        - View
            - View
                - Text : 24.22
            - View
                - Text : Normal
        - Button : Calculate


### Section 2 : Get 