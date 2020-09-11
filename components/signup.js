import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  View
} from "react-native";

export default function Signup(props) {
  const [email, changeEmail] = React.useState("");
  const [password, changePW] = React.useState("");
  const [pw, changePW2] = React.useState("");
  const [name, changeName] = React.useState("");
  const [bio, changeBio] = React.useState("");
  const [age, changeAge] = React.useState("");
  const [job, changeJob] = React.useState("");
  const [school, changeSchool] = React.useState("");
  const [num, changeNum] = React.useState(1);
  return (
    <SafeAreaView style={styles.box}>
      {num == 1 ? (
        <View style={styles.box}>
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
          <TouchableOpacity onPress={() => changeNum(2)} style={styles.button}>
            <Text style={styles.text}>Next</Text>
          </TouchableOpacity>
          <Button title="Login" onPress={() => props.setNum(3)} color="red" />
        </View>
      ) : num === 2 ? (
        <View style={styles.box}>
          <TextInput
            onChangeText={text => changeName(text)}
            value={name}
            style={styles.email}
            placeholder="   Name"
          ></TextInput>
          <TextInput
            onChangeText={text => changeAge(text)}
            value={age}
            style={styles.email}
            placeholder="   Age"
          ></TextInput>
          <TextInput
            onChangeText={text => changeBio(text)}
            value={bio}
            style={styles.email}
            placeholder="   Bio (Can always change later)"
          ></TextInput>
          <TouchableOpacity onPress={() => changeNum(3)} style={styles.button}>
            <Text style={styles.text}>Next</Text>
          </TouchableOpacity>
          <Button title="Back" onPress={() => changeNum(1)} color="red" />
        </View>
      ) : (
        <View style={styles.box}>
          <TextInput
            onChangeText={text => changeJob(text)}
            value={job}
            style={styles.email}
            placeholder="   Job (Can be left blank)"
          ></TextInput>
          <TextInput
            onChangeText={text => changeSchool(text)}
            value={school}
            style={styles.email}
            placeholder="   School (Can be left blank)"
          ></TextInput>
          <TouchableOpacity
            onPress={() =>
              props.signup(email, password, pw, name, bio, age, job, school)
            }
            style={styles.button}
          >
            <Text style={styles.text}>Sign Up</Text>
          </TouchableOpacity>
          <Button title="Back" onPress={() => changeNum(2)} color="red" />
        </View>
      )}
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
