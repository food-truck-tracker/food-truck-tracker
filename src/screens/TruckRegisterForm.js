import React from "react";
import { View, ScrollView, StyleSheet, TextInput } from "react-native";
import { Button, Text } from "@shoutem/ui";
import RadioDayPicker from "../components/RadioDayPicker";
import MultipleTimeInput from "../components/MultipleTimeInput";
import ProfileScreen from "./ProfileScreen";
import { connect } from "react-redux";
import { truckRegister } from "../actions/auth";

class TruckRegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      truck_name: "",
      //hours_of_operation: "",
      description: "",
      view: "root",
      current_day: 0,
      concat: {
        sunday: {
          open: "",
          close: ""
        },
        monday: {
          open: "",
          close: ""
        },
        tuesday: {
          open: "",
          close: ""
        },
        wednesday: {
          open: "",
          close: ""
        },
        thursday: {
          open: "",
          close: ""
        },
        friday: {
          open: "",
          close: ""
        },
        saturday: {
          open: "",
          close: ""
        }
      }
    };
  }

  //updates the value of the day
  onUpdate = val => {
    this.setState({
      current_day: val
    });
  };

  //registers truck to firebase.
  onRegisterVendor = async (
    uid,
    truck_name,
    description,
    hours_of_operation
  ) => {
    try {
      const response = await this.props.truckRegister(
        uid,
        truck_name,
        description,
        hours_of_operation
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // places the concat string inside the state variable.
  onUpdateDay = (certain_day, open_or_closed_section, input) => {
    this.state.concat[certain_day][open_or_closed_section] = input;
  };
  changeView = view => {
    this.setState({ view: view });
  };
  render() {
    if (this.state.view == "Continue") {
      return <ProfileScreen />;
    }
    return (
      <ScrollView>
      <View style={{paddingHorizontal: 30}}>
        {this.props.update ? (
          <Text style={styles.header}>Update truck page</Text>
        ) : (
          <Text style={styles.header}>Register truck cont</Text>
        )}
        <TextInput
          style={styles.input}
          autoCorrect={false}
          placeholder="Enter truck name..."
          value={this.state.truck_name}
          onChangeText={truck_name => this.setState({ truck_name })}
        />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          placeholder="Enter description..."
          value={this.state.description}
          onChangeText={description => this.setState({ description })}
        />
        <Text fontSize="20"> Enter hours of operation: </Text>
        <View style={styles.view_row}>
          <RadioDayPicker onUpdate={this.onUpdate} />

          <MultipleTimeInput
            day={this.state.current_day}
            onUpdateDay={this.onUpdateDay}
          />
        </View>
          <Button
            style={styles.button}
            styleName="secondary"
            onPress={() => {
              if (this.props.update) {
              } else {
                this.props.truckRegister(
                  this.props.auth.user.uid,
                  this.state.truck_name,
                  this.state.description,
                  this.state.concat
                );
              }

              this.changeView("Continue");
            }}
          >
            <Text>Continue</Text>
          </Button>

          <Button
            style={styles.button}
            styleName="secondary"
            onPress={() => {
              this.props.changeView("root");
            }}
          >
            <Text>Go back</Text>
          </Button>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    padding: 10,
    margin: 10
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.7)",
    padding: 15,
    margin: 20,
  },
  text: {
    fontSize: 100,
    top: 100,
    textAlign: "right",
    left: -40
  },
  button_offset: {
    height: 30
  },
  button: {
    marginBottom: 5,
  },
  view_row: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

const mapDispatchToProps = {
  truckRegister
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TruckRegisterForm);
