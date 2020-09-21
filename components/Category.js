import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default function Category(props) {
  const join = () => {
    if (props.usercat.includes(props.cat.id)) {
      fetch(
        `http://127.0.0.1:3000/user_categories/${
          props.signed.user.user_categories.find(
            item => item.category_id === props.cat.id
          ).id
        }`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
      );
      let place = props.usercat;
      place.splice(
        props.usercat.findIndex(item => item === props.cat.id),
        1
      );
      props.setUsercat(place);
      props.changeDisplay(0);
    } else {
      fetch("http://127.0.0.1:3000/user_categories", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          usercat: {
            user_id: props.signed.user.id,
            category_id: props.cat.id
          }
        })
      })
        .then(res => res.json())
        .then(res => props.setSigned(res));
    }
  };
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{props.cat.name}</Text>
      <Text style={styles.desc}>{props.cat.desc}</Text>
      <TouchableOpacity onPress={() => join()} style={styles.join}>
        <Text>
          {props.usercat.includes(props.cat.id) ? "Leave Group" : "Join Group"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.changeDisplay(0)}
        style={styles.button}
      >
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center"
  },
  title: {
    fontSize: 50
  },
  desc: {
    fontSize: 20,
    textAlign: "center"
  },
  button: {
    alignSelf: "center",
    backgroundColor: "yellow",
    borderRadius: 10,
    padding: 15,
    position: "absolute",
    bottom: 15
  },
  join: {
    alignSelf: "center",
    backgroundColor: "yellow",
    borderRadius: 10,
    padding: 15
  }
});
