import { combineReducers } from "redux";

import pub from "./pubReducer";
import User from "./user_reducer";
import Command from "./command_reducer";
import Restaurant from "./restaurant_reducer";

export default combineReducers({
    User,
    pub,
    Command,
    Restaurant
});