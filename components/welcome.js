import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Alert
} from "react-native";
import Signup from "./signup.js";
import Login from "./login.js";

export default function Welcome(props) {
  const [num, setNum] = React.useState(1);

  const signup = (email, password, pw2, name, bio, age, job, school) => {
    if (password !== pw2) {
      Alert.alert("Passwords don't match");
    } else {
      fetch("http://127.0.0.1:3000/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user: {
            email: email,
            password: password,
            name: name,
            bio: bio,
            age: age,
            job: job,
            school: school
          }
        })
      })
        .then(res => res.json())
        .then(res => props.setSigned(res));
    }
  };
  const login = (email, password) => {
    fetch(`http://127.0.0.1:3000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password
        }
      })
    })
      .then(res => res.json())
      .then(res =>
        res.message
          ? Alert.alert("Email or password incorrect")
          : props.setSigned(res)
      );
  };
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
        <Signup setNum={setNum} signup={signup} />
      ) : (
        <Login setNum={setNum} login={login} />
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
