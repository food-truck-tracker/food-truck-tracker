import types from "../types/truck";

const initialState = {
  isFetching: false,
  hasError: false,
  errorMessage: "",
  trucksInfo: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // INFO FETCH FROM FIRESTORE
    case types.TRUCK_INFO_FETCH_START: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case types.TRUCK_INFO_FETCH_FINISHED: {
      const { infos } = action;
      return {
        ...state,
        isFetching: false,
        trucksInfo: infos,
      };
    }
    case types.TRUCK_INFO_FETCH_ERROR: {
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
