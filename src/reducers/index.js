import { combineReducers } from "redux";

import auth from "./auth";
import truck from "./truck";
import location from "./location";
import review from "./review";

export default combineReducers({
  auth,
  truck,
  location,
  review,
});
