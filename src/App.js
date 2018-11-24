import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

// main navigator
import MainTabNavigator from "./navigation/MainTabNavigator";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MainTabNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
});
