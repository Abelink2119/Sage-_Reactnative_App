import React, { useState } from "react";
import { SafeAreaView, Text, Pressable, StyleSheet } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Counter</Text>
      <Text style={styles.count}>{count}</Text>

      <Pressable
        style={styles.button}
        android_ripple={{ color: "#ddd" }}
        onPress={() => setCount(count - 1)}
      >
        <Text style={styles.btnText}>-1</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        android_ripple={{ color: "#ddd" }}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.btnText}>+1</Text>
      </Pressable>

      <Pressable
        style={[styles.button, { backgroundColor: "#10b981" }]}
        android_ripple={{ color: "#fff" }}
        onPress={() => setCount(0)}
      >
        <Text style={styles.btnText}>Reset</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 10 },
  count: { fontSize: 48, marginBottom: 20 },
  button: {
    backgroundColor: "#3b82f6",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 5,
    minWidth: 100,
    alignItems: "center",
  },
  btnText: { fontSize: 18, color: "#fff", fontWeight: "bold" },
});
