import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Button, Text, View, TextInput } from "@shoutem/ui";

const styles = StyleSheet.create({
  input: {
    backgroundColor: "rgba(255,255,255,0.7)",
    padding: 15,
    margin: 20,
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
  },
  button: {
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
    <ScrollView>
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
      <View style={{ paddingLeft: 12, paddingRight: 12 }}>
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
            onPress();
          }}
        >
          <Text>Log in</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default LoginForm;
