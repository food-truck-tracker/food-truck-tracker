import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,

} from "react-native";
import { InlineGallery, Button, Text, TextInput } from "@shoutem/ui";
import Review from "../components/Review";

export default class TruckPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [
        {
          source: {
            uri:
              "https://shoutem.github.io/static/getting-started/restaurant-1.jpg"
          }
        },
        {
          source: {
            uri:
              "https://shoutem.github.io/static/getting-started/restaurant-2.jpg"
          }
        },
        {
          source: {
            uri:
              "https://shoutem.github.io/static/getting-started/restaurant-3.jpg"
          }
        }
      ]
    };
  }

  render() {
    return (
      <ScrollView>
        <InlineGallery styleName="large-banner" data={this.state.photos} />
        <Text style={styles.truckname}>
          (Name of truck)
          {"\n"}
        </Text>

        <View style={{ paddingLeft: 32, paddingRight: 32 }}>
          <Text style={styles.text}> Hours of operation</Text>

          <View style={styles.view_row}>
            <Text style={styles.text}> Monday: </Text>
            <Text style={styles.text}>Closed</Text>
          </View>

          <View style={styles.view_row}>
            <Text style={styles.text}> Tuesday: </Text>
            <Text style={styles.text}>13:00 - 18:00</Text>
          </View>

          <View style={styles.view_row}>
            <Text style={styles.text}> Wednesday: </Text>
            <Text style={styles.text}>13:00 - 18:00</Text>
          </View>

          <View style={styles.view_row}>
            <Text style={styles.text}> Thursday: </Text>
            <Text style={styles.text}>Closed</Text>
          </View>

          <View style={styles.view_row}>
            <Text style={styles.text}> Friday: </Text>
            <Text style={styles.text}>13:00 - 20:00</Text>
          </View>

          <View style={styles.view_row}>
            <Text style={styles.text}> Saturday: </Text>
            <Text style={styles.text}>33:00 - 23:00</Text>
          </View>

          <View style={styles.view_row}>
            <Text style={styles.text}> Sunday: </Text>
            <Text style={styles.text}>
              13:00 - 18:00
              {"\n\n"}
            </Text>
          </View>

          <Text style={{ fontSize: 32, textAlign: "center" }}> Reviews</Text>
          <Review />

          <TextInput
            placeholder={"Write a review..."}
            borderWidth = {2}
            multiline={true}   
            marginBottom = {10}
          />

          <Button 
          styleName="secondary">
            <Text>Submit review...</Text>
          </Button>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    padding: 10,
    margin: 10
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.7)",
    borderWidth: 2,
    borderColor: "black"
  },
  truckname: {
    fontWeight: "bold",
    fontSize: 32
  },
  view_row: {
    justifyContent: "space-between",
    flexDirection: "row"
  }
});
