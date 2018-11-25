import React from "react";
import { connect } from "react-redux";
import { StyleSheet, TextInput } from "react-native";
import { Text, Button, View, Heading } from "@shoutem/ui";

import { registerUser } from "../actions/auth";

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 12,
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
    left: -40,
  },
  button: {
    margin: 10,
  },
});

class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: "Register",
  };

  constructor(props) {
    super(props);
    this.state = {
      full_name: "",
      email: "",
      password: "",
      re_password: "",
    };
  }

  render() {
    return (
      <View style={styles.view}>
        <TextInput
          style={styles.input}
          autoCorrect={false}
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
        <Button
          styleName="secondary"
          style={styles.button}
          disabled={this.props.auth.isFetching}
          onPress={() => {
            // grab vars from state
            const { full_name, email, password, re_password } = this.state;

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
              .then(() => this.props.navigation.goBack());
          }}
        >
          <Text>REGISTER</Text>
        </Button>
      </View>
    );
  }
}

// redux connection
const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  registerUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterScreen);
