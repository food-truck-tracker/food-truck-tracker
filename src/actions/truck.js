import firebase from "react-native-firebase";
import GeoFire from "geofire";

import types from "../types/truck";

const fetchLocationStart = () => ({
  type: types.TRUCK_LOCATION_FETCH_START,
});

const fetchLocationError = error => ({
  type: types.TRUCK_LOCATION_FETCH_ERROR,
  error,
});

const fetchLocationFinish = locations => ({
  type: types.TRUCK_LOCATION_FETCH_FINISHED,
  locations,
});

export const fetchTrucksLocation = (userLocation, radius) => async (
  dispatch,
  getState
) => {
  dispatch(fetchLocationStart());
  try {
    /*
    const ref = firebase.database().ref("/trucks");
    let geoFire = new GeoFire(ref);

    let query = geoFire.query({
      center: [userLocation.lat, userLocation.lon],
      radius,
    });

*/
  } catch (error) {
    dispatch(fetchLocationError(error));
  }
};

export const fetchTrucksInfo = (userLocation, radius) => async (
  dispatch,
  getState
) => {};
