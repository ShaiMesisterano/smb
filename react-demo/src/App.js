import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import AddTodo from "./components/AddTodo";
import Template from './components/Template';
import TodoList from './components/TodoList';
import {addTodo} from './slices/todo';
import {ThemeProvider} from "styled-components";

const lightTheme = {
    backgroundColor: 'lightblue',
    fontSize: 14
}

const darkTheme = {
    backgroundColor: 'darkgray',
    fontSize: 12
}

const Todos = () => {
    const todos = useSelector(state => state.todo);
    const dispatch = useDispatch();
    const [mode, setMode] = useState('light');

    const insertTodo = (props) => {
        dispatch(addTodo(props));
    }

    return (
        <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
            <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>Color Mode</button>
            <h1>{"Todos".toLocaleLowerCase()}</h1>

            <Template.Header>
                Page 1
            </Template.Header>

            <Template.Content>
                <div style={{display: 'flex'}}>
                    <TodoList todos={todos || []}/>
                </div>
                <AddTodo shouldShowForm={true} insertTodo={insertTodo}>
                    <h1>Add New</h1>
                </AddTodo>

            </Template.Content>

            <Template.Footer>
                All rights reserved
            </Template.Footer>
        </ThemeProvider>
    )
}

export default Todos;