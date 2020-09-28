import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function Profile(props) {
  return (
    <View style={styles.view}>
      <Text style={styles.name}>
        {props.user ? props.user.name : "Loading Users"}
      </Text>
      <Text style={styles.job}>
        {props.user
          ? props.user.school
            ? props.user.job
              ? `${props.user.school}       ${props.user.job}`
              : `${props.user.school}`
            : props.user.job
            ? `${props.user.job}`
            : null
          : "Loading Content"}
      </Text>
      <Text style={styles.bio}>
        {props.user ? (props.user.bio ? props.user.bio : null) : "Loading Bio"}
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Nope</Text>
        </TouchableOpacity>
      </View>
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
    borderRadius: 10,
    alignItems: "flex-start"
  },
  name: {
    fontSize: 50,
    margin: 15
  },
  job: {
    fontSize: 25,
    marginLeft: 20
  },
  bio: {
    marginLeft: 20,
    fontSize: 20,
    marginTop: 5
  },
  buttons: {
    position: "absolute",
    width: "100%",
    bottom: 5,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  button: {
    fontSize: 20,
    margin: 15
  }
});
