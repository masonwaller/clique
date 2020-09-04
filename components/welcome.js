import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function Welcome() {
  return (
    <ImageBackground
      source={require("../assets/friends.jpg")}
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text2}>Clique</Text>
        </View>
        <View style={styles.sign}>
          <Text style={styles.text}>Login</Text>
        </View>
        <View style={styles.register}>
          <Text style={styles.text}>Sign Up</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  register: {
    backgroundColor: "dodgerblue",
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "center"
  },
  sign: {
    backgroundColor: "green",
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "center"
  },
  text: {
    alignSelf: "center",
    fontSize: 25
  },
  text2: {
    alignSelf: "center",
    fontSize: 50,
    margin: 50
  },
  header: {
    flex: 1
  },
  image: {
    flex: 1
    // resizeMode: "cover",
    // justifyContent: "center"
  }
});
