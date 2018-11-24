import React from "react";
import { View, Text } from "@shoutem/ui";

class Favorites extends React.Component {
  render() {
    const { navigation } = this.props;
    const list = navigation.getParam("list", []);
    return (
      <View>
        {list &&
          list.map((truckid, i) => (
            <View key={i}>
              <Text>{truckid}</Text>
            </View>
          ))}
      </View>
    );
  }
}

export default Favorites;
