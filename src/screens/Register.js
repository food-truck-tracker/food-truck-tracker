import React from "react";
import { StyleSheet, Text, ScrollView, Button, TextInput } from "react-native";
import { CheckBox } from "react-native-elements";

import ProfileScreen from "./ProfileScreen";
import TruckRegisterForm from "./TruckRegisterForm";

export default class Registerform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "root",
      full_name: "",
      username: "",
      email: "",
      password: "",
      re_password: "",
      check_box_value: false,
    };
  }

  _checkBox = () => {
    this.setState({
      check_box_value: !this.state.check_box_value,
    });
  };

  _changeView = view => {
    this.setState({ view });
  };

  render() {
    return (
      <>
        {this.state.view === "vendor" ? (
          <TruckRegisterForm changeView={this._changeView} />
        ) : (
          <ScrollView>
            <Text style={styles.header}>Register</Text>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              placeholder="Enter full name..."
              value={this.state.full_name}
              onChangeText={full_name => this.setState({ full_name })}
            />
            <TextInput
              style={styles.input}
              autoCorrect={false}
              placeholder="Enter email..."
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
            <TextInput
              style={styles.input}
              autoCorrect={false}
              placeholder="Enter password..."
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              secureTextEntry={true}
            />
            <TextInput
              style={styles.input}
              autoCorrect={false}
              placeholder="Re-enter password..."
              value={this.state.re_password}
              onChangeText={re_password => this.setState({ re_password })}
              secureTextEntry={true}
            />
            <CheckBox
              center
              containerStyle={styles.CheckBox}
              title="Are you a vendor?"
              onPress={this._checkBox}
              checked={this.state.check_box_value}
            />

            <Button
              title="Continue"
              onPress={() => {
                if (this.state.check_box_value) {
                  this.setState({ view: "vendor" });
                } else {
                  this.props
                    .registerUser(
                      this.state.full_name,
                      this.state.email,
                      this.state.password
                    )
                    .then(() => {
                      this.props.changeView("root");
                    });
                }
              }}
            />

            <Button
              title="Go back"
              onPress={() => {
                this.props.changeView("root");
              }}
            />
          </ScrollView>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    padding: 10,
    margin: 10,
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.7)",
    marginBottom: 5,
    paddingHorizontal: 5,
  },
  text: {
    fontSize: 100,
    top: 100,
    textAlign: "right",
    left: -40,
  },
  CheckBox: {
    width: 200,
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  button_offset: {
    height: 30,
  },
});
