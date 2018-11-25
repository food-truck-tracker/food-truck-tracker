import React, { Component } from 'react';
import { TextInput, Text, View, StyleSheet, } from "react-native";
import { CheckBox } from 'react-native-elements';


export default class MultipleTimeInput extends Component {
  constructor() {
    super()
    this.state = {
      day: {
        sunday: {
          closed: true,
          open_time_hour: "",
          open_time_min: "",
          close_time_hour: "",
          close_time_min: ""

        },
        monday: {
          closed: true,
          open_time_hour: "",
          open_time_min: "",
          close_time_hour: "",
          close_time_min: ""
        },
        tuesday: {
          closed: true,
          open_time_hour: "",
          open_time_min: "",
          close_time_hour: "",
          close_time_min: ""
        },
        wednesday: {
          closed: true,
          open_time_hour: "",
          open_time_min: "",
          close_time_hour: "",
          close_time_min: ""
        },
        thursday: {
          closed: true,
          open_time_hour: "",
          open_time_min: "",
          close_time_hour: "",
          close_time_min: ""
        },
        friday: {
          closed: true,
          open_time_hour: "",
          open_time_min: "",
          close_time_hour: "",
          close_time_min: ""
        },
        saturday: {
          closed: true,
          open_time_hour: "",
          open_time_min: "",
          close_time_hour: "",
          close_time_min: ""
        }
      },
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
        }
      }
    }
  }

  //updates the values of checkboxes to present to the user.
  _checkBox = certain_day => {
    if (certain_day == 0) {
      this.state.day.sunday.close_time_hour = "";
      this.state.day.sunday.close_time_min = "";
      this.state.day.sunday.open_time_hour = "";
      this.state.day.sunday.open_time_min = "";
      this.state.concat.sunday.open = "";
      this.state.concat.sunday.close = "";
      this.props.onUpdateDay("sunday", "open", "");
      this.props.onUpdateDay("sunday", "close", "");
      this.forceUpdate();
      if (this.state.day.sunday.closed == false) {
        this.state.day.sunday.closed = true;
        this.forceUpdate();
      }
      else {
        this.state.day.sunday.closed = false;
        this.forceUpdate();
      }
    }

    else if (certain_day == 1) {
      this.state.day.monday.close_time_hour = "";
      this.state.day.monday.close_time_min = "";
      this.state.day.monday.open_time_hour = "";
      this.state.day.monday.open_time_min = "";
      this.state.concat.monday.open = "";
      this.state.concat.monday.close = "";
      this.props.onUpdateDay("monday", "open", "");
      this.props.onUpdateDay("monday", "close", "");
      if (this.state.day.monday.closed == false) {
        this.state.day.monday.closed = true;
        this.forceUpdate();
      }
      else {
        this.state.day.monday.closed = false;
        this.forceUpdate();
      }
    }

    else if (certain_day == 2) {
      this.state.day.tuesday.close_time_hour = "";
      this.state.day.tuesday.close_time_min = "";
      this.state.day.tuesday.open_time_hour = "";
      this.state.day.tuesday.open_time_min = "";
      this.state.concat.tuesday.open = "";
      this.state.concat.tuesday.close = "";
      this.props.onUpdateDay("tuesday", "open", "");
      this.props.onUpdateDay("tuesday", "close", "");
      if (this.state.day.tuesday.closed == false) {
        this.state.day.tuesday.closed = true;
        this.forceUpdate();
      }
      else {
        this.state.day.tuesday.closed = false;
        this.forceUpdate();
      }
    }

    else if (certain_day == 3) {
      this.state.day.wednesday.close_time_hour = "";
      this.state.day.wednesday.close_time_min = "";
      this.state.day.wednesday.open_time_hour = "";
      this.state.day.wednesday.open_time_min = "";
      this.state.concat.wednesday.open = "";
      this.state.concat.wednesday.close = "";
      this.props.onUpdateDay("wednesday", "open", "");
      this.props.onUpdateDay("wednesday", "close", "");
      if (this.state.day.wednesday.closed == false) {
        this.state.day.wednesday.closed = true;
        this.forceUpdate();
      }
      else {
        this.state.day.wednesday.closed = false;
        this.forceUpdate();
      }
    }

    else if (certain_day == 4) {
      this.state.day.thursday.close_time_hour = "";
      this.state.day.thursday.close_time_min = "";
      this.state.day.thursday.open_time_hour = "";
      this.state.day.thursday.open_time_min = "";
      this.state.concat.thursday.open = "";
      this.state.concat.thursday.close = "";
      this.props.onUpdateDay("thursday", "open", "");
      this.props.onUpdateDay("thursday", "close", "");
      if (this.state.day.thursday.closed == false) {
        this.state.day.thursday.closed = true;
        this.forceUpdate();
      }
      else {
        this.state.day.thursday.closed = false;
        this.forceUpdate();
      }
    }

    else if (certain_day == 5) {
      this.state.day.friday.close_time_hour = "";
      this.state.day.friday.close_time_min = "";
      this.state.day.friday.open_time_hour = "";
      this.state.day.friday.open_time_min = "";
      this.state.concat.friday.open = "";
      this.state.concat.friday.close = "";
      this.props.onUpdateDay("friday", "open", "");
      this.props.onUpdateDay("friday", "close", "");
      if (this.state.day.friday.closed == false) {
        this.state.day.friday.closed = true;
        this.forceUpdate();
      }
      else {
        this.state.day.friday.closed = false;
        this.forceUpdate();
      }
    }

    else if (certain_day == 6) {
      this.state.day.saturday.close_time_hour = "";
      this.state.day.saturday.close_time_min = "";
      this.state.day.saturday.open_time_hour = "";
      this.state.day.saturday.open_time_min = "";
      this.state.concat.saturday.open = "";
      this.state.concat.saturday.close = "";
      this.props.onUpdateDay("saturday", "open", "");
      this.props.onUpdateDay("saturday", "close", "");
      if (this.state.day.saturday.closed == false) {
        this.state.day.saturday.closed = true;
        this.forceUpdate();
      }
      else {
        this.state.day.saturday.closed = false;
        this.forceUpdate();
      }
    }
  };


  //user error handling to make sure that the time format is correct.
  check_input_hour(input, certain_day, open_close_hour) {
    for (i = 0; i < input.length; i++) {
      if (input[i] == " " || input[i] == "-") {
        this.state.day[certain_day][open_close_hour] = "";
        this.forceUpdate();
        alert("Please no spaces or in-line");
        return;
      }
    }
    if (input >= 24 || input < -1) {
      alert("Please enter numbers between 00 through 23");
      this.state.day[certain_day][open_close_hour] = "";
    }
    else {
      this.state.day[certain_day][open_close_hour] = input;
    }
    this.forceUpdate();
  }

  check_input_min(input, certain_day, open_close_min) {
    for (i = 0; i < input.length; i++) {
      if (input[i] == " " || input[i] == "-") {
        this.state.day[certain_day][open_close_min] = "";
        this.forceUpdate();
        alert("Please no spaces or in-line");
        return;
      }
    }
    if (input >= 60 || input < -1) {
      alert("Please enter numbers between 00 through 59");
      this.state.day[certain_day][open_close_min] = "";
    }
    else {
      this.state.day[certain_day][open_close_min] = input;
    }
    this.forceUpdate();
  }

  //concatenates hour/time together and sends info to parent function.
  attempt_concat_input(certain_day, open_or_closed_section) {
      
      if (open_or_closed_section == "open") {
      if (this.state.day[certain_day].open_time_hour == "" || this.state.day[certain_day].open_time_min == "") {
        return;
      }
      else {
        
        this.state.concat[certain_day].open = this.state.day[certain_day].open_time_hour + ":" + this.state.day[certain_day].open_time_min;
        this.props.onUpdateDay(certain_day, open_or_closed_section, this.state.concat[certain_day].open);
      }
    }
    else if (open_or_closed_section == "close") {
      if (this.state.day[certain_day].close_time_hour == "" || this.state.day[certain_day].close_time_min == "") {
        return;
      }
      else {
        
        this.state.concat[certain_day].close = this.state.day[certain_day].close_time_hour + ":" + this.state.day[certain_day].close_time_min;
        this.props.onUpdateDay(certain_day, open_or_closed_section, this.state.concat[certain_day].close);
      }
    }
  }



  render() {
    // depending on the day thats clicked in the parent component,
    // this component will update the input fields for that day.
    if (this.props.day == 0) {
      return (
        <View style={{ flexDirection: 'column' }}>
          <CheckBox
            containerStyle={styles.CheckBox}
            title='Closed?'
            onPress={() => { this._checkBox(0) }}
            checked={this.state.day.sunday.closed}
          />
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>     Open: </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.sunday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="Hour"
              value={this.state.day.sunday.open_time_hour}
              onChangeText={input => {
                this.check_input_hour(input, "sunday", "open_time_hour");
                console.log("attemp should run next");
                this.attempt_concat_input("sunday", "open");
              }}
            />
            <Text style={styles.text}>  :  </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.sunday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="min"
              value={this.state.day.sunday.open_time_min}
              onChangeText={input => {
                this.check_input_min(input, "sunday", "open_time_min");
                this.attempt_concat_input("sunday", "open");
                this.forceUpdate();
              }}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>  Closed: </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.sunday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="Hour"
              value={this.state.day.sunday.close_time_hour}
              onChangeText={input => {
                this.check_input_hour(input, "sunday", "close_time_hour")
                this.attempt_concat_input("sunday", "close");
                this.forceUpdate();
              }}
            />
            <Text style={styles.text}>  :  </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.sunday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="min"
              value={this.state.day.sunday.close_time_min}
              onChangeText={input => {
                this.check_input_min(input, "sunday", "close_time_min");
                this.attempt_concat_input("sunday", "close");
                this.forceUpdate();
              }}
            />
          </View>
        </View>
      );
    }
    else if (this.props.day == 1) {
      return (
        <View>
          <CheckBox
            containerStyle={styles.CheckBox}
            title='Closed?'
            onPress={() => this._checkBox(1)}
            checked={this.state.day.monday.closed}
          />

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>     Open: </Text>
            <TextInput
              editable={!this.state.day.monday.closed}
              style={styles.input}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="Hour"
              value={this.state.day.monday.open_time_hour}
              onChangeText={input => {
                this.check_input_hour(input, "monday", "open_time_hour");
                this.attempt_concat_input("monday", "open");
                this.forceUpdate();
              }}
            />
            <Text style={styles.text}>  :  </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.monday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="min"
              value={this.state.day.monday.open_time_min}
              onChangeText={input => {
                this.check_input_min(input, "monday", "open_time_min");
                this.attempt_concat_input("monday", "open");
                this.forceUpdate();
              }}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>  Closed: </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.monday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="Hour"
              value={this.state.day.monday.close_time_hour}
              onChangeText={input => {
                this.check_input_hour(input, "monday", "close_time_hour");
                this.attempt_concat_input("monday", "close");
                this.forceUpdate();
              }}
            />
            <Text style={styles.text}>  :  </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.monday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="min"
              value={this.state.day.monday.close_time_min}
              onChangeText={input => {
                this.check_input_min(input, "monday", "close_time_min");
                this.attempt_concat_input("monday", "close");
                this.forceUpdate();
              }}
            />
          </View>

        </View>
      );
    }
    else if (this.props.day == 2) {
      return (
        <View>
          <CheckBox
            containerStyle={styles.CheckBox}
            title='Closed?'
            onPress={() => this._checkBox(2)}
            checked={this.state.day.tuesday.closed}
          />

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>     Open: </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.tuesday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="Hour"
              value={this.state.day.tuesday.open_time_hour}
              onChangeText={input => {
                this.check_input_hour(input, "tuesday", "open_time_hour");
                this.attempt_concat_input("tuesday", "open");
                this.forceUpdate();
              }}
            />
            <Text style={styles.text}>  :  </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.tuesday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="min"
              value={this.state.day.tuesday.open_time_min}
              onChangeText={input => {
                this.check_input_min(input, "tuesday", "open_time_min");
                this.attempt_concat_input("tuesday", "open");
                this.forceUpdate();
              }}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>  Closed: </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.tuesday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="Hour"
              value={this.state.day.tuesday.close_time_hour}
              onChangeText={input => {
                this.check_input_hour(input, "tuesday", "close_time_hour");
                this.attempt_concat_input("tuesday", "close");
                this.forceUpdate();
              }}
            />
            <Text style={styles.text}>  :  </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.tuesday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="min"
              value={this.state.day.tuesday.close_time_min}
              onChangeText={input => {
                this.check_input_min(input, "tuesday", "close_time_min");
                this.attempt_concat_input("tuesday", "close");
                this.forceUpdate();
              }}
            />
          </View>

        </View>
      );
    }

    else if (this.props.day == 3) {
      return (
        <View>
          <CheckBox
            containerStyle={styles.CheckBox}
            title='Closed?'
            onPress={() => this._checkBox(3)}
            checked={this.state.day.wednesday.closed}
          />
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>     Open: </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.wednesday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="Hour"
              value={this.state.day.wednesday.open_time_hour}
              onChangeText={input => {
                this.check_input_hour(input, "wednesday", "open_time_hour");
                this.attempt_concat_input("wednesday", "open");
                this.forceUpdate();
              }}
            />
            <Text style={styles.text}>  :  </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.wednesday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="min"
              value={this.state.day.wednesday.open_time_min}
              onChangeText={input => {
                this.check_input_min(input, "wednesday", "open_time_min");
                this.attempt_concat_input("wednesday", "open");
                this.forceUpdate();
              }}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>  Closed: </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.wednesday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="Hour"
              value={this.state.day.wednesday.close_time_hour}
              onChangeText={input => {
                this.check_input_hour(input, "wednesday", "close_time_hour");
                this.attempt_concat_input("wednesday", "close");
                this.forceUpdate();
              }}
            />
            <Text style={styles.text}>  :  </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.wednesday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="min"
              value={this.state.day.wednesday.close_time_min}
              onChangeText={input => {
                this.check_input_min(input, "wednesday", "close_time_min");
                this.attempt_concat_input("wednesday", "close");
                this.forceUpdate();
              }}
            />
          </View>

        </View>
      );
    }

    else if (this.props.day == 4) {
      return (
        <View>
          <CheckBox
            containerStyle={styles.CheckBox}
            title='Closed?'
            onPress={() => this._checkBox(4)}
            checked={this.state.day.thursday.closed}
          />

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>     Open: </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.thursday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="Hour"
              value={this.state.day.thursday.open_time_hour}
              onChangeText={input => {
                this.check_input_hour(input, "thursday", "open_time_hour");
                this.attempt_concat_input("thursday", "open");
                this.forceUpdate();
              }}
            />
            <Text style={styles.text}>  :  </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.thursday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="min"
              value={this.state.day.thursday.open_time_min}
              onChangeText={input => {
                this.check_input_min(input, "thursday", "open_time_min");
                this.attempt_concat_input("thursday", "open");
                this.forceUpdate();
              }}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>  Closed: </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.thursday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="Hour"
              value={this.state.day.thursday.close_time_hour}
              onChangeText={input => {
                this.check_input_hour(input, "thursday", "close_time_hour");
                this.attempt_concat_input("thursday", "close");
                this.forceUpdate();
              }}
            />
            <Text style={styles.text}>  :  </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.thursday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="min"
              value={this.state.day.thursday.close_time_min}
              onChangeText={input => {
                this.check_input_min(input, "thursday", "close_time_min");
                this.attempt_concat_input("thursday", "close");
                this.forceUpdate();
              }}
            />
          </View>


        </View>
      );
    }

    else if (this.props.day == 5) {
      return (
        <View>
          <CheckBox
            containerStyle={styles.CheckBox}
            title='Closed?'
            onPress={() => this._checkBox(5)}
            checked={this.state.day.friday.closed}
          />

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>     Open: </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.friday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="Hour"
              value={this.state.day.friday.open_time_hour}
              onChangeText={input => {
                this.check_input_hour(input, "friday", "open_time_hour");
                this.attempt_concat_input("friday", "open");
                this.forceUpdate();
              }}
            />
            <Text style={styles.text}>  :  </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.friday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="min"
              value={this.state.day.friday.open_time_min}
              onChangeText={input => {
                this.check_input_min(input, "friday", "open_time_min");
                this.attempt_concat_input("friday", "open");
                this.forceUpdate();
              }}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>  Closed: </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.friday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="Hour"
              value={this.state.day.friday.close_time_hour}
              onChangeText={input => {
                this.check_input_hour(input, "friday", "close_time_hour");
                this.attempt_concat_input("friday", "close");
                this.forceUpdate();
              }}
            />
            <Text style={styles.text}>  :  </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.friday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="min"
              value={this.state.day.friday.close_time_min}
              onChangeText={input => {
                this.check_input_min(input, "friday", "close_time_min");
                this.attempt_concat_input("friday", "close");
                this.forceUpdate();
              }}
            />
          </View>
        </View>
      );
    }

    else if (this.props.day == 6) {
      return (
        <View>
          <CheckBox
            containerStyle={styles.CheckBox}
            title='Closed?'
            onPress={() => this._checkBox(6)}
            checked={this.state.day.saturday.closed}
          />


          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>     Open: </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.saturday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="Hour"
              value={this.state.day.saturday.open_time_hour}
              onChangeText={input => {
                this.check_input_hour(input, "saturday", "open_time_hour");
                this.attempt_concat_input("saturday", "open");
                this.forceUpdate();
              }}
            />
            <Text style={styles.text}>  :  </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.saturday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="min"
              value={this.state.day.saturday.open_time_min}
              onChangeText={input => {
                this.check_input_min(input, "saturday", "open_time_min");
                this.attempt_concat_input("saturday", "open");
                this.forceUpdate();
              }}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>  Closed: </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.saturday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="Hour"
              value={this.state.day.saturday.close_time_hour}
              onChangeText={input => {
                this.check_input_hour(input, "saturday", "close_time_hour");
                this.attempt_concat_input("saturday", "close");
                this.forceUpdate();
              }}
            />
            <Text style={styles.text}>  :  </Text>
            <TextInput
              style={styles.input}
              editable={!this.state.day.saturday.closed}
              maxLength={2}
              keyboardType='decimal-pad'
              placeholder="min"
              value={this.state.day.saturday.close_time_min}
              onChangeText={input => {
                this.check_input_min(input, "saturday", "close_time_min");
                this.attempt_concat_input("saturday", "close");
                this.forceUpdate();
              }}
            />
          </View>
        </View>
      );
    }
  }
}


const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    fontWeight: "bold",
    padding: 10,
    margin: 10
  },
  text: {
    top: 10,
    fontWeight: "bold",
    fontSize: 15
  },
  CheckBox: {
    backgroundColor: 'rgba(255,255,255,0)',
    width: 100,
    right: -50
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginBottom: 5,
    paddingHorizontal: 10
  },
});
