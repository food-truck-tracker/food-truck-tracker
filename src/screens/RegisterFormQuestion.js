import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import RegisterForm from "../components/RegisterForm";
import Registerform from "../components/RegisterForm";

export default class RegisterFormQuestion extends React.Component {
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
    if (this.state.view == "Customer") {
      return <RegisterForm changeView={this._changeView} user_input = "Customer"/>;
    } else if (this.state.view == "Vendor") {
        return <RegisterForm changeView={this._changeView} user_input = "Vendor"/>;
    } else {
      return (
        <View>
          <Text style={styles.header}>What are you registering as?</Text>
          <Button
            title="Customer"
            onPress={() => {
              this.setState({ view: "Customer" });
            }}
          />
          <Button
            title="Vendor"
            onPress={() => {
              this.setState({ view: "Vendor" });
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
  };

  render() {
    var input = {
        user_input: ""
    };
    return <View>{this._chooseRender()}</View>;
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
 
