import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import MultipleTimeInput from './MultipleTimeInput';



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
      isVisable: false,
      current_value: 0,
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

  _button_pressed = value => {
    (value) => {this.setState({value:value})}
    this.setState({current_value: value})
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
          onPress={this._button_pressed}
        />
        <Text>{this.state.current_value}</Text>
        <MultipleTimeInput day = {this.state.current_value}/>
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
