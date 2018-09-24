import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

export default class MapViewScreen extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.header}>Map View</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
      fontSize: 32,
      fontWeight: "bold",
      padding: 10,
      margin: 10
    }
  });