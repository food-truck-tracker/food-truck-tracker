import types from "../types/review";

const initialState = {
  isFetching: false,
  hasError: false,
  errorMessage: "",
  reviews: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // REVIEW FETCH FROM FIRESTORE
    case types.REVIEW_FETCH_START: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case types.REVIEW_FETCH_FINISHED: {
      const { reviews } = action;
      return {
        ...state,
        isFetching: false,
        reviews,
      };
    }
    case types.REVIEW_FETCH_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        hasError: true,
        errorMessage: error,
      };
    }
    // REVIEW ADD IN FIRESTORE
    case types.REVIEW_ADD_START: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case types.REVIEW_ADD_FINISHED: {
      return {
        ...state,
        isFetching: false,
      };
    }
    case types.REVIEW_ADD_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        hasError: true,
        errorMessage: error,
      };
    }
    default: {
      return state;
    }
  }
};
