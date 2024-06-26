import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";



export const RegistrationScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    Alert.alert("Credentials", `${email} + ${password}`);
    console.log("email: ", email);
    console.log("password: ", password);
    console.debug("Welcome!");
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container1}>
      <View style={styles.container}>
        <Text style={styles.title}>Registration</Text>
        <View style={styles.inputContainer}>
          <Text>Email</Text>
          <TextInput
            style={styles.emailInput}
            placeholder="Enter your email"
            autoCompleteType="email"
            value={email}
            onChangeText={setEmail}
          ></TextInput>
        </View>
        <View style={[styles.inputContainer, styles.lastChild]}>
          <Text>Password</Text>
          <TextInput
            style={styles.emailInput}
            placeholder="Enter your password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.button} onPress={signIn}>
          <Text style={styles.buttonTitle}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.buttonBox}>
          <Button
            title="Go to login"
            onPress={() => navigation.navigate("Login")}
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
    paddingTop: 20,
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
  buttonBox: {
    paddingTop: 30,
    width: 120,
  },
});
