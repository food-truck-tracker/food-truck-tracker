import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
} from "react-navigation";
import { Icon } from "@shoutem/ui";

import DiscoverScreen from "../screens/DiscoverScreen";
import MapViewScreen from "../screens/MapViewScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LoginForm from "../components/LoginForm";
import TruckPage from "../screens/TruckPage";
import Favorites from "../screens/Favorites";

const DiscoverStack = createStackNavigator(
  {
    Discover: DiscoverScreen,
    Truck: TruckPage,
  },
  {
    initialRouteName: "Discover",
  }
);

DiscoverStack.navigationOptions = {
  tabBarLabel: "Discover",
  tabBarIcon: <Icon name="add-to-favorites-on" />,
};

const MapStack = createStackNavigator(
  {
    Map: MapViewScreen,
    Truck: TruckPage,
  },
  {
    initialRouteName: "Map",
  }
);

MapStack.navigationOptions = {
  tabBarLabel: "Map",
  tabBarIcon: <Icon name="maps" />,
};

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginForm,
    Favorites: Favorites,
    Truck: TruckPage,
  },
  {
    initialRouteName: "Profile",
    navigationOptions: {
      title: "Profile",
    },
  }
);

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: <Icon name="user-profile" />,
};

export default createBottomTabNavigator({
  DiscoverStack,
  MapStack,
  ProfileStack,
});
