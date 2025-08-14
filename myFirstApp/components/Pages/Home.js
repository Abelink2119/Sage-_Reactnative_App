import React from "react";
import { ActivityIndicator, FlatList, Text, View, Button } from "react-native";

export default function Home({ navigation }) {
  const items = Array.from({ length: 15 }, (_, i) => `Home Page ${i + 1}`);

  const renderItem = ({ item }) => (
    <View style={{ padding: 15, alignItems: "center" }}>
      <Text>{item}</Text>
      <Button title="About" onPress={() => navigation.navigate("About")} />
      <ActivityIndicator size="large" color="blue" />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {/* Horizontal Lazy Load List */}
      <FlatList
        data={items}
        keyExtractor={(item, index) => "h-" + index}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={{ backgroundColor: "#eef" }}
      />

      {/* Vertical Lazy Load List */}
      <FlatList
        data={items}
        keyExtractor={(item, index) => "v-" + index}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
