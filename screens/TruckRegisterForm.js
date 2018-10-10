import React from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";
import RadioDayPicker from "../components/RadioDayPicker"

export default class TruckRegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        truck_name: "",
        hours_of_operation: "",
        description: "",
        view: "root"
    };
  }
  render(){
    return(
    <View>
    <Text style={styles.header}>Register truck cont.</Text>
    <TextInput
      style={styles.input}
      autoCorrect={false}
      placeholder="Enter truck name..."
      value={this.state.truck_name}
      onChangeText={truck_name => this.setState({ truck_name })}
    />
    <TextInput
      style={styles.input}
      autoCorrect={false}
      placeholder="Enter description..."
      value={this.state.description}
      onChangeText={description => this.setState({ description })}
    />
    <RadioDayPicker/>
    <Button style = {styles.button_offset}
      title="Go back"
      onPress={() => {
        this.props.changeView("root");
      }}
    />
  </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    padding: 10,
    margin: 10
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginBottom: 5,
    paddingHorizontal: 5
  },
  text:{
    fontSize: 100,
    top: 100,
    textAlign: "right",
    left: -40
  },
  button_offset:{
    height: 30
  }
});
