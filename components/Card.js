import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function home(props) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{props.cat}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: "80%",
    height: "20%",
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
