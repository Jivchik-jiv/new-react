import { authApi } from "../../api/auth-api";
import {
  getError,
  getRequest,
  getSuccess,
  loginError,
  loginRequest,
  loginSuccess,
  logoutError,
  logoutRequest,
  logoutSuccess,
  registerError,
  registerRequest,
  registerSuccess,
} from "./auth-actions";

// let user2={
//     "name": "Bob bob",
//     "email": "yuyuy@asd.com",
//     "password": "11111111"
//   };

//   let user1 = {
//     "name": "Adrian Cross",
//     "email": "xxxxx@ddd.com",
//     "password": "1111111"
//   };

//   let user3 ={
//       name: "Gggg",
//       email: "jiv@faik.com",
//       password: "33333333"
//   }

//   let user4 ={
//     name: "Oleooo",
//     email: "ole@faik.com",
//     password: "22222222"
// }

export const register = (credentials) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const responce = await authApi.register(credentials);
    dispatch(registerSuccess(responce));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

export const login = (credentials) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    let responce = await authApi.login(credentials);
    dispatch(loginSuccess(responce));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const logout = () => async (dispatch) => {
  dispatch(logoutRequest());
  try {
    await authApi.logout();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error));
  }
};

export const current = () => async (dispatch, getState) => {
  let {
    auth: { token },
  } = getState();
  if (!token) {
    return;
  }
  dispatch(getRequest());

  try {
    let responce = await authApi.current(token);

    dispatch(getSuccess(responce));
  } catch (error) {
    dispatch(getError(error));
  }
};
