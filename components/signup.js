import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  TextInput,
  Button
} from "react-native";

export default function Signup(props) {
  const [email, changeEmail] = React.useState("");
  const [password, changePW] = React.useState("");
  const [pw, changePW2] = React.useState("");
  return (
    <SafeAreaView style={styles.box}>
      <TextInput
        onChangeText={text => changeEmail(text)}
        value={email}
        style={styles.email}
        placeholder="   Email"
      ></TextInput>
      <TextInput
        onChangeText={text => changePW(text)}
        value={password}
        style={styles.email}
        placeholder="   Password"
      ></TextInput>
      <TextInput
        onChangeText={text => changePW2(text)}
        value={pw}
        style={styles.email}
        placeholder="   Confirm-Password"
      ></TextInput>
      <TouchableOpacity
        onPress={() => props.signup(email, password, pw)}
        style={styles.button}
      >
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
      <Button title="Login" onPress={() => props.setNum(3)} color="red" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: "center"
  },
  email: {
    backgroundColor: "white",
    width: "90%",
    height: "10%",
    alignSelf: "center",
    margin: "10%",
    borderRadius: 25
  },
  button: {
    width: "60%",
    height: "5%",
    alignSelf: "center",
    borderRadius: 30,
    backgroundColor: "pink",
    justifyContent: "center"
  },
  text: {
    alignSelf: "center"
  }
});
