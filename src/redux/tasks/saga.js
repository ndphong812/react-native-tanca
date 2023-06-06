import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* mySaga() {
  yield takeEvery('INCREMENT', increment)
}

function* increment() {
  console.log(`This is increment saga`);
}

function* decrement() {
  console.log(`This is decrement saga`);
}


export default mySaga;