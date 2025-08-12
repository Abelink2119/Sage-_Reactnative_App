import React from "react";
import { View, Button, StyleSheet } from "react-native";
import TaskList from "../components/TaskList";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Add Task"
        onPress={() => navigation.navigate("Add Task")}
      />
      <Button title="About" onPress={() => navigation.navigate("About")} />
      <TaskList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
});
