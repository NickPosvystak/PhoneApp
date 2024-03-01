import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export const RegistrationScreen = () => {
  const signIn = () => {
    console.debug("Welcome!");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>
      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput
          style={styles.emailInput}
          placeholder="Enter your email"
          autoComplete="email"
        ></TextInput>
      </View>
      <View style={[styles.inputContainer, styles.lastChild]}>
        <Text>Password</Text>
        <TextInput
          style={styles.emailInput}
          placeholder="Enter your password"
          secureTextEntry={true}
        ></TextInput>
      </View>
      <TouchableOpacity style={styles.button} onPress={signIn}>
        <Text style={styles.buttonTitle}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 350,
    maxHeight: 349,
    backgroundColor: "rgb(255, 108, 0)",
    borderRadius: 25,
    padding: 20,
  },
  title: {
    color: "#fff",
    fontFamily: "Inter-Black",
    fontSize: 24,
    textAlign: "center",
    paddingBottom: 30,
  },
  lastChild: {
    paddingBottom: 40,
  },
  emailInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  button: {
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#fff",
    width: 80,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttonTitle: {
    fontFamily: "Inter-Black",
    fontSize: 16,
  },
});