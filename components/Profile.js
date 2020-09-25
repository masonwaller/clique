import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

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
  }
});
