# EP 01 : Introducation

<img src="https://citrusbug.com/storage/uploads/blog/native-vs-hybrid-vs-cross-platform.png">

Mobile app development has become increasingly important as smartphones have become an integral part of our daily lives. There are different approaches to developing mobile apps, including native, hybrid, and cross-platform development. React Native, a popular framework developed by Facebook, offers a powerful solution for cross-platform mobile app development.

Slide : https://docs.google.com/presentation/d/1YuwvouYC_NZR5fucDDNwmQxdCNckMsUyUgFnsekxG-s/edit?usp=sharing


## Reactnative Mobile Development

### What is the different between native, hybrid, and cross platform of mobile app development?
1. Native Development: Native app development involves building separate apps for each target platform, such as iOS (using Swift or Objective-C) and Android (using Java or Kotlin). Native apps have full access to the device's features and performance, resulting in a highly responsive and optimized user experience. However, developing and maintaining separate codebases for each platform can be time-consuming and costly.

1. Hybrid Development: Hybrid app development combines web technologies (HTML, CSS, and JavaScript) with native containers. These containers allow the app to run on multiple platforms using web views. Hybrid frameworks like Apache Cordova (PhoneGap) and Ionic are commonly used for this approach. While hybrid apps are relatively easier to build and maintain, they may lack the performance and native user experience of fully native apps.

1. Cross-Platform Development: Cross-platform app development aims to build apps that can run on multiple platforms using a single codebase. This approach reduces development time and effort by allowing developers to reuse code across platforms. React Native is a popular cross-platform framework that leverages JavaScript and React to build native-like mobile apps.

### What is React Native?
React Native is an open-source framework developed by Facebook that allows developers to build mobile applications using JavaScript and React. It enables the development of cross-platform apps that can run on both iOS and Android devices with a native-like user experience. React Native uses native components instead of web views, which contributes to better performance and usability.

Key features of React Native include:

- **Code reusability**: React Native allows developers to write code once and reuse it across multiple platforms, reducing development time and effort.

- **Native-like performance**: By utilizing native components, React Native apps achieve performance similar to fully native apps.

- **Hot reloading**: React Native supports hot reloading, enabling developers to see code changes immediately without restarting the app.

- **Access to native APIs**: React Native provides a bridge that allows access to native APIs and components, ensuring integration with device features.

- **Large community and ecosystem**: React Native has a thriving community and a vast ecosystem of libraries, tools, and resources, providing extensive support and solutions.

### What is Expo?
Expo is a set of tools and services built around React Native that simplifies the development, testing, and deployment of React Native apps. It provides a variety of features, including:

- **Development environment**: Expo offers an integrated development environment (IDE) that enables developers to write, test, and debug their React Native apps without the need for complex setup.

- **Pre-built components and APIs**: Expo provides a set of pre-built UI components and APIs that developers can use to quickly create common app features.

- **Over-the-air updates**: Expo allows developers to push updates to their published apps without requiring users to download a new version from the app store, making it easier to deliver bug fixes and new features.

- **Publishing and distribution**: Expo provides a streamlined process for publishing React Native apps to app stores, simplifying the deployment and distribution of apps.

- **Expo SDK**: Expo SDK is a set of libraries and APIs that extend the capabilities of React Native. It includes additional functionality like camera access, push notifications, and geolocation.

Expo is a valuable tool for React Native developers, particularly those looking for a quick start and simplified workflow without sacrificing functionality. However, it's important to note that Expo does have some

### Run during development
Run the app: After starting the development server, you'll see a QR code in the terminal and a web page in your browser. To run the app on your physical device or an emulator, you have a few options:

- **On physical device**: Install the Expo Go app on your iOS or Android device from the respective app store. Then, scan the QR code using the Expo Go app, and it will load and run your app.

- **On Android emulator**: If you're using an Android emulator, make sure it is running. In the web page opened by Expo, click on "Run on Android device/emulator" to install and run the app on the emulator.

- **On iOS simulator**: If you're using a macOS system, you can run the app on the iOS simulator by clicking on "Run on iOS simulator" in the Expo web page.

## Installation and First Run

### Programs for Installation
- Nodejs (LTS Version)
    -  https://nodejs.org
- Mobile Emullator
    - NoxPlayer (Recommended) : https://th.bignox.com/
    - LDPlayer : https://th.ldplayer.net/
    - Bluestack : https://www.bluestacks.com/th/index.html
    - etc.
- Text Editor like Visual Studio Code (Recommended)
    - https://code.visualstudio.com/

### Create your first project and run
reference : https://reactnative.dev/docs/environment-setup

To install and run React Native with Expo, follow these steps:

- Install Node.js: Before getting started, ensure that you have Node.js installed on your system. You can download the latest version of Node.js with LTS version from the official website (https://nodejs.org).
- check nodejs installtion
```bash
node --version
```
- create project 
Create a new React Native project with Expo: Once Expo CLI is installed, you can create a new React Native project using the npx command. Run the following command in your terminal:
```bash
npx create-expo-app AwesomeProject
```
This will create a new directory named "AwesomeProject" with a basic Expo project template.

- Navigate to the project directory: Once the project is created, navigate to the project directory using the command:
```bash
cd AwesomeProject
```
- Start the development server: To start the development server and run your React Native app, run the following command:
```bash
npm start
#or
#npx expo start
```
- Open on Android Emulator

- Download Expo Go and Install in Emulator

- First Run

- Modify the app: Open the project directory in your preferred code editor and start modifying the app's code located in the App.js file. You can use JavaScript and React to create your app's user interface and functionality. The changes you make will be immediately reflected in the running app, thanks to hot reloading.

With these steps, you have successfully installed Expo, created a new React Native project, and run the app using Expo. You can continue developing your app by adding components, styles, and integrating with various Expo APIs and libraries. Expo provides a rich set of features, including access to device features like the camera, push notifications, and more, which you can explore in the Expo documentation.

## Recap to JavaScript 
<a href="https://docs.google.com/presentation/d/1MK6nBxp6oQIWdso6z7-8_JuZvpL8NaFKp_KIkJhBYpY/edit?usp=sharing">ดูสไลด์</a>