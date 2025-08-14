import { useState } from "react";
import { TextInput, View, Text, Button } from "react-native";

export default function UserInput() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setPassword("");
    setSubmitted(false);
  };

  return (
    <View style={{ padding: 20 }}>
      {/* Name Input */}
      <TextInput
        placeholder="Enter your Name"
        value={name}
        onChangeText={setName}
        style={{
          borderWidth: 2,
          padding: 10,
          marginBottom: 10,
          borderRadius: 5,
        }}
      />

      {/* Password Input */}
      <TextInput
        placeholder="Enter your Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          borderWidth: 2,
          padding: 10,
          marginBottom: 10,
          borderRadius: 5,
        }}
      />

      {/* Buttons */}
      <View style={{ marginBottom: 10 }}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button title="Reset" onPress={handleReset} color="red" />
      </View>

      {/* Display Submitted Info */}
      {submitted && (
        <Text style={{ marginTop: 10, fontSize: 16 }}>
          Your Name: {name} {"\n"}
          Your Password: {password}
        </Text>
      )}
    </View>
  );
}
