import { users } from "utils/data";
import {
  CHANGE_CURRENT_REGISTER,
  CHANGE_PHONE_LOGIN,
  LOGIN_USER,
  REGISTER_USER,
  LOGIN_SUCCESS,
} from "./action";
import { storeData } from "./api";

const initialState = {
  users: users,
  currenrRegister: {
    id: "",
    fullName: "",
    phoneNumber: "",
    otp: "",
  },
  currentLogin: {
    id: "",
    fullName: "",
    phoneNumber: "",
    otp: "",
  },
  action: "",
  user: {
    id: "",
    fullName: "",
    phoneNumber: "",
    otp: "",
  },
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_REGISTER:
      return {
        ...state,
        currenrRegister: {
          ...state.currenrRegister,
          ...action.payload,
        },
        action: REGISTER_USER,
      };
    case CHANGE_PHONE_LOGIN:
      return {
        ...state,
        currentLogin: {
          ...state.currentLogin,
          phoneNumber: action.payload.phoneNumber,
        },
        action: LOGIN_USER,
      };
    case REGISTER_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
        currenrRegister: action.payload,
        action: "",
      };
    case LOGIN_SUCCESS:
      storeData();
      return {
        ...state,
        user: action.payload,
        action: "",
        isLoggedIn: true,
        message: "Đăng nhập thành công",
      };

    default:
      return state;
  }
};

export default authReducer;
