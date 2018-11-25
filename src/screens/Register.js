import React from "react";
import { StyleSheet, ScrollView, TextInput, View } from "react-native";
import { Button, Text } from "@shoutem/ui";
import { CheckBox } from "react-native-elements";

import ProfileScreen from "./ProfileScreen";
import TruckRegisterForm from "./TruckRegisterForm";

export default class Registerform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "root",
      full_name: "",
      email: "",
      password: "",
      re_password: "",
      check_box_value: false
    };
  }

  // switches the checkbox state
  _checkBox = () => {
    this.setState({
      check_box_value: !this.state.check_box_value
    });
  };

  // changes view from given variable
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
              autoCapitalize="none"
              placeholder="Enter full name..."
              value={this.state.full_name}
              onChangeText={full_name => this.setState({ full_name })}
            />
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
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
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              autoCorrect={false}
              placeholder="Re-enter password..."
              value={this.state.re_password}
              onChangeText={re_password => this.setState({ re_password })}
              secureTextEntry={true}
              autoCapitalize="none"
            />
            <CheckBox
              center
              containerStyle={styles.CheckBox}
              title="Are you a vendor?"
              onPress={this._checkBox}
              checked={this.state.check_box_value}
            />
            <View style={{ paddingLeft: 32, paddingRight: 32 }}>
            <Button
              style={styles.button}
              styleName="secondary"
              disabled={this.props.isFetching}
              onPress={() => {
                // grab vars from state
                const {
                  check_box_value,
                  full_name,
                  email,
                  password,
                  re_password
                } = this.state;

                // check if we need to go to vendor truck info page
                if (check_box_value) {
                  this.props
                    .registerUser(full_name, email, password)
                    .then(() => {
                      this.setState({ view: "vendor" });
                    });
                } else {
                  // force input on fields
                  if (!full_name || !email || !password || !re_password) {
                    alert("Input all fields!");
                    return;
                  }
                  // force password match
                  if (password !== re_password) {
                    alert("Passwords don't match!");
                    return;
                  }
                  // attempt to register
                  this.props
                    .registerUser(full_name, email, password)
                    .then(() => {
                      this.props.changeView("root");
                    });
                }
              }}
            >
            <Text>Continue</Text>
            </Button>

            <Button
              style={styles.button}
              styleName="secondary"
              onPress={() => {
                this.props.changeView("root");
              }}
            >
            <Text>Go back</Text>
            </Button>
            </View>
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
    margin: 10
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.7)",
    padding: 15,
    margin: 20,
  },
  text: {
    fontSize: 100,
    top: 100,
    textAlign: "right",
    left: -40
  },
  CheckBox: {
    width: 200,
    backgroundColor: "rgba(255, 255, 255, 0)"
  },
  button_offset: {
    height: 30
  },
  button: {
    marginBottom: 5,
  }
});
