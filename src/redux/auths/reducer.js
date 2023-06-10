import { ADD_USER, CHANGE_CURRENT_REGISTER, UPDATE_USER } from "./action";
import uuid from "react-native-uuid";

const initialState = {
  users: [
    {
      id: 1,
      fullName: "Nguyen Van A",
      phoneNumber: "123456789",
      otp: "456789",
    },
    {
      id: 2,
      fullName: "Nguyen Van A",
      phoneNumber: "123456788",
      otp: "456788",
    },
    {
      id: 3,
      fullName: "Nguyen Van A",
      phoneNumber: "123456787",
      otp: "456787",
    },
    {
      id: 4,
      fullName: "Nguyen Van A",
      phoneNumber: "123456786",
      otp: "456786",
    },
    {
      id: 5,
      fullName: "Nguyen Van A",
      phoneNumber: "123456789",
      otp: "456785",
    },
  ],
  currenrRegister: {
    id: "",
    fullName: "",
    phoneNumber: "",
    otp: "",
  },
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
      };
    case ADD_USER:
      console.log("action.payload", action.payload);
      return {
        ...state,
        users: [...state.users, action.payload],
        currenrRegister: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
