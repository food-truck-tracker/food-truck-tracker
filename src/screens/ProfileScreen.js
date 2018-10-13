import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import firebase from "react-native-firebase";
import { connect } from "react-redux";

import LoginForm from "../components/LoginForm";
import Register from "./Register";
import { loginUser, logoutUser, registerUser } from "../actions/auth";

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    fontWeight: "bold",
    padding: 10,
    margin: 10,
  },
});

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.authUnsubscriber = null;
    this.state = {
      view: "root",
      emailValue: "",
      passwordValue: "",
    };
  }

  componentDidMount() {
    this.authUnsubscriber = firebase.auth().onAuthStateChanged(user => {
      console.log(user);
    });
  }

  componentWillUnmount() {
    if (this.authUnsubscriber) {
      this.authUnsubscriber();
    }
  }

  onLogin = async () => {
    try {
      const response = await this.props.loginUser(
        this.state.emailValue,
        this.state.passwordValue
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  onRegister = async (name, email, pass) => {
    try {
      const response = await this.props.registerUser(name, email, pass);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  onLogout = async () => {
    try {
      await this.props.logoutUser();
    } catch (error) {
      console.log(error);
    }
  };

  onChangeLogin = (e, type) => {
    this.setState({ [`${type}Value`]: e });
  };

  _changeView = view => {
    this.setState({ view });
  };

  _chooseRender = () => {
    if (this.state.view == "register") {
      return (
        <Register
          changeView={this._changeView}
          registerUser={this.onRegister}
        />
      );
    } else if (this.state.view == "login") {
      return (
        <LoginForm
          changeView={this._changeView}
          emailValue={this.state.emailValue}
          passwordValue={this.state.passwordValue}
          onChange={(e, type) => this.onChangeLogin(e, type)}
          onPress={this.onLogin}
        />
      );
    } else {
      return (
        <View>
          <Text style={styles.header}>Profile</Text>
          {this.props.auth.loggedIn ? (
            <>
              <Text>Hello</Text>
              <Button title="Logout" onPress={this.onLogout} />
            </>
          ) : (
            <>
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
            </>
          )}
        </View>
      );
    }
  };

  render() {
    return <View>{this._chooseRender()}</View>;
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  loginUser,
  logoutUser,
  registerUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);
