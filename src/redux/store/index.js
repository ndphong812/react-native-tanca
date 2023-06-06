import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import counterReducer from '../tasks/reducer';
import mySaga from '../tasks/saga';

const sagaMiddleware = createSagaMiddleware();

import {combineReducers} from 'redux';

const reducer = combineReducers({
  counter: counterReducer,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);
