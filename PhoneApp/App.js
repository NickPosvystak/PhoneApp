import { StatusBar } from "expo-status-bar";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Car from "./Images/car.png";
import { useFonts } from "expo-font";
import { useState } from "react";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-BlackItalic_798e32d7c724b69a843eac46d9f0d4f1.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        {/* <Image source={Car} style={{ width: 350, height: 200 }} /> */}
        <View style={styles.box}>
          <RegistrationScreen />
        </View>
        <View>
          <LoginScreen />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
