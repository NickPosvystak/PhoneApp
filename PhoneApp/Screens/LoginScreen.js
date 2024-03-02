import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container1}>
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
        <View style={styles.buttonBox}>
          <Button
            title="Go to Home"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container1: {
    height: Platform.OS === "ios" ? 50 : 100,
    flex: 1,
    // paddingTop: 20,
    ...Platform.select({
      ios: {
        backgroundColor: "#000",
      },
      android: {
        backgroundColor: "#000",
      },
    }),

    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    width: 350,
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
    color: "#fff",
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
  buttonBox: {
    paddingTop: 30,
    width: 120,
  },
});
