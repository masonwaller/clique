import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
  View
} from "react-native";
import Card from "./Card.js";

export default function home(props) {
  const windowHeight = Dimensions.get("window").height - 50;
  return (
    <SafeAreaView style={{ flex: 1, maxHeight: windowHeight }}>
      <ScrollView style={styles.view}>
        {props.cat.map(categ => {
          return <Card cat={categ.name} key={categ.id} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "pink"
  }
});
