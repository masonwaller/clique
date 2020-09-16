import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  View,
  FlatList
} from "react-native";
import Card from "./Card.js";

export default function home(props) {
  const arrowFunc = ({ item }) => <Card cat={item.name} />;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={props.cat}
        renderItem={arrowFunc}
        keyExtractor={item => item.id}
        style={styles.view}
      />
      {/* {props.cat.map(categ => {
          return <Card cat={categ.name} key={categ.id} />;
        })} */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "pink"
  }
});
