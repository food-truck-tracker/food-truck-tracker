import { combineReducers } from "redux";

import auth from "./auth";
import truck from "./truck";

export default combineReducers({
  auth,
  truck,
});
