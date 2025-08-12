import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput /* Pressable, ActivityIndicator,  Switch,*/,
} from "react-native";

export default function App() {
  /*  const [on, onset] = { usestate };*/
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontsize: 30 }}>My First App</Text>
      {/*
      <Image
        source={{
          url: "https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-developers-are-coding-programs-on-computers-programmers-are-analyzing-data-png-image_11902650.png",
        }}
        style={{ width: 100, height: 100 }}
      />*/}

      <Image
        source={require("./assets/Lion.jpg")}
        style={{ width: 100, height: 100 }}
      />
      <TextInput
        placeholder="Enter your Name"
        style={{ borderWidth: 1, padding: 20 }}
      />
      <Button title="click me" onPress={() => alert("clicked")} />
      {/* <Pressable onPress={() => alert("pressable")} />
      <Text>Click me</Text> */}
    </View>
  );
}
