import { SET_AUTHED_USER } from "../actions/authedusers";

export function authedUser(state = {
  loggedIn: false,
  userId: ""
}, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return {
        // ...state,
          userId: action.payload,
          loggedIn: true,
      };

    default:
      return state;
  }
}
