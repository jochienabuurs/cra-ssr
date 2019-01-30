import { combineReducers } from "redux";

import auth, { initialState as authState } from "./auth";
import profile, { initialState as profileState } from "./profile";

export const initialState = {
  auth: authState,
  profile: profileState
};

export default combineReducers({
  auth,
  profile
});
