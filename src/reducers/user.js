import types from "../types/user";

const initialState = {
  isFetching: false,
  hasError: false,
  errorMessage: "",
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // INFO FETCH FROM FIRESTORE
    case types.USER_FETCH_START: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case types.USER_FETCH_FINISHED: {
      const { user } = action;
      return {
        ...state,
        isFetching: false,
        user,
      };
    }
    case types.USER_FETCH_ERROR: {
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
