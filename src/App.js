import React, { useState } from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import MealNavigator from "./navigation/MealNavigator";

const App = () => {
  return (
    // <View style={styles.screen}>
    //  <Header title="Guess The Number" />
    //<StartGameScreen />
    //</View>
    <MealNavigator />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default App;
