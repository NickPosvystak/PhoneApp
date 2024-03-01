import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export const LoginScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = () => {
    Alert.alert("Credentials", `${name}+${email} + ${password}`);
    console.log("name: ", name);
    console.log("email: ", email);
    console.log("password: ", password);
    console.debug("Welcome!");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.titleText}>Name</Text>
        <TextInput
          style={styles.emailInput}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        ></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.titleText}>Email</Text>
        <TextInput
          style={styles.emailInput}
          placeholder="Enter your email"
          autoCompleteType="email"
          value={email}
          onChangeText={setEmail}
        ></TextInput>
      </View>
      <View style={[styles.inputContainer, styles.lastChild]}>
        <Text style={styles.titleText}>Password</Text>
        <TextInput
          style={styles.emailInput}
          placeholder="Enter your password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        ></TextInput>
      </View>
      <TouchableOpacity style={styles.button} onPress={logIn}>
        <Text style={styles.buttonTitle}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 350,
    maxHeight: 380,
    backgroundColor: "rgb(26, 101, 232)",
    borderRadius: 25,
    padding: 20,
  },
  title: {
    color: "#fff",
    fontFamily: "Inter-Black",
    fontSize: 24,
    textAlign: "center",
    paddingBottom: 10,
  },
  lastChild: {
    paddingBottom: 40,
  },
  titleText: {
    color: "#fff"
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
    borderWidth: 1,
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