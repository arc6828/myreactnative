# EP 03 : Components and Props

## Basic Components
In React Native, there are several basic components that you can use to build the user interface of your mobile application. These components serve as the building blocks for creating screens, layouts, and interactive elements. Here are some of the commonly used basic components in React Native:
- **View**  is the most fundamental component in React Native and acts as a container for other components. It is similar to the <div> element in HTML and is used to structure and group other components.
- **Text** is used to display text content within your application. It supports basic styling options like font size, color, and text alignment. You can use it to show headings, paragraphs, labels, or any other textual information.
- **Image** is used to display images in your application. You can specify the image source, set dimensions, and apply styles. React Native supports various image formats, and you can also use remote images by providing a URL.
- **TextInput** allows users to input text. It provides a text input field where users can type and edit text. You can control its value, define placeholder text, handle events, and apply styling.
- **Button** is used to create interactive buttons that users can tap to trigger actions. You can specify the button's title, handle button press events, and style it according to your application's design.
- **ScrollView** is a component that enables scrolling when content exceeds the available screen space. It is useful when you have a long list of items or content that needs to be scrollable.
- **TouchableOpacity**  is a component that provides touch-based interactions. It is used to create interactive elements like buttons, images, or any other component that should respond to user touches. It provides visual feedback when touched.
- **FlatList** is used to efficiently render lists of data. It is an optimized component for rendering large datasets and provides features like lazy loading, infinite scrolling, and item rendering customization.
- **ActivityIndicator** displays a loading spinner to indicate that something is happening in the background. It is useful when waiting for data to load or performing time-consuming operations.
- **Icon** (FontAwesome) 

## Custom Component and Props

### Component vs Screen
In the context of React Native development, there is a distinction between components and screens. Let's explore the differences between the two:

**Components**

- **Description**: Components are reusable building blocks in React Native that encapsulate a specific piece of functionality or UI element. They can represent individual elements, such as buttons, input fields, or icons, or more complex components like lists, cards, or modals.
- **Purpose**: Components help create a modular and maintainable code structure by breaking down the UI into smaller, reusable pieces. They promote code reusability, enhance organization, and make it easier to manage and update specific parts of the UI.
- **Example**: A Button component that renders a styled button with a specific behavior, such as handling press events and triggering actions.

**Screens**

- **Description**: Screens, also known as views or pages, represent complete screens or sections of your application. Each screen is typically composed of multiple components and defines a specific user interface and functionality. Screens are responsible for rendering the overall layout and coordinating the components that make up the screen.
- **Purpose**: Screens define the navigation structure and content of your application. They represent the different states or views that users can interact with and help organize and manage the flow of your application.
- **Example**: A HomeScreen component that renders the main screen of your application, including a header, a list of items, and a footer.

In summary, components are smaller, reusable building blocks that represent specific UI elements or functionality. They can be used in multiple screens or other components. On the other hand, screens are higher-level components that represent complete screens or sections of your application and define the overall layout and functionality for a specific view or state.

When developing a React Native application, you'll typically create and manage both components and screens. Components provide modularity and reusability, while screens define the structure and flow of your application. By combining components and organizing them into screens, you can create a structured and maintainable codebase for your mobile app.

### Components vs Props
In React Native, components and props are fundamental concepts that work together to build reusable and customizable user interfaces. Let's explore the differences between components and props:

**Components**

- **Description**: Components are the building blocks of a React Native application. They are self-contained, reusable, and independent entities that encapsulate a specific piece of functionality or UI element. Components can be thought of as custom HTML tags or custom UI elements that you can use throughout your application.
- **Purpose**: Components help in creating modular and reusable code by breaking down the UI into smaller, manageable pieces. They promote code reusability, maintainability, and allow for a more structured and organized development process.
- Example: A Button component that renders a styled button with specific behavior, such as handling press events and triggering actions.

**Props**
- **Description**: Props (short for properties) are the mechanism by which data and functionality are passed from a parent component to its child components. Props are read-only and allow you to customize the behavior and appearance of a component dynamically.
- **Purpose**: Props allow you to configure and customize components based on the specific requirements of a particular use case or context. They provide a way to pass data, functions, or configuration options from a parent component to its child components.
- **Example**: Passing a title prop to a Button component to customize the displayed text, or passing an onPress prop to define a function to be executed when the button is pressed.

In summary, components are the building blocks of a React Native application, representing reusable and independent entities that encapsulate specific functionality or UI elements. Props, on the other hand, allow you to pass data and functionality from a parent component to its child components, enabling customization and dynamic behavior.

By combining components and using props to configure them, you can create flexible and reusable UI elements that can be easily customized and composed to build complex user interfaces in React Native.

## Practices

- Signup.js
- Card.js
- Hotel.js
- MyIcon.js
- Menu.js

## Quiz
- 

## Slide
- https://docs.google.com/presentation/d/1MejK430_GtUiH5PPnxncEHjM1aD5nmijxqeNxkKHS24/edit?usp=sharing
- https://docs.google.com/presentation/d/1SXxenxqWxdV088HEb-6LolaWre3QeVjlEQ_EVq1ha20/edit?usp=sharing

