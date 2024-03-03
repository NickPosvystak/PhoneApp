import { Image, StyleSheet, Text, View } from "react-native";
import Car from "../Images/car.png";

export default function HomeDetails() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Image source={Car} style={{ width: 350, height: 200 }} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});