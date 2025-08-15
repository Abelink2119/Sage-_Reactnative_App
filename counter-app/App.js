import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { SafeAreaView, Text, Pressable, StyleSheet } from "react-native";
import { store, increment, decrement, reset } from "./src/store";

function CounterScreen() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Counter</Text>
      <Text style={styles.count}>{count}</Text>

      <Pressable
        style={styles.button}
        android_ripple={{ color: "#ddd" }}
        onPress={() => dispatch(decrement())}
      >
        <Text style={styles.btnText}>-1</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        android_ripple={{ color: "#ddd" }}
        onPress={() => dispatch(increment())}
      >
        <Text style={styles.btnText}>+1</Text>
      </Pressable>

      <Pressable
        style={[styles.button, { backgroundColor: "#10b981" }]}
        android_ripple={{ color: "#fff" }}
        onPress={() => dispatch(reset())}
      >
        <Text style={styles.btnText}>Reset</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <CounterScreen />
    </Provider>
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
