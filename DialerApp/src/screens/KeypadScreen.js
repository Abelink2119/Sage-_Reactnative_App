import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Linking,
} from "react-native";

const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];

export default function KeypadScreen() {
  const [number, setNumber] = useState("");

  const onPressButton = (digit) => {
    setNumber((prev) => prev + digit);
  };

  const onPressCall = () => {
    if (number.length > 0) {
      const url = `tel:${number}`;
      Linking.canOpenURL(url)
        .then((supported) => {
          if (!supported) {
            Alert.alert("Error", "Phone call not supported on this device");
          } else {
            return Linking.openURL(url);
          }
        })
        .catch((err) => Alert.alert("Error", err.message));
    } else {
      Alert.alert("Enter a number first!");
    }
  };

  const onPressDelete = () => {
    setNumber((prev) => prev.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.number}>{number || "Enter Number"}</Text>
      <View style={styles.buttonsContainer}>
        {buttons.map((btn) => (
          <TouchableOpacity
            key={btn}
            style={styles.button}
            onPress={() => onPressButton(btn)}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>{btn}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={styles.callButton}
          onPress={onPressCall}
          activeOpacity={0.8}
        >
          <Text style={styles.actionText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={onPressDelete}
          activeOpacity={0.8}
        >
          <Text style={styles.actionText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  number: {
    fontSize: 36,
    fontWeight: "700",
    marginBottom: 25,
    letterSpacing: 6,
    color: "#333",
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 35,
  },
  button: {
    width: 80,
    height: 80,
    margin: 10,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    elevation: 4,
  },
  buttonText: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
  actionButtons: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
  },
  callButton: {
    backgroundColor: "#388E3C",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 4,
  },
  deleteButton: {
    backgroundColor: "#D32F2F",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 25,
    elevation: 4,
  },
  actionText: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
  },
});
