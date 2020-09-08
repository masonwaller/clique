import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import Signup from "./signup.js";
import Login from "./login.js";

export default function Welcome() {
  const [num, setNum] = React.useState(1);
  return (
    <ImageBackground
      source={require("../assets/friends.jpg")}
      style={styles.image}
    >
      {num === 1 ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.text2}>Clique</Text>
          </View>
          <TouchableOpacity onPress={() => setNum(3)} style={styles.sign}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setNum(2)} style={styles.register}>
            <Text style={styles.text}>Sign Up</Text>
          </TouchableOpacity>
        </SafeAreaView>
      ) : num === 2 ? (
        <Signup />
      ) : (
        <Login />
      )}
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
    margin: 100
  },
  header: {
    flex: 1
  },
  image: {
    flex: 1
  }
});
