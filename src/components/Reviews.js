import React from "react";
import { Text, TextInput, Button, View } from "@shoutem/ui";
import { connect } from "react-redux";
import { AirbnbRating } from "react-native-ratings";

import { addReview, fetchReviews } from "../actions/review";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: 5,
      body: "",
    };
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.truck_id);
  }

  ratingCompleted = stars => {
    this.setState({ stars });
  };

  onSubmit = () => {
    try {
      this.props.addReview({ ...this.state, truck_id: this.props.truck_id });
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    const { reviews } = this.props.review;
    return (
      <View>
        <Text>Reviews</Text>
        <AirbnbRating
          reviews={["", "", "", "", ""]}
          onFinishRating={this.ratingCompleted}
        />
        <TextInput
          placeholder={"Write a review..."}
          borderWidth={2}
          multiline={true}
          marginBottom={10}
          onChangeText={body => this.setState({ body })}
        />
        <Button styleName="secondary" onPress={this.onSubmit}>
          <Text>Submit review...</Text>
        </Button>
        {reviews ? (
          reviews.map((review, i) => (
            <View key={i}>
              <Text>{review.body}</Text>
              <Text>Rating: {review.stars}</Text>
            </View>
          ))
        ) : (
          <Text>Be the first to review!</Text>
        )}
      </View>
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
