import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const Card = ({ title }) => {
  return (
    <TouchableOpacity style={styles.Button2}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default function Props() {
  return (
    <View style={styles.container}>
      <Card title="monkey" />
      <Card title="One Piece" />
      <Card title="Naruto" />
      <Card title="Saitama" />
      <Card title="Dragon ball" />
      <Card title="Boku No Hero" />
    </View>

  );
}

const styles = StyleSheet.create({
  Button2: {
    width: 300,
    height: 30,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 16,
  },
});