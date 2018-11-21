import React from "react";
import { Text, TextInput, Button } from "@shoutem/ui";
import { connect } from "react-redux";
import { AirbnbRating } from "react-native-ratings";

import { addReview, fetchReviews } from "../actions/review";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating_num: "",
    };
  }

  ratingCompleted = value => {
    this.setState({ rating_num: value });
  };

  render() {
    return (
      <>
        <Text>Reviews</Text>
        <AirbnbRating reviews={["", "", "", "", ""]} />
        <TextInput
          placeholder={"Write a review..."}
          borderWidth={2}
          multiline={true}
          marginBottom={10}
        />
        <Button styleName="secondary">
          <Text>Submit review...</Text>
        </Button>
      </>
    );
  }
}

// redux connection
const mapStateToProps = state => ({
  review: state.review,
});

const mapDispatchToProps = {
  addReview,
  fetchReviews,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews);
