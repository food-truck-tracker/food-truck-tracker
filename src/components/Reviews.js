import React from "react";
import {
  Text,
  TextInput,
  Button,
  View,
  Row,
  Subtitle,
  Caption,
  Heading,
  Divider,
} from "@shoutem/ui";
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

  onSubmit = async () => {
    try {
      await this.props.addReview({
        ...this.state,
        truck_id: this.props.truck_id,
      });
      this.props.fetchReviews(this.props.truck_id);
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    const { reviews } = this.props.review;

    // check if already left review
    let hasLeftReview = false;
    let user_id = "";
    if (this.props.auth.user) {
      user_id = this.props.auth.user.uid;
    }
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i].user_id == user_id) {
        hasLeftReview = true;
        break;
      }
    }

    return (
      <View>
        <Divider />
        <Heading>Reviews</Heading>
        <Divider styleName="line" />
        {!hasLeftReview && (
          <View>
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
          </View>
        )}
        {reviews ? (
          reviews.map((review, i) => (
            <Row key={i}>
              <View styleName="vertical">
                <View styleName="horizontal space-between">
                  <Subtitle>{review.name}</Subtitle>
                  <Caption>{review.stars} stars</Caption>
                </View>
                <Text styleName="multiline">{review.body}</Text>
              </View>
            </Row>
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
  auth: state.auth,
});

const mapDispatchToProps = {
  addReview,
  fetchReviews,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews);
