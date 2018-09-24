import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "root"
    };
  }

  _changeView = view => {
    this.setState({ view });
  };

  _chooseRender = () => {
    if (this.state.view == "register") {
      return <RegisterForm changeView={this._changeView} />;
    } else if (this.state.view == "login") {
      return <LoginForm changeView={this._changeView} />;
    } else {
      return (
        <View>
          <Text style={styles.header}>Profile</Text>
          <Button
            title="Login"
            onPress={() => {
              this.setState({ view: "login" });
            }}
          />
          <Button
            title="Register"
            onPress={() => {
              this.setState({ view: "register" });
            }}
          />
        </View>
      );
    }
  };

  render() {
    return <View>{this._chooseRender()}</View>;
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    fontWeight: "bold",
    padding: 10,
    margin: 10
  }
});
