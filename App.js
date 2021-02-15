import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Tile from "./components/Tile";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TopicTile from "./components/TopicsTile";
import { data } from "./data";
import QuestionList from "./components/QuestionList";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    {data.map((sub) => (
      <Tile key={sub.subName} subject={sub} navigation={navigation} />
    ))}
  </View>
);
const TopicScreen = ({ navigation, route }) => {
  const topics = route.params.subject.topics;
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(route.params.subject)}</Text>
      {topics?.map((topic) => (
        <TopicTile
          key={topic.topicName}
          topic={topic}
          navigation={navigation}
        />
      ))}
    </View>
  );
};

const QuestionScreen = ({ navigation, route }) => {
  const questions = route.params.topic.questions;

  return <QuestionList questions={questions} />;
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Topics" component={TopicScreen} />
        <Stack.Screen name="Questions" component={QuestionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    flexWrap: "wrap",
  },
  tileGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "center",
    alignItems: "baseline",
    // alignContent: "center",
  },
});
