import firebase from "react-native-firebase";
import types from "../types/review";

// LOCATION FETCHING
const reviewFetchStart = () => ({
  type: types.REVIEW_FETCH_START,
});

const reviewFetchError = error => ({
  type: types.REVIEW_FETCH_ERROR,
  error,
});

const reviewFetchFinish = reviews => ({
  type: types.REVIEW_FETCH_FINISHED,
  reviews,
});

export const fetchReviews = truck_id => async dispatch => {
  dispatch(reviewFetchStart());
  try {
    const ref = await firebase.firestore().collection("reviews");

    // logic for fetching review
    const query = await ref.where("truck_id", "==", truck_id);
    // const ordered = await query.orderBy("created_at");
    const reviews = await query.get();

    let result = [];

    await reviews.forEach(async e => {
      result.push(e.data());
    });

    dispatch(reviewFetchFinish(result));
  } catch (error) {
    dispatch(reviewFetchError(error));
  }
};

// LOCATION UPDATE
const reviewAddStart = () => ({
  type: types.REVIEW_ADD_START,
});

const reviewAddError = error => ({
  type: types.REVIEW_ADD_ERROR,
  error,
});

const reviewAddFinish = () => ({
  type: types.REVIEW_ADD_FINISHED,
});

export const addReview = ({ stars, body, truck_id }) => async dispatch => {
  dispatch(reviewAddStart());
  try {
    const ref = await firebase.firestore().collection("reviews");
    const user = await firebase.auth().currentUser;

    // get user name
    const uref = await firebase
      .firestore()
      .collection("users")
      .doc(user.uid);
    const doc = await uref.get();
    const name = doc.data().name;

    // add review logic
    await ref.add({
      user_id: user.uid,
      name,
      stars,
      body,
      truck_id,
      created_at: Date.now(),
    });

    dispatch(reviewAddFinish());
  } catch (error) {
    dispatch(reviewAddError(error));
  }
};
