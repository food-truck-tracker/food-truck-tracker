import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

var radio_props = [
  { label: 'Sunday', value: 0 },
  { label: 'Monday', value: 1 },
  { label: 'Tuesday', value: 2 },
  { label: 'Wednesday', value: 3 },
  { label: 'Thursday', value: 4 },
  { label: 'Friday', value: 5 },
  { label: 'Saturday', value: 6 }
];


export default class RadioDayPicker extends Component {
  constructor() {
    super()
    this.state = {
      isVisable: false
    }
  }

  handlePicker = () => {
    this.setState({
      isVisable: false
    })
  }

  hidePicker = () => {
    this.setState({
      isVisable: false
    })
  }

  showPicker = () => {
    this.setState({
      isVisible: true
    })
  }

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => { this.setState({ value: value }) }}
        />
        <Text style = {styles.offset}>asd</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    fontWeight: "bold",
    padding: 10,
    margin: 10
  },
  offset:{
    left: 100,
    top: 100
  }
});
