import { StatusBar } from "expo-status-bar";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import Car from "./Images/car.png";
import { useFonts } from "expo-font";
import { useState } from "react";

const COURSES = [
  {
    id: "45k6-j54k-4jth",
    title: "HTML",
  },
  {
    id: "4116-jfk5-43rh",
    title: "JavaScript",
  },
  {
    id: "4d16-5tt5-4j55",
    title: "React",
  },
  {
    id: "LG16-ant5-0J25",
    title: "React Native",
  },
];

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-BlackItalic_798e32d7c724b69a843eac46d9f0d4f1.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  const [courses, setCourses] = useState(COURSES);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Open up App.js to start working on your app!
      </Text>
      <Text style={{ fontFamily: "Inter-Black", fontSize: 30 }}>
        That what I changed in my app :)
      </Text>
      <Image source={Car} style={{ width: 350, height: 200 }} />
      <StatusBar style="auto" />

      <FlatList
        data={courses}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === "ios" ? 50 : 100,
    flex: 1,
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
  title: {
    borderColor: "#fff",
    paddingBottom: 20,
    backgroundColor: "#61dafb",
  },
});
