import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";

export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating_num: ""
    };
  }

  /*
  ratingCompleted = (value) => {
    this.setState({rating_num: value});
  }*/
  ratingCompleted(rating) {
    console.log("Rating is: " + rating)
  }

  render() {
    return (
    <View> 
      <AirbnbRating 
      reviews={["", "", "", "", ""]}
      /> 
      </View>
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
  }
});
