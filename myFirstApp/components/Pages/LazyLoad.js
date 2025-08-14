import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";

export default function LazyLoad() {
  const data = Array.from({ length: 100 }, (_, i) => ({
    id: i.toString(),
    name: `Item ${i + 1}`,
  }));

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
        initialNumToRender={10}
        onEndReachedThreshold={0.5}
        onEndReached={() => console.log("Reached end!")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  text: {
    fontSize: 18,
  },
});
