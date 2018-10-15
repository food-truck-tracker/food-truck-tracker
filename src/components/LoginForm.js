import React from "react";
import { Text, View, Button, TextInput, StyleSheet } from "react-native";
import { GoogleSigninButton } from "react-native-google-signin";
import { connect } from "react-redux";

const styles = StyleSheet.create({
  input: {
    padding: 15,
    margin: 10,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    padding: 10,
    margin: 10,
  },
  googleButton: {
    width: 148,
    alignItems: "center",
    justifyContent: "center",
    height: 48,
  },
});

const LoginForm = ({
  // navigation,
  isFetching,
  onPress,
  googleLogin,
  emailValue,
  passwordValue,
  onChange,
  changeView,
}) => {
  return (
    <View>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        placeholder="Enter your email..."
        value={emailValue}
        onChangeText={e => onChange(e, "email")}
      />
      <TextInput
        style={styles.input}
        autoCorrect={false}
        placeholder="Enter your password..."
        value={passwordValue}
        onChangeText={e => onChange(e, "password")}
        secureTextEntry={true}
      />
      <Button
        title="Login"
        onPress={() => onPress().then(() => changeView("root"))}
      />
      {/* <GoogleSigninButton
        style={styles.googleButton}
        onPress={googleLogin}
        disabled={isFetching}
      /> */}
      <Button title="Go back" onPress={changeView} />
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
