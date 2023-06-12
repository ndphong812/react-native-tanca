import { all } from "redux-saga/effects";
import { watchLogin } from "redux/auths/saga";

export default function* rootSaga() {
  yield all([watchLogin()]);
}
