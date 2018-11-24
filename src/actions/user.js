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

// adding favorite actions
const addFavoriteStart = () => ({
  type: types.ADD_FAVORITE_START,
});

const addFavoriteFinish = () => ({
  type: types.ADD_FAVORITE_FINISHED,
});

const addFavoriteError = error => ({
  type: types.ADD_FAVORITE_ERROR,
  error,
});

export const addFavorite = truck_id => async dispatch => {
  dispatch(addFavoriteStart());
  try {
    // go to firestore ref for user
    let user = await firebase.auth().currentUser;
    let docRef = await firebase
      .firestore()
      .collection("users")
      .doc(user.uid);

    // add new truck into array
    await docRef.update({
      favorites: firebase.firestore.FieldValue.arrayUnion(truck_id),
    });

    dispatch(addFavoriteFinish());
  } catch (e) {
    dispatch(addFavoriteError(e));
  }
};

// removing favorite trucks
const removeFavoriteStart = () => ({
  type: types.REMOVE_FAVORITE_START,
});

const removeFavoriteFinish = () => ({
  type: types.REMOVE_FAVORITE_FINISHED,
});

const removeFavoriteError = error => ({
  type: types.REMOVE_FAVORITE_ERROR,
  error,
});

export const removeFavorite = truck_id => async dispatch => {
  dispatch(removeFavoriteStart());
  try {
    // go to firestore ref for user
    let user = await firebase.auth().currentUser;
    let docRef = await firebase
      .firestore()
      .collection("users")
      .doc(user.uid);

    // remove truck from array
    await docRef.update({
      favorites: firebase.firestore.FieldValue.arrayRemove(truck_id),
    });

    dispatch(removeFavoriteFinish());
  } catch (e) {
    dispatch(removeFavoriteError(e));
  }
};

// actions for uploading truck image to cloud storage
const uploadImageStart = () => ({
  type: types.UPLOAD_IMAGE_START,
});

const uploadImageFinish = () => ({
  type: types.UPLOAD_IMAGE_FINISHED,
});

const uploadImageError = error => ({
  type: types.UPLOAD_IMAGE_ERROR,
  error,
});

export const uploadImage = (
  truck_id,
  uri,
  type = "extra",
  fileName = "image.jpg"
) => async dispatch => {
  dispatch(uploadImageStart());
  try {
    // get ref to bucket
    const ref = await firebase.storage().ref(`images/${truck_id}/${fileName}`);
    // upload image, TODO: show upload progess?
    await ref.putFile(uri);
    // get url back
    const url = await ref.getDownloadURL();

    // save url into trucks/ firestore collection
    const truckRef = await firebase
      .firestore()
      .collection("trucks")
      .doc(truck_id);

    if (type == "thumbnail") {
      await truckRef.update({
        thumbnail: url,
      });
    } else {
      await truckRef.update({
        images: firebase.firestore.FieldValue.arrayUnion(url),
      });
    }

    dispatch(uploadImageFinish());
  } catch (e) {
    dispatch(uploadImageError(e));
  }
};
