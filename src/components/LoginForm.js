import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Button, Text } from "@shoutem/ui";
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
  button: {
    marginBottom: 5,
  },
});

const LoginForm = ({
  // navigation,
  isFetching,
  onPress,
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
        placeholder="Enter your email..."
        value={emailValue}
        onChangeText={e => onChange(e, "email")}
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password..."
        value={passwordValue}
        onChangeText={e => onChange(e, "password")}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={{ paddingLeft: 32, paddingRight: 32 }}>
      <Button
        style={styles.button}
        styleName="secondary"
        onPress={() => {
          // force input
          if (!emailValue || !passwordValue) {
            alert("Input all the fields!");
            return;
          }
          // attempt to login, then change view to root
          onPress().then(() => changeView("root"));
        }}
      >
      <Text>Log in</Text>
      </Button>
      <Button style={styles.button} styleName="secondary" onPress={changeView} disabled={isFetching}>
        <Text>Go backkkkkkkk</Text>
      </Button>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
