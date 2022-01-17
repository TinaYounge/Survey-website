import { GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS } from "./UserType";

export const UserRequest = () => {
  return {
    type: GET_USER_REQUEST,
  };
};

export const UserSuccess = (state) => {
  return {
    type: GET_USER_SUCCESS,
    payload: state,
  };
};



export const UserFail = () => {
  return {
    type: GET_USER_FAIL,
    payload: Error,
  };
};

export const UserUpdate = (roleUpdate) => {
  return (dispatch) => {
    dispatch(UserSuccess(roleUpdate));
  };
};
