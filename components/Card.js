import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";

const { width, height } = Dimensions.get("window");
export default function home(props) {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() =>
          props.changeDisplay(
            props.categories.findIndex(item => item.name === props.cat.name) + 1
          )
        }
        style={styles.opacity}
      >
        <Text style={styles.text}>{props.cat.name}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: width * 0.8,
    height: height * 0.1,
    justifyContent: "center",
    backgroundColor: "yellow",
    alignSelf: "center",
    margin: 10,
    borderRadius: 30
  },
  text: {
    alignSelf: "center"
  },
  opacity: {
    justifyContent: "center",
    flex: 1
  }
});
