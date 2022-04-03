import { all, takeEvery, fork, call } from 'redux-saga/effects';
import {addTodo} from '../slices/todo';

const fetchAddTodo = async ({title, description, assignee}) => {
    const response = await fetch ('http://127.0.0.1:3000/todos', {
        method: 'POST',
        body: JSON.stringify({title, description, assignee}),
    });
    const data = await response.json();
    return data;
}

function* fetchTodo() {
    // yield call(fetchAddTodo, {title, description, assignee});
    yield fetch('http://127.0.0.1:3000/todos', {
        method: 'POST',
        headers: {
            contentType: 'application/json'
        },
        body: JSON.stringify({id: new Date(),title: 't1', description: 'd1', assignee: 'a1'}),
    });
}

function* watchTodo() {
    console.log('*** watchTodo');
    yield takeEvery(addTodo.type, fetchTodo);
}

export default function* rootSaga() {
    yield all([
        fork(watchTodo),
    ])
  }