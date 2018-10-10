import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import TruckRegisterForm from "../screens/TruckRegisterForm";
import RegisterForm from "../components/RegisterForm";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "root",
      full_name: "",
      username: "",
      email: "",
      password: "",
      re_password: ""
    };
  }

  _changeView = view => {
    this.setState({ view });
  };


  render() {
    if (this.state.view == "TruckRegisterForm") {
      return <TruckRegisterForm changeView={this._changeView} />;
    }

    if (this.props.user_input == "Customer") {
      return (
        <View>
          <Text>Your input was {this.props.user_input}</Text>
          <RegisterForm />
          <Button
            title="Go back"
            onPress={() => {
              this.props.changeView("root");
            }}
          />
        </View>
      );
    }
    else if (this.props.user_input == "Vendor")
      return (
        <View>
          <Text> Your input was {this.props.user_input}</Text>
          <RegisterForm />
          <Button
            title="Continue"
            onPress={() => {
              this.setState({ view: "TruckRegisterForm" });
            }}
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
  container: {
    backgroundColor: "#455a64",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    padding: 10,
    margin: 10
  },
  input: {
    padding: 15,
    margin: 10
  }
});
