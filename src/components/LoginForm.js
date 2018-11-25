import React from "react";
import { Text, View, Button, TextInput, StyleSheet } from "react-native";

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
  error: {
    color: "red",
    textAlign: "center",
    margin: 10,
  },
});

const LoginForm = ({
  // navigation,
  isFetching,
  hasError,
  onPress,
  emailValue,
  passwordValue,
  onChange,
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
      {hasError ? (
        <Text style={styles.error}>Invalid email/password</Text>
      ) : null}
      <Button
        title="Login"
        onPress={() => {
          // force input
          if (!emailValue || !passwordValue) {
            alert("Input all the fields!");
            return;
          }
          // attempt to login, then change view to root
          onPress();
        }}
      />
    </View>
  );
};

export default LoginForm;
