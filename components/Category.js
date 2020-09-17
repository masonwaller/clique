import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default function Category(props) {
  const join = () => {
      if(usercat.includes(props.cat.id)){
        
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
      .then(res => console.log(res))
    let placeholder = props.usercat
    placeholder.push(props.cat.id)
    setUsercat(placeholder)
}
  };
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{props.cat.name}</Text>
      <Text style={styles.desc}>{props.cat.desc}</Text>
      <TouchableOpacity onPress={() => join()} style={styles.join}>
        <Text>{(usercat.includes(props.cat.id))? "Leave Group" : "Join Group"</Text>
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
