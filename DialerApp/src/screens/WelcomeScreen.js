import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.phoneBox}
        onPress={() => navigation.navigate("MainTabs")}
      >
        <Ionicons name="call" size={60} color="#fff" />
      </Pressable>
      <Text style={styles.title}>Dialer</Text>
      <Text style={styles.subtitle}>Tap the phone to start</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    alignItems: "center",
    justifyContent: "center",
  },
  phoneBox: {
    width: 120,
    height: 120,
    backgroundColor: "#0a84ff",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    color: "#0a84ff",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginTop: 5,
  },
});
