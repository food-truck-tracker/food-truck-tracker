import React from "react";
import {View, StyleSheet,ScrollView,Text} from "react-native";
import {InlineGallery} from '@shoutem/ui'

export default class TruckPage extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
          photos:
          [
            { "source": { "uri": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" } },
            { "source": { "uri": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" } },
            { "source": { "uri": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg" } }
          ]
        }
      }
      
      render() {
        return (
          <ScrollView>
          <InlineGallery
            styleName="large-banner"
            data={this.state.photos}
          />
          <Text style = {styles.text}>(Name of truck){"\n"}</Text>
          <Text style = {styles.text}> Hours of operation</Text> 
          <Text style = {styles.text}> Monday: Closed</Text>
          <Text style = {styles.text}> Tuesday: 13:00 - 18:00</Text>
          <Text style = {styles.text}> Wednesday: 13:00 - 18:00</Text>
          <Text style = {styles.text}> Thursday: Closed</Text>
          <Text style = {styles.text}> Friday: 13:00 - 20:00</Text>
          <Text style = {styles.text}> Saturday: 12:00 - 23:00</Text>
          <Text style = {styles.text}> Sunday: 13:00 - 18:00{"\n"}</Text>
          <Text style = {{fontSize: 22, textAlign: "center"}}> Reviews</Text>
          </ScrollView>
        );
      }
      
}

const styles = StyleSheet.create({
  text:{
      fontSize: 22,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    padding: 10,
    margin: 10,
  },
});
