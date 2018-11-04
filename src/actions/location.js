import firebase from "react-native-firebase";

import types from "../types/location";

// LOCATION FETCHING
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

export const fetchTrucksLocation = (userLocation, radius) => async dispatch => {
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
