import firebase from "react-native-firebase";

import types from "../types/truck";

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

    let data = {};

    snap.forEach(async e => {
      data[e.id] = e.data();
    });

    dispatch(fetchInfoFinish(data));
  } catch (e) {
    dispatch(fetchInfoError(e));
  }
};
