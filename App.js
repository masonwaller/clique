import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import Welcome from "./components/welcome.js";
import Home from "./components/home.js";

export default function App() {
  const [signed, setSigned] = React.useState(false);
  const [cat, setCat] = React.useState([]);
  const [usercat, setUsercat] = React.useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/categories")
      .then(data => data.json())
      .then(data => setCat(data.categories))
      .catch(error => console.error(error));
  }, []);
  useEffect(() => {
    console.log(signed);
    if (signed) {
      if (signed.user.user_categories) {
        let placeholder = [];
        for (let i = 0; i < signed.user.user_categories.length; i++) {
          placeholder.push(signed.user.user_categories[i].category_id);
        }
        setUsercat(placeholder);
      }
    }
  }, [signed]);
  return (
    <View style={styles.container}>
      {signed ? (
        <Home
          cat={cat}
          signed={signed}
          usercat={usercat}
          setUsercat={setUsercat}
          setSigned={setSigned}
        />
      ) : (
        <Welcome setSigned={setSigned} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
