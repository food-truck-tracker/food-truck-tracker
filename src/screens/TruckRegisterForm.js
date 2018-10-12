import React from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";
import RegisterFormQuestion from "./RegisterFormQuestion";

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
      placeholder="Enter hours of operation..."
      value={this.state.hours_of_operation}
      onChangeText={hours_of_operation => this.setState({ hours_of_operation })}
    />
    <TextInput
      style={styles.input}
      autoCorrect={false}
      placeholder="Enter description..."
      value={this.state.description}
      onChangeText={description => this.setState({ description })}
    />
    <Button
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
    fontSize: 26,
    fontWeight: "bold",
    padding: 10,
    margin: 10
  }
});
