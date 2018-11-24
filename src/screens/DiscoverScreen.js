import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import {
  GridRow,
  Caption,
  Title,
  Subtitle,
  TouchableOpacity,
  ImageBackground,
  Tile,
  Divider,
  Card,
  Image,
  Screen,
  ListView,
  Icon,
  Button,
} from "@shoutem/ui";

import { fetchTrucksInfo } from "../actions/truck";

class DiscoverScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Discover",
      headerRight: (
        <Button onPress={navigation.getParam("fetchTrucksInfo")}>
          <Icon name="refresh" />
        </Button>
      ),
    };
  };

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  componentDidMount() {
    // set prop function to navigation props
    this.props.navigation.setParams({
      fetchTrucksInfo: this.props.fetchTrucksInfo,
    });
    this.props.fetchTrucksInfo();
  }

  truckTileClick = truck_id => {
    // navigate to truck page
    this.props.navigation.push("Truck", {
      truck_id,
      info: this.props.truck.trucksInfo[truck_id],
      location: this.props.location.trucksLocation[truck_id],
    });
  };

  renderRow(rowData, sectionId, index) {
    // rowData contains grouped data for one row,
    // so we need to remap it into cells and pass to GridRow
    if (index === "0") {
      return (
        <TouchableOpacity
          key={index}
          onPress={() => this.truckTileClick(rowData[0]["id"])}
        >
          <ImageBackground
            styleName="large"
            source={{
              uri: rowData[0].thumbnail,
            }}
          >
            <Tile>
              <Title styleName="md-gutter-bottom">{rowData[0].name}</Title>
              <Subtitle styleName="sm-gutter-horizontal">
                {rowData[0].description}
              </Subtitle>
            </Tile>
          </ImageBackground>
          <Divider styleName="line" />
        </TouchableOpacity>
      );
    }

    const cellViews = rowData.map((truck, id) => {
      return (
        <TouchableOpacity
          key={id}
          styleName="flexible"
          onPress={() => this.truckTileClick(truck["id"])}
        >
          <Card styleName="flexible">
            <Image
              styleName="medium-wide"
              source={{
                uri: truck.thumbnail,
              }}
            />
            <View styleName="content">
              <Subtitle numberOfLines={3}>{truck.name}</Subtitle>
              <View styleName="horizontal">
                <Caption styleName="collapsible" numberOfLines={2}>
                  {truck.description}
                </Caption>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      );
    });

    return <GridRow columns={2}>{cellViews}</GridRow>;
  }

  render() {
    const { trucksInfo } = this.props.truck;

    // add id as a field also to retrive when going to truck page
    for (let truck in trucksInfo) {
      trucksInfo[truck]["id"] = truck;
    }

    // Group the trucks into rows with 2 columns, except for the
    // first truck. The first truck is treated as a featured truck
    let isFirstArticle = true;
    const groupedData = GridRow.groupByRows(trucksInfo, 2, () => {
      if (isFirstArticle) {
        isFirstArticle = false;
        return 2;
      }
      return 1;
    });

    return (
      <Screen>
        <ListView data={groupedData} renderRow={this.renderRow} />
      </Screen>
    );
  }
}

// redux connection
const mapStateToProps = state => ({
  truck: state.truck,
  location: state.location,
});

const mapDispatchToProps = {
  fetchTrucksInfo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverScreen);
