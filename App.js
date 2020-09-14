import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import Welcome from "./components/welcome.js";
import Home from "./components/home.js";

export default function App() {
  const [signed, setSigned] = React.useState(false);
  const [cat, setCat] = React.useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/categories")
      .then(data => data.json())
      .then(data => setCat(data.categories))
      .catch(error => console.error(error));
  }, []);
  return (
    <View style={styles.container}>
      {signed ? <Home cat={cat} /> : <Welcome setSigned={setSigned} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
