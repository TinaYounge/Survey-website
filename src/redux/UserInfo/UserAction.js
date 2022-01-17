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

export const UserUpdate = () => {
  return (dispatch) => {
    dispatch(UserRequest);
    // const UserResponse = async () => {
    //   try {
    //     const res = await api.put(`api/UserOfStudent/updateUser`);
    //     const data = await res.data;
    //     dispatch(UserSuccess(data));
    //     notifyFollowing();
    //   } catch (error) {
    //     const errorMge = Error.message;
    //     dispatch(UserFail(errorMge));
    //   }
    // };
    UserResponse();
  };
};

export const GetUser = () => {
  return (dispatch) => {
    dispatch(UserRequest);
    // const UserResponse = async () => {
    //   try {
    //     const res = await api.get(`api/UserOfStudent/getAllUsersPaidOfStudent`);
    //     const data = await res.data;
    //     dispatch(UserSuccess(data));
    //   } catch (error) {
    //     const errorMge = Error.message;
    //     dispatch(UserFail(errorMge));
    //   }
    // };
    UserResponse();
  };
};