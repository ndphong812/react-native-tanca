import { put, call, takeLatest } from "redux-saga/effects";
import { loginUser } from "./api";
import { loginSuccess, loginFailure } from "redux/auths/action";

function* login(action) {
  const { phoneNumber, otp } = action.payload;
  try {
    const user = yield call(loginUser, phoneNumber, otp);
    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export function* watchLogin() {
  yield takeLatest("LOGIN_REQUEST", login);
}
