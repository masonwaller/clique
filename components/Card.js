import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export default function home(props) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{props.cat}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: width * 0.8,
    height: height * 0.2,
    justifyContent: "center",
    backgroundColor: "yellow",
    alignSelf: "center",
    margin: 10,
    borderRadius: 30
  },
  text: {
    alignSelf: "center"
  }
});
