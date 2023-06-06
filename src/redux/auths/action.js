export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

// Register
export const register = request => {
  return {
    type: REGISTER,
    payload: request,
  };
};

// Login
export const login = request => {
  return {
    type: LOGIN,
    payload: request,
  };
};

// Logout
export const logout = request => {
  return {
    type: LOGOUT,
    payload: request,
  };
};