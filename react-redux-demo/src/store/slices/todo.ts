import { createSlice } from '@reduxjs/toolkit';
import {Todo} from '../../types/Todo';

type TodoState = Todo[];

const initialState: TodoState = [
    { title: 'learn react', description: 'fun, fun, fun', assignee: 'tomer' },
    { title: 'have a dessert', description: 'chocolate', assignee: 'eugene' },
    { title: 'have a sleep', description: 'after the dessert', assignee: 'noa' },
  ];

  export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: Todo) => {
            state.push({...action.payload, assignee: 'noa'});
        }
    }
  });

  export const { addTodo } = todoSlice.actions;

  export default todoSlice.reducer;