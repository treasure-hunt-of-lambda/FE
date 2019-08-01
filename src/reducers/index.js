import { combineReducers } from "redux";

import explore from "./exploreReducer";
import items from "./itemReducers";

export default combineReducers({
	explore,
	items
})