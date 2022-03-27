import { useState } from "react";
import { parseMinutes } from '../utils/datetime';

const AddTodo = ({ shouldShowForm, insertTodo, children }) => {
    const [newTodoTitle, setNewTodoTitle] = useState('');
    const [newTodoDescription, setNewTodoDescription] = useState('');

    console.log('render at minute:', parseMinutes({ minutes: new Date().getMinutes() }));

    const addTodo = event => {
        event.preventDefault();
        insertTodo({ title: newTodoTitle, description: newTodoDescription })
    };

    return (
        <>
            {children}
            {shouldShowForm && <form onSubmit={e => addTodo(e)}>
                <label htmlFor='title'></label>
                <input id='title' type='text' onChange={(event) => setNewTodoTitle(event.target.value)} />

                <label htmlFor='description'></label>
                <input id='description' type='description' onChange={(event) => setNewTodoDescription(event.target.value)} />

                <button type="submit">Add</button>

                <p>
                    {newTodoTitle}
                </p>
                <p>
                    {newTodoDescription}
                </p>
            </form>}
        </>
    )
}

export default AddTodo;