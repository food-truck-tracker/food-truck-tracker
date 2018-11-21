import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { InlineGallery, Button, Text, TextInput } from "@shoutem/ui";
import Reviews from "../components/Reviews";

export default class TruckPage extends React.Component {
  static navigationOptions = {
    tabBarVisible: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      photos: [
        {
          source: {
            uri:
              "https://shoutem.github.io/static/getting-started/restaurant-1.jpg",
          },
        },
        {
          source: {
            uri:
              "https://shoutem.github.io/static/getting-started/restaurant-2.jpg",
          },
        },
        {
          source: {
            uri:
              "https://shoutem.github.io/static/getting-started/restaurant-3.jpg",
          },
        },
      ],
    };
  }

  render() {
    // grab navigation params
    const { navigation } = this.props;
    const info = navigation.getParam("info", {});
    const truck_id = navigation.getParam("truck_id", "");

    return (
      //static view of what trucks should look like.
      <ScrollView>
        <InlineGallery styleName="large-banner" data={this.state.photos} />
        <Text style={styles.truckname}>{info["name"]}</Text>
        <Text>{info["description"]}</Text>

        <View style={{ paddingLeft: 32, paddingRight: 32 }}>
          <Text style={styles.text}>Hours of operation</Text>

          {info["hours"] &&
            Object.keys(info["hours"]).map(key => {
              const val = info["hours"][key];
              return (
                <View style={styles.view_row} key={key}>
                  <Text style={styles.text}> {key} </Text>
                  <Text style={styles.text}>
                    {val["open"]
                      ? `${val["open"]} - ${val["close"]}`
                      : "Closed"}
                  </Text>
                </View>
              );
            })}
          <Reviews truck_id={truck_id} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
  },
  truckname: {
    fontWeight: "bold",
    fontSize: 32,
  },
  view_row: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
