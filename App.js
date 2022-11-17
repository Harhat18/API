import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import UserCard from "./src/components/UserCard";

const URL = "https://jsonplaceholder.typicode.com/users";
function App() {
  const [userList, setUserList] = useState([true]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    // const response = await axios.get(URL);
    // setLoading(false);
    // setUserList(response.data);
    axios.get(URL).then((response) => {
      setLoading(false);
      setUserList(response.data);
    });
  }

  const renderUser = ({ item }) => (
    <UserCard name={item.name} email={item.email} username={item.username} />
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList data={userList} renderItem={renderUser} />
      )}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
});
