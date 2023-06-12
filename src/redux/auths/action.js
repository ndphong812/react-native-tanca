export const REGISTER_USER = "REGISTER_USER";

export const CHANGE_CURRENT_REGISTER = "CHANGE_CURRENT_REGISTER";

export const CHANGE_PHONE_LOGIN = "CHANGE_PHONE_LOGIN";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGIN_REQUEST = "LOGIN_REQUEST";

// Change Current Register User
export const changeCurrentRegister = (request) => {
  return {
    type: CHANGE_CURRENT_REGISTER,
    payload: request,
  };
};

// Register
export const addUser = (request) => {
  return {
    type: REGISTER_USER,
    payload: request,
  };
};

// Change Phone User
export const changePhoneLogin = (request) => {
  return {
    type: CHANGE_PHONE_LOGIN,
    payload: request,
  };
};

// Login request
export const loginRequest = (user) => {
  return {
    type: LOGIN_REQUEST,
    payload: user,
  };
};

// Login success
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

// Login failed
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});
