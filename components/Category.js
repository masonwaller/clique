import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default function Category(props) {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{props.cat.name}</Text>
      <Text style={styles.desc}>{props.cat.desc}</Text>
      <TouchableOpacity
        onPress={() => props.changeDisplay(0)}
        style={styles.button}
      >
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center"
  },
  title: {
    fontSize: 50
  },
  desc: {
    fontSize: 20,
    textAlign: "center"
  },
  button: {
    alignSelf: "center",
    backgroundColor: "yellow",
    borderRadius: 10,
    padding: 15,
    position: "absolute",
    bottom: 15
  }
});
