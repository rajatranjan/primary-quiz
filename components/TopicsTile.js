import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TopicTile = ({ topic, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Questions", { topic })}
    >
      <View style={styles.tileBody}>
        <Text>{topic.topicName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TopicTile;

const styles = StyleSheet.create({
  tileBody: {
    width: 100,
    height: 100,
    borderColor: "blue",
    borderWidth: 2,
    margin: 3,
  },
});
