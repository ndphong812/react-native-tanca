import { users } from "utils/data";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginUser = (phoneNumber, otp) => {
  try {
    const foundUser = users.find(
      (user) => user.phoneNumber === phoneNumber && user.otp == otp
    );
    if (Object.keys(foundUser).length) {
      return foundUser;
    } else {
      throw new Error("User not found");
    }
  } catch {
    return "error";
  }
};

export const storeData = async () => {
  try {
    await AsyncStorage.setItem("isLoggedIn", "true");
  } catch (error) {
    console.log("error", error); // Temporarily, I don't handle this thoroughly
  }
};

export const retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem("isLoggedIn");
    if (value !== null) {
      return value === "true";
    }
  } catch (error) {
    console.log("error", error); // Temporarily, I don't handle this thoroughly
  }
};
