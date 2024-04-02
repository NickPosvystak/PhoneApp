// import "react-native-gesture-handler";
import "react-native-gesture-handler";

import React from "react";

import {
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import { useFonts } from "expo-font";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/Home";


const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-BlackItalic_798e32d7c724b69a843eac46d9f0d4f1.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
   
        <NavigationContainer>
          {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
          <MainStack.Navigator>
            <MainStack.Screen
              name="Registration"
              component={RegistrationScreen}
            />
            <MainStack.Screen name="Login" component={LoginScreen} />
            <MainStack.Screen
              name="Home"
              component={Home}
              options={{
                title: "Home Screen",
                headerStyle: { backgroundColor: "#f4511e" },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  fontSize: 20,
                },
                headerRight: () => (
                  <Button
                    onPress={() => alert("This is a Home button!")}
                    title="Press Me"
                    color="#000"
                  />
                ),
              }}
            />
          </MainStack.Navigator>

          <StatusBar style="auto" />
          {/* </TouchableWithoutFeedback> */}
        </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === "ios" ? 50 : 100,
    flex: 1,
    paddingTop: 20,
    ...Platform.select({
      ios: {
        backgroundColor: "#000",
      },
      android: {
        backgroundColor: "#fff",
      },
    }),

    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    paddingBottom: 10,
  },
  title: {
    borderColor: "#fff",
    paddingBottom: 20,
    backgroundColor: "#61dafb",
  },
  button: {
    borderColor: "#fff",
    backgroundColor: "#61dafb",
    borderRadius: 4,
  },
  buttonTitle: {
    borderColor: "#fff",
    padding: 6,
  },
});
