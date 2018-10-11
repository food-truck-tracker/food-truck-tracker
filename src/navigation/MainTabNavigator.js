import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import DiscoverScreen from '../screens/DiscoverScreen'
import MapViewScreen from '../screens/MapViewScreen'
import ProfileScreen from '../screens/ProfileScreen'

const DiscoverStack = createStackNavigator({
    Discover: DiscoverScreen,
});

DiscoverStack.navigationOptions = {
    tabBarLabel: 'Discover',
};

const MapStack = createStackNavigator({
    Map: MapViewScreen
});

MapStack.navigationOptions = {
    tabBarLabel: 'Map',
};

const ProfileStack = createStackNavigator({
    Profile: ProfileScreen
});

ProfileStack.navigationOptions = {
    tabBarLabel: 'Profile'
};

export default createBottomTabNavigator({
    DiscoverStack,
    MapStack,
    ProfileStack
});