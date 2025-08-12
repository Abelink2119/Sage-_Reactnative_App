import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../redux/tasksSlice";

export default function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <View style={styles.item}>
      <Switch
        value={task.completed}
        onValueChange={() => dispatch(toggleTask(task.id))}
      />
      <Text style={[styles.title, task.completed && styles.completed]}>
        {task.title}
      </Text>
      <TouchableOpacity onPress={() => dispatch(deleteTask(task.id))}>
        <Text style={styles.delete}>❌</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: { flexDirection: "row", alignItems: "center", padding: 10 },
  title: { flex: 1, fontSize: 16 },
  completed: { textDecorationLine: "line-through", color: "gray" },
  delete: { fontSize: 18, marginLeft: 10 },
});
