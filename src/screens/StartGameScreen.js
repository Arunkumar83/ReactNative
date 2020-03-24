import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}> Select a Number! </Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter number" />
        <View style={styles.buttonContainer}>
          <Button title="Confirm" onPress={() => {}} />
          <Button title="Reset" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 10
  },
  title: {
    fontSize: 18
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  }
});

export default StartGameScreen;
