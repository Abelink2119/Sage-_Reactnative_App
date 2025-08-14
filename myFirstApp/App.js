import * as React from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// Home Screen
function HomeScreen({ navigation }) {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Home Page</Text>
      <View style={styles.buttonSpacing}>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate("About")}
        />
      </View>
      <View style={styles.buttonSpacing}>
        <Button
          title="Go to Lazy Load"
          onPress={() => navigation.navigate("LazyLoad")}
        />
      </View>
      <View style={styles.buttonSpacing}>
        <Button
          title="Go to User Info"
          onPress={() => navigation.navigate("UserInfo")}
        />
      </View>
    </View>
  );
}

// About Screen
function AboutScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>About Page</Text>
    </View>
  );
}

// Lazy Load Screen
function LazyLoadScreen() {
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

// User Info Screen with error reload
function UserInfoScreen() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const fetchUsers = () => {
    setLoading(true);
    setError(null);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Loading user data...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "red", marginBottom: 10 }}>Error: {error}</Text>
        <Button title="Reload" onPress={fetchUsers} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {users.map((user) => (
        <View key={user.id} style={styles.userCard}>
          <Text style={styles.userTitle}>{user.name}</Text>
          <Text>Username: {user.username}</Text>
          <Text>Email: {user.email}</Text>
          <Text>Address:</Text>
          <Text> Street: {user.address.street}</Text>
          <Text> Suite: {user.address.suite}</Text>
          <Text> City: {user.address.city}</Text>
          <Text> Zipcode: {user.address.zipcode}</Text>
          <Text>
            {" "}
            Geo: lat {user.address.geo.lat}, lng {user.address.geo.lng}
          </Text>
          <Text>Phone: {user.phone}</Text>
          <Text>Website: {user.website}</Text>
          <Text>Company:</Text>
          <Text> Name: {user.company.name}</Text>
          <Text> CatchPhrase: {user.company.catchPhrase}</Text>
          <Text> BS: {user.company.bs}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

// App Component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="LazyLoad" component={LazyLoadScreen} />
        <Stack.Screen name="UserInfo" component={UserInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSpacing: {
    marginVertical: 10,
    width: "70%",
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    padding: 10,
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
  userCard: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  userTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
