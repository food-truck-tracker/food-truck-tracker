import React from "react";
import { View, StyleSheet, ScrollView, Platform, Linking } from "react-native";
import { connect } from "react-redux";
import { InlineGallery, Button, Text } from "@shoutem/ui";

import Reviews from "../components/Reviews";
import { addFavorite, removeFavorite, fetchUserInfo } from "../actions/user";

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

class TruckPage extends React.Component {
  static navigationOptions = {
    tabBarVisible: false,
  };

  openMaps = () => {
    // set up url
    const { navigation } = this.props;
    const location = navigation.getParam("location", {});

    if (Platform.OS === "ios") {
      Linking.openURL(
        `http://maps.apple.com/?ll=${location.location[0]}+${
          location.location[1]
        }`
      );
    } else {
      Linking.openURL(
        `http://maps.google.com/?daddr=${location.location[0]}+${
          location.location[1]
        }`
      );
    }
  };

  onAddFavorite = async truck_id => {
    try {
      await this.props.addFavorite(truck_id);
      await this.props.fetchUserInfo();
    } catch (e) {
      console.error(e);
    }
  };

  onRemoveFavorite = async truck_id => {
    try {
      await this.props.removeFavorite(truck_id);
      await this.props.fetchUserInfo();
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    // grab navigation params
    const { navigation } = this.props;
    const info = navigation.getParam("info", {});
    const truck_id = navigation.getParam("truck_id", "");

    // check if truck is favorite
    let isfav = false;
    const { user } = this.props.user;

    if (user && user.favorites && user.favorites.indexOf(truck_id) > -1) {
      isfav = true;
    }

    // make array of pics for gallery
    let images = [];
    if (info && info["images"]) {
      images = info["images"].map(e => ({ source: { uri: e } }));
    }

    return (
      <ScrollView>
        <InlineGallery styleName="large-banner" data={images} />
        <View style={{ paddingLeft: 32, paddingRight: 32 }}>
          <Text style={styles.truckname}>{info["name"]}</Text>
          <Text>{info["description"]}</Text>

          <Button onPress={this.openMaps} styleName="secondary">
            <Text>Get Directions</Text>
          </Button>

          {isfav ? (
            <Button
              onPress={() => this.onRemoveFavorite(truck_id)}
              styleName="secondary"
            >
              <Text>Remove from favorite</Text>
            </Button>
          ) : (
            <Button
              onPress={() => this.onAddFavorite(truck_id)}
              styleName="secondary"
            >
              <Text>Add to favorite</Text>
            </Button>
          )}

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

// redux connection
const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  addFavorite,
  removeFavorite,
  fetchUserInfo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TruckPage);
