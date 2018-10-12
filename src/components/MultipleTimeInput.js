import React, { Component } from 'react';
import { Text, View, StyleSheet, } from "react-native";
import { CheckBox } from 'react-native-elements'

var hour_of_operations = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

export default class MultipleTimeInput extends Component {
  constructor() {
    super()
    this.state = {
      sunday_input: "",
      monday_input: "",
      tuesday_input: "",
      wednesday_input: "",
      thursday_input: "",
      friday_input: "",
      saturday_input: ""
    }
  }

  render() {
    if (this.props.day == 0) {
      return (
        <View>

        </View>
      );
    }
    if (this.props.day == 1) {
      return (
        <View><Text>Your input was tuesday</Text></View>
      );
    }
  }
}


const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    fontWeight: "bold",
    padding: 10,
    margin: 10
  },
  offset: {
    left: 100,
    top: 100
  }
});
