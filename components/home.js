import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from "react-native";
import Card from "./Card.js";

export default function home(props) {
  return (
    <SafeAreaView style={styles.box}>
      <ScrollView style={styles.view}>
        {props.cat.map(categ => (
          <Card cat={categ} key={categ.name} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: "pink"
  },
  box: {
    flex: 1
  }
});
