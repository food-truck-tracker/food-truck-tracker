import React from "react";
import {
  View,
  Row,
  Image,
  Subtitle,
  Caption,
  TouchableOpacity,
  Heading,
} from "@shoutem/ui";
import { connect } from "react-redux";

class Favorites extends React.Component {
  onRowClick = truck_id => {
    // navigate to truck page
    this.props.navigation.push("Truck", {
      truck_id,
      info: this.props.truck.trucksInfo[truck_id],
      location: this.props.location.trucksLocation[truck_id],
    });
  };

  render() {
    const { user } = this.props.user;
    const list = user.favorites;
    return (
      <View>
        {list ? (
          list.map((truckid, i) => {
            const truck = this.props.truck.trucksInfo[truckid];
            if (!truck) return null;
            return (
              <TouchableOpacity
                key={i}
                onPress={() => this.onRowClick(truckid)}
              >
                <Row>
                  <Image
                    styleName="small rounded-corners"
                    source={{
                      uri: truck.thumbnail,
                    }}
                  />
                  <View styleName="vertical stretch space-between">
                    <Subtitle>{truck.name}</Subtitle>
                    <Caption>{truck.description}</Caption>
                  </View>
                </Row>
              </TouchableOpacity>
            );
          })
        ) : (
          <Heading style={{ textAlign: "center", padding: 20 }}>
            Add favorites from truck screen!
          </Heading>
        )}
      </View>
    );
  }
}

// redux connection
const mapStateToProps = state => ({
  truck: state.truck,
  location: state.location,
  user: state.user,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
