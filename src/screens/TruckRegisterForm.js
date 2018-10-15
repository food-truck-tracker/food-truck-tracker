import React from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";
import RadioDayPicker from "../components/RadioDayPicker"
import MultipleTimeInput from "../components/MultipleTimeInput"
import ProfileScreen from "./ProfileScreen"

export default class TruckRegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      truck_name: "",
      hours_of_operation: "",
      description: "",
      view: "root",
      current_day: 0,
      concat_sunday_open: "",
      concat_sunday_closed: "",
      concat_monday_open: "",
      concat_monday_closed: "",
      concat_tuesday_open: "",
      concat_tuesday_closed: "",
      concat_wednesday_open: "",
      concat_wednesday_closed: "",
      concat_thursday_open: "",
      concat_thursday_closed: "",
      concat_friday_open: "",
      concat_friday_closed: "",
      concat_saturday_open: "",
      concat_saturday_closed: "",
    };
  }

  onUpdate = (val) => {
    this.setState({
      current_day: val
    })
  };

  onUpdateDay = (monday_open_time, monday_close_time, tuesday_open_time, tuesday_close_time,
                 wednesday_open_time, wednesday_close_time, thursday_open_time, thursday_close_time,
                 friday_open_time, friday_close_time, saturday_open_time, saturday_close_time,
                 sunday_open_time, sunday_close_time) => {
      

  }

  changeView = view => {
    this.setState({ view: view });
  }
  render() {
    if (this.state.view == "Continue") {
      return <ProfileScreen />
    }
    return (
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
        <Text fontSize='20'> Enter hours of operation: </Text>
        <View style={{ flexDirection: 'row' }}>
          <RadioDayPicker
            onUpdate={this.onUpdate} />
          <MultipleTimeInput day={this.state.current_day} />
        </View>
        <Button style={styles.button_offset}
          title="Continue"
          onPress={() => {
            this.changeView("Continue");
          }}
        />
        <Button style={styles.button_offset}
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
  text: {
    fontSize: 100,
    top: 100,
    textAlign: "right",
    left: -40
  },
  button_offset: {
    height: 30
  }
});
