import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import Welcome from "./components/welcome.js";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Welcome></Welcome>
      {/* <Text>Open up App to start working on your app!</Text>
      <Image source={require("./assets/icon.png")} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
