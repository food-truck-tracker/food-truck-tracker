import firebase from "react-native-firebase";

import types from "../types/auth";

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
    console.log(response);
    if (response.error) {
      throw new Error(response);
    }
    dispatch(loginFinished(response._user));
  } catch (error) {
    console.log(error);
    dispatch(loginError(error));
  }
};

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

    const { _user } = response;

    await _user.updateProfile({ displayName: name });

    dispatch(registerFinished(_user));
  } catch (error) {
    dispatch(registerError(error));
  }
};
