import { combineReducers } from "redux";

import auth from "./auth";
import truck from "./truck";
import location from "./location";
import review from "./review";
import user from "./user";

export default combineReducers({
  auth,
  truck,
  location,
  review,
  user,
});
