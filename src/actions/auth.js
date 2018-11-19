import firebase from "react-native-firebase";

import types from "../types/auth";

// EMAIL LOGIN FLOW

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginFinished = user => ({
  type: types.LOGIN_FINISHED,
  user,
});

const loginError = error => ({
  type: types.LOGIN_ERROR,
  error,
});

export const loginUser = (email, pass) => async (dispatch, getState) => {
  dispatch(loginStart());
  try {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, pass);
    if (response.error) {
      throw new Error(response);
    }
    dispatch(loginFinished(response.user));
  } catch (error) {
    console.error(error);
    dispatch(loginError(error));
  }
};

// LOGOUT FLOW

const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutFinished = () => ({
  type: types.LOGOUT_FINISHED,
});

const logoutError = error => ({
  type: types.LOGOUT_ERROR,
  error,
});

export const logoutUser = () => async (dispatch, getState) => {
  dispatch(logoutStart());
  try {
    firebase.auth().signOut();
    dispatch(logoutFinished());
  } catch (error) {
    dispatch(logoutError(error));
  }
};

// REGISTER FLOW

const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerFinished = user => ({
  type: types.REGISTER_FINISHED,
  user,
});

const registerError = error => ({
  type: types.REGISTER_ERROR,
  error,
});

export const registerUser = (name, email, pass) => async dispatch => {
  dispatch(registerStart());
  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass);

    if (response.error) {
      throw new Error(response);
    }

    const { user } = response;

    // add user entry to firestore

    let ref = firebase
      .firestore()
      .collection("users")
      .doc(user.uid);

    await ref.set(
      {
        name,
      },
      { merge: true }
    );

    dispatch(registerFinished(user));
  } catch (error) {
    dispatch(registerError(error));
  }
};

// TRUCK REGISTER FLOW

const truckRegisterStart = () => ({
  type: types.TRUCK_REGISTER_START,
});

const truckRegisterFinished = user => ({
  type: types.TRUCK_REGISTER_FINISH,
  user,
});

const truckRegisterError = error => ({
  type: types.TRUCK_REGISTER_ERROR,
  error,
});

export const truckRegister = (
  id,
  name,
  description,
  hours
) => async dispatch => {
  dispatch(truckRegisterStart());
  try {
    let ref = firebase.firestore().collection("trucks");

    let response = await ref.add({
      name,
      description,
      hours,
    });

    // now add the truck id to user table
    const user = firebase.auth().currentUser;

    let userRef = firebase
      .firestore()
      .collection("users")
      .doc(user.uid);

    await userRef.set(
      {
        truck_id: response.id,
      },
      {
        merge: true,
      }
    );

    dispatch(truckRegisterFinished());
  } catch (error) {
    dispatch(truckRegisterError(error));
  }
};
