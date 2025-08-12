import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  Pressable,
  ActivityIndicator,
  Switch,
} from "react-native";

export default function App() {
  const [on, setOn] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>My First App</Text>

      {/* Image from URL */}
      {/* 
      <Image
        source={{
          uri: "https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-developers-are-coding-programs-on-computers-programmers-are-analyzing-data-png-image_11902650.png",
        }}
        style={{ width: 100, height: 100 }}
      /> 
      */}

      {/* Local Image */}
      <Image
        source={require("./assets/Lion.jpg")}
        style={{ width: 100, height: 100 }}
      />

      <TextInput
        placeholder="Enter your Name"
        style={{ borderWidth: 1, padding: 10, margin: 10, width: 200 }}
      />

      <Button title="Click Me" onPress={() => alert("clicked")} />

      <Pressable
        onPress={() => alert("clicked")}
        style={{
          backgroundColor: "skyblue",
          padding: 10,
          marginTop: 10,
          borderRadius: 5,
        }}
      >
        <Text>Click Me</Text>
      </Pressable>

      {/* Switch */}
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <Switch value={on} onValueChange={setOn} />
        <Text>{on ? "Switch is ON" : "Switch is OFF"}</Text>
      </View>

      {/* Optional Loader */}
      <ActivityIndicator size="large" color="blue" style={{ marginTop: 20 }} />

      <StatusBar style="auto" />
    </View>
  );
}
