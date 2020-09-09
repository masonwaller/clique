import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import Welcome from "./components/welcome.js";

export default function App() {
  const [signed, setSigned] = React.useState(false);
  return (
    <View style={styles.container}>
      {signed ? <View /> : <Welcome setSigned={setSigned} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
