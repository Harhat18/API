import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserCard = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.username}</Text>
      <View style={styles.inner_container}>
        <Text>{props.name}</Text>
        <Text style={styles.email}>{props.email}</Text>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
    marginVertical: 5,
    padding: 10,
  },
  email: {
    fonstSize: 12,
    fontStyle: "italic",
    color: "gray",
    marginLeft: 5,
  },
  username: {
    fontWeight: "bold",
    fonstSize: 18,
  },
  inner_container: {
    flexDirection: "row",
  },
});
