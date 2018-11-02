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
    console.log("login response", response);
    if (response.error) {
      throw new Error(response);
    }
    dispatch(loginFinished(response.user));
  } catch (error) {
    console.log(error);
    dispatch(loginError(error));
  }
};

// GOOGLE LOGIN FLOW

const googleLoginStart = () => ({
  type: types.GOOGLE_LOGIN_START,
});

const googleLoginFinished = user => ({
  type: types.GOOGLE_LOGIN_FINISHED,
  user,
});

const googleLoginError = error => ({
  type: types.GOOGLE_LOGIN_ERROR,
  error,
});

export const googleLoginUser = (idToken, accessToken) => async (
  dispatch,
  getState
) => {
  dispatch(googleLoginStart());
  try {
    const credential = firebase.auth.GoogleAuthProvider.credential(
      idToken,
      accessToken
    );

    const response = await firebase.auth().signInWithCredential(credential);

    console.log(response);

    if (response.error) {
      throw new Error(response);
    }

    dispatch(googleLoginFinished(response.user));
  } catch (error) {
    console.log(error);
    dispatch(googleLoginError(error));
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

export const registerUser = (name, email, pass) => async (
  dispatch,
  getState
) => {
  dispatch(registerStart());
  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass);
    console.log(response);

    if (response.error) {
      throw new Error(response);
    }

    const { user } = response;

    await user.updateProfile({ displayName: name });

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

    await ref.add({
      vendor_id: id,
      name,
      description,
      hours,
    });

    dispatch(truckRegisterFinished());
  } catch (error) {
    dispatch(truckRegisterError(error));
  }
};
