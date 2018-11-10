import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";

import { fetchTrucksInfo } from "../actions/truck";

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    fontWeight: "bold",
    padding: 10,
    margin: 10,
  },
});

class DiscoverScreen extends React.Component {
  componentWillMount() {
    this.props.fetchTrucksInfo();
  }

  render() {
    const { trucksInfo } = this.props.truck;
    return (
      <ScrollView>
        <Text style={styles.header}>Discover View</Text>
        {trucksInfo &&
          Object.entries(trucksInfo).map(truck => (
            <View key={truck[0]}>
              <Text>{truck[1].name}</Text>
              <Text>{truck[1].category}</Text>
              <Text>{truck[1].description}</Text>
            </View>
          ))}
      </ScrollView>
    );
  }
}

// redux connection
const mapStateToProps = state => ({
  truck: state.truck,
});

const mapDispatchToProps = {
  fetchTrucksInfo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverScreen);
