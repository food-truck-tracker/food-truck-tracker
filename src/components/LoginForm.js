import React from "react";
import { ScrollView, TextInput, StyleSheet, View } from "react-native";
import { Button, Text } from "@shoutem/ui";
import { connect } from "react-redux";

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
  button: {
    //marginBottom: 5,
    margin: 10,
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
          onPress().then(() => changeView("root"));
        }}
      >
      <Text>Log in</Text>
      </Button>
      <Button style={styles.button} styleName="secondary" onPress={changeView} disabled={isFetching}>
        <Text>Go back</Text>
      </Button>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
