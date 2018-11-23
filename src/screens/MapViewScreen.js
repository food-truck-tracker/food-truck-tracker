import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import MapView from "react-native-maps";
import { connect } from "react-redux";

import { fetchTrucksLocation } from "../actions/location";
import { getUserLocation } from "../utils";
import { Button, Icon } from "@shoutem/ui";

const Images = [
  {
    uri:
      "https://cdn.pixabay.com/photo/2017/06/23/21/37/oldtimer-2436018_1280.jpg",
  },
];

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

class MapViewScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Map",
      headerRight: (
        <Button onPress={navigation.getParam("displayTrucks")}>
          <Icon name="refresh" />
        </Button>
      ),
    };
  };

  state = {
    markers: [],
    region: {
      latitude: 32.729649,
      longitude: -97.113142,
      latitudeDelta: 0.4,
      longitudeDelta: 0.4,
    },
  };

  async componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);

    this._displayTrucks();
  }

  _displayTrucks = async () => {
    try {
      const res = await getUserLocation();
      this.setState({
        region: {
          latitude: res.lat,
          longitude: res.lon,
          latitudeDelta: 0.4,
          longitudeDelta: 0.4,
        },
      });
      this.props.fetchTrucksLocation(res, 30);

      // now update cards
      let markers = [];

      const { trucksLocation } = this.props.location;
      const { trucksInfo } = this.props.truck;

      for (let truck in trucksLocation) {
        console.log("TRUCK: ", truck);
        const marker = {
          coordinate: {
            latitude: trucksLocation[truck].location[0],
            longitude: trucksLocation[truck].location[1],
          },
          image: Images[0],
          title: trucksInfo[truck].name,
          description: trucksInfo[truck].description,
          id: truck,
        };
        markers.push(marker);
      }

      this.setState({ markers });
    } catch (e) {
      console.error(e);
    }
  };

  componentDidMount() {
    this.props.navigation.setParams({
      displayTrucks: this._displayTrucks,
    });
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = this.state.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  }

  onTileClick = truck_id => {
    this.props.navigation.navigate("Truck", {
      truck_id,
      info: this.props.truck.trucksInfo[truck_id],
      location: this.props.location.trucksLocation[truck_id],
    });
  };

  render() {
    const interpolations = this.state.markers.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        (index + 1) * CARD_WIDTH,
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: "clamp",
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: "clamp",
      });
      return { scale, opacity };
    });

    return (
      <View style={styles.container}>
        <MapView
          ref={map => (this.map = map)}
          initialRegion={this.state.region}
          style={styles.container}
        >
          {this.state.markers.map((marker, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            };
            const opacityStyle = {
              opacity: interpolations[index].opacity,
            };
            return (
              <MapView.Marker key={index} coordinate={marker.coordinate}>
                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                  <Animated.View style={[styles.ring, scaleStyle]} />
                  <View style={styles.marker} />
                </Animated.View>
              </MapView.Marker>
            );
          })}
        </MapView>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.markers.map((marker, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => this.onTileClick(marker["id"])}
            >
              <View style={styles.card}>
                <Image
                  source={marker.image}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                <View style={styles.textContent}>
                  <Text numberOfLines={1} style={styles.cardtitle}>
                    {marker.title}
                  </Text>
                  <Text numberOfLines={1} style={styles.cardDescription}>
                    {marker.description}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </Animated.ScrollView>
      </View>
    );
  }
}

// redux connection
const mapStateToProps = state => ({
  location: state.location,
  truck: state.truck,
});

const mapDispatchToProps = {
  fetchTrucksLocation,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapViewScreen);

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
});
