import { GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS } from "./UserType";

const initialState = {
  loading: false,
  user: {},
  error: "",
};

function UserReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_REQUEST:
      return { ...state, loading: true };
    case GET_USER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: "",
      };
    case GET_USER_FAIL:
      return state;
    default:
      return state;
  }
}

export default UserReducer;