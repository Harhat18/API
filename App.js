import React from "react";
import { Text, View, Button } from "react-native";
import axios from "axios";

function App() {
  function fetchData() {
    const response = axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  return (
    <View>
      <Text>Hello API</Text>
      <Button title="Fetch Data" onPress={fetchData} />
    </View>
  );
}

export default App;
