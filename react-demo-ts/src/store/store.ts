import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todo';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/todo'
import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        todo: todoReducer
    },
    middleware: (getDefaultMiddleware: any) => ([...getDefaultMiddleware({ thunk: false }).concat(logger), sagaMiddleware]),
    devTools: true
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;