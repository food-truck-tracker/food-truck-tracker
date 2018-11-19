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
  NavigationBar,
  ListView,
  Icon,
  Button,
} from "@shoutem/ui";

import { fetchTrucksInfo } from "../actions/truck";

class DiscoverScreen extends React.Component {
  componentWillMount() {
    if (!this.props.truck.trucksInfo) {
      this.props.fetchTrucksInfo();
    }
  }
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  truckTileClick = () => {
    // navigate to truck page
    this.props.navigation.push("Truck");
  };

  renderRow(rowData, sectionId, index) {
    // rowData contains grouped data for one row,
    // so we need to remap it into cells and pass to GridRow
    if (index === "0") {
      return (
        <TouchableOpacity key={index} onPress={this.truckTileClick}>
          <ImageBackground
            styleName="large"
            source={{
              uri:
                "https://cdn.pixabay.com/photo/2017/06/23/21/37/oldtimer-2436018_1280.jpg",
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
          onPress={this.truckTileClick}
        >
          <Card styleName="flexible">
            <Image
              styleName="medium-wide"
              source={{
                uri:
                  "https://images.pexels.com/photos/221357/pexels-photo-221357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
    // Group the restaurants into rows with 2 columns, except for the
    // first restaurant. The first restaurant is treated as a featured restaurant
    let isFirstArticle = true;
    const groupedData = GridRow.groupByRows(trucksInfo, 2, () => {
      if (isFirstArticle) {
        isFirstArticle = false;
        return 2;
      }
      return 1;
    });

    return (
      // <ScrollView>
      //   <Text style={styles.header}>Discover View</Text>
      //   {trucksInfo &&
      //     Object.entries(trucksInfo).map(truck => (
      //       <View key={truck[0]}>
      //         <Text>{truck[1].name}</Text>
      //         <Text>{truck[1].category}</Text>
      //         <Text>{truck[1].description}</Text>
      //       </View>
      //     ))}
      // </ScrollView>
      <Screen>
        {/* <NavigationBar
          styleName="inline"
          centerComponent={<Title bold>Discover Page</Title>}
          rightComponent={
            <Button onPress={this.props.fetchTrucksInfo}>
              <Icon name="refresh" />
            </Button>
          }
        /> */}
        <ListView data={groupedData} renderRow={this.renderRow} />
      </Screen>
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
