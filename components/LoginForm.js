import React from "react";
import { Text, View, Button, TextInput, StyleSheet } from "react-native";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <View>
        <Text>Login</Text>

        <TextInput
          autoCorrect={false}
          placeholder="Enter your email..."
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />

        <TextInput
          autoCorrect={false}
          placeholder="Enter your password..."
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          secureTextEntry={true}
        />

        <Button
          title="Login"
          onPress={() => console.log("TODO: firebase auth")}
        />

        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth
          }}
        />

        <Button
          title="Login With Google"
          onPress={() => {
            // this.props.changeView()
          }}
        />

        <Button
          title="Login With Facebook"
          onPress={() => {
            // this.props.changeView()
          }}
        />

        <Button
          title="Go back"
          onPress={() => {
            this.props.changeView();
          }}
        />
      </View>
    );
  }
}
