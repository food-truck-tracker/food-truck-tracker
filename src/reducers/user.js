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
    case types.RESET_USER_INFO: {
      return {
        ...initialState,
      };
    }
    // adding new favorite
    case types.ADD_FAVORITE_START: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case types.ADD_FAVORITE_FINISHED: {
      return {
        ...state,
        isFetching: false,
        hasError: false,
        errorMessage: "",
      };
    }
    case types.ADD_FAVORITE_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        hasError: true,
        errorMessage: error,
      };
    }
    // removing favorites
    case types.REMOVE_FAVORITE_START: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case types.REMOVE_FAVORITE_FINISHED: {
      return {
        ...state,
        isFetching: false,
        hasError: false,
        errorMessage: "",
      };
    }
    case types.REMOVE_FAVORITE_ERROR: {
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
