import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { title: '123learn react', description: 'fun, fun, fun' },
    { title: 'have a dessert', description: 'chocolate' },
    { title: 'have a sleep', description: 'after the dessert' },
];

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log('*** addTodo');
            state = [...state, action.payload]
        },
    },
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer