import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

export const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 350,
    height: 349,
    backgroundColor: "rgb(255, 108, 0)",
    borderRadius: 25,
  },
  title: {
    color: "#fff",
    fontFamily: "Inter-Black",
    fontSize: 24,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
});
