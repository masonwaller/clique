import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Profile(props) {
  return (
    <View style={styles.view}>
      <Text>{props.user ? props.user.name : "Loading Users"}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    height: height * 0.6,
    width: width * 0.8,
    margin: 10,
    padding: 10,
    borderRadius: 10
  }
});
