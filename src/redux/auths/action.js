export const ADD_USER = "ADD_USER";

export const UPDATE_USER = "UPDATE_USER";

export const CHANGE_CURRENT_REGISTER = "CHANGE_CURRENT_REGISTER";

// Register
export const changeCurrentRegister = (request) => {
  return {
    type: CHANGE_CURRENT_REGISTER,
    payload: request,
  };
};


// Register
export const addUser = (request) => {
  return {
    type: ADD_USER,
    payload: request,
  };
};

//Edit
export const updateUser = (request) => {
  return {
    type: UPDATE_USER,
    payload: request,
  };
};
