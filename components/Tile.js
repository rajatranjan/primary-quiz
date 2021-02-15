import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Tile = ({ subject, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Topics", { subject })}
    >
      <View style={styles.tileBody}>
        <Text>{subject.subName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Tile;

const styles = StyleSheet.create({
  tileBody: {
    width: 100,
    height: 100,
    borderColor: "black",
    borderWidth: 2,
    margin: 3,
  },
});
