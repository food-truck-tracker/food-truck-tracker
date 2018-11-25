import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Button, Text, View, TextInput } from "@shoutem/ui";
import { connect } from "react-redux";

import RadioDayPicker from "../components/RadioDayPicker";
import MultipleTimeInput from "../components/MultipleTimeInput";
import { truckRegister } from "../actions/auth";

const styles = StyleSheet.create({
  input: {
    backgroundColor: "rgba(255,255,255,0.7)",
    marginVertical: 10,
  },
  button: {
    marginVertical: 10,
  },
  view: {
    paddingHorizontal: 12,
  },
  right: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
class TruckRegisterForm extends React.Component {
  static navigationOptions = {
    title: "Register a Truck",
  };

  constructor(props) {
    super(props);
    this.state = {
      truck_name: "",
      description: "",
      current_day: 0,
      concat: {
        sunday: {
          open: "",
          close: "",
        },
        monday: {
          open: "",
          close: "",
        },
        tuesday: {
          open: "",
          close: "",
        },
        wednesday: {
          open: "",
          close: "",
        },
        thursday: {
          open: "",
          close: "",
        },
        friday: {
          open: "",
          close: "",
        },
        saturday: {
          open: "",
          close: "",
        },
      },
    };
  }

  //updates the value of the day
  onUpdate = val => {
    this.setState({
      current_day: val,
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

  render() {
    return (
      <ScrollView style={styles.view}>
        <TextInput
          style={styles.input}
          placeholder="Enter truck name..."
          value={this.state.truck_name}
          onChangeText={truck_name => this.setState({ truck_name })}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter description..."
          value={this.state.description}
          onChangeText={description => this.setState({ description })}
        />
        <Text fontSize="20"> Enter hours of operation: </Text>
        <View style={styles.right}>
          <RadioDayPicker onUpdate={this.onUpdate} />
          <MultipleTimeInput
            day={this.state.current_day}
            onUpdateDay={this.onUpdateDay}
          />
        </View>
        <Button
          styleName="secondary"
          style={styles.button}
          disabled={this.props.auth.isFetching}
          onPress={() => {
            const { truck_name, description } = this.state;
            if ((!truck_name, !description)) {
              alert("Please enter name and description");
              return;
            }
            this.props
              .truckRegister(
                this.props.auth.user.uid,
                this.state.truck_name,
                this.state.description,
                this.state.concat
              )
              .then(() => this.props.navigation.goBack());
          }}
        >
          <Text>REGISTER TRUCK</Text>
        </Button>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = {
  truckRegister,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TruckRegisterForm);
