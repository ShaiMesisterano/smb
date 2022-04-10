import { all, takeEvery, fork } from 'redux-saga/effects';
import {addTodo} from '../slices/todo';

function* fetchTodo() {
    console.log('*** fetchTodo');
}

export function* watchTodo() {
    console.log('*** watchTodo');
    yield takeEvery(addTodo.type, fetchTodo);
}

export default function* rootSaga() {
    yield all([
        fork(watchTodo),
    ])
  }