import types from "../types/location";

const initialState = {
  isFetching: false,
  hasError: false,
  errorMessage: "",
  trucksLocation: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // LOCATION FETCH FROM REALTIME DATABASE
    case types.TRUCK_LOCATION_FETCH_START: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case types.TRUCK_LOCATION_FETCH_FINISHED: {
      const { key, location, distance } = action.location;

      let locations;
      if (state.trucksLocation) {
        locations = Object.assign({}, state.trucksLocation);
      } else {
        locations = {};
      }

      // add new location
      locations[key] = { location, distance };

      return {
        ...state,
        isFetching: false,
        trucksLocation: locations,
      };
    }
    case types.TRUCK_LOCATION_FETCH_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        hasError: true,
        errorMessage: error,
      };
    }
    // LOCATION UPDATE FROM REALTIME DATABASE
    case types.TRUCK_LOCATION_UPDATE_START: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case types.TRUCK_LOCATION_UPDATE_FINISHED: {
      return {
        ...state,
        isFetching: false,
      };
    }
    case types.TRUCK_LOCATION_UPDATE_ERROR: {
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
