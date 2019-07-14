
import { FETCH_PUB } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PUB:
      return action.payload;
    default:
      return state;
  }
};