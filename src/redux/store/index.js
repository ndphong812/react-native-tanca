import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authReducer from "../auths/reducer";
import rootSaga from "redux/store/rootSaga";
import { combineReducers } from "redux";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  auths: authReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
