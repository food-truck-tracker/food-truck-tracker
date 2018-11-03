import firebase from "react-native-firebase";
import GeoFire from "geofire";

import types from "../types/truck";

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

const fetchInfoStart = () => ({
  type: types.TRUCK_INFO_FETCH_START,
});

const fetchInfoError = error => ({
  type: types.TRUCK_INFO_FETCH_ERROR,
  error,
});

const fetchInfoFinish = infos => ({
  type: types.TRUCK_INFO_FETCH_FINISHED,
  infos,
});

export const fetchTrucksInfo = () => async dispatch => {
  dispatch(fetchInfoStart());
  try {
    let ref = await firebase.firestore().collection("trucks");
    let snap = await ref.get();

    let data = [];

    snap.forEach(async e => {
      data.push(e.data());
    });

    dispatch(fetchInfoFinish(data));
  } catch (e) {
    dispatch(fetchInfoError(e));
  }
};
