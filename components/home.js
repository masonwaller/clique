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
import Category from "./Category.js";

export default function home(props) {
  const [display, changeDisplay] = React.useState(0);
  const arrowFunc = ({ item }) => (
    <Card cat={item} changeDisplay={changeDisplay} categories={props.cat} />
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {display === 0 ? (
        <FlatList
          data={props.cat}
          renderItem={arrowFunc}
          keyExtractor={item => item.id.toString()}
          style={styles.view}
        />
      ) : (
        <Category
          usercat={props.usercat}
          setUsercat={props.setUsercat}
          setSigned={props.setSigned}
          cat={props.cat[display - 1]}
          changeDisplay={changeDisplay}
          signed={props.signed}
        />
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "pink"
  }
});
