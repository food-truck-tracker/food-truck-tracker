import firebase from "react-native-firebase";

import types from "../types/user";

const fetchInfoStart = () => ({
  type: types.USER_FETCH_START,
});

const fetchInfoError = error => ({
  type: types.USER_FETCH_ERROR,
  error,
});

const fetchInfoFinish = user => ({
  type: types.USER_FETCH_FINISHED,
  user,
});

export const fetchUserInfo = () => async dispatch => {
  dispatch(fetchInfoStart());
  try {
    // go to firestore ref for user
    let ref = await firebase.firestore().collection("users");
    let user = await firebase.auth().currentUser;
    let doc = await ref.doc(user.uid);
    let snap = await doc.get();

    dispatch(fetchInfoFinish(await snap.data()));
  } catch (e) {
    dispatch(fetchInfoError(e));
  }
};

export const resetUserInfo = () => async dispatch => {
  dispatch({
    type: types.RESET_USER_INFO,
  });
};
