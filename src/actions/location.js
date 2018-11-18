import firebase from "react-native-firebase";
import GeoFire from "geofire";

import types from "../types/location";

// LOCATION FETCHING
const fetchLocationStart = () => ({
  type: types.TRUCK_LOCATION_FETCH_START,
});

const fetchLocationError = error => ({
  type: types.TRUCK_LOCATION_FETCH_ERROR,
  error,
});

const fetchLocationFinish = location => ({
  type: types.TRUCK_LOCATION_FETCH_FINISHED,
  location,
});

export const fetchTrucksLocation = (userLocation, radius) => async dispatch => {
  dispatch(fetchLocationStart());
  try {
    const ref = firebase.database().ref("/trucks");
    let geoFire = new GeoFire(ref);

    let query = geoFire.query({
      center: [userLocation.lat, userLocation.lon],
      radius,
    });

    query.on("key_entered", (key, location, distance) => {
      dispatch(fetchLocationFinish({ key, location, distance }));
    });
  } catch (error) {
    dispatch(fetchLocationError(error));
  }
};

// LOCATION UPDATE
const updateLocationStart = () => ({
  type: types.TRUCK_LOCATION_UPDATE_START,
});

const updateLocationError = error => ({
  type: types.TRUCK_LOCATION_UPDATE_ERROR,
  error,
});

const updateLocationFinish = () => ({
  type: types.TRUCK_LOCATION_UPDATE_FINISHED,
});

export const updateTrucksLocation = (lat, lon) => async dispatch => {
  dispatch(updateLocationStart());
  try {
    // get current user
    const user = firebase.auth().currentUser;

    // make geofire ref
    const ref = firebase.database().ref("/trucks");
    let geoFire = new GeoFire(ref);

    await geoFire.set(user.uid, [lat, lon]);
    dispatch(updateLocationFinish());
  } catch (error) {
    dispatch(updateLocationError(error));
  }
};
