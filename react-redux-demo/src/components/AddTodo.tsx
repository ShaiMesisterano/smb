import React, { useState } from "react";
import { parseMinutes } from '../utils/datetime';
import { Button, Select } from 'antd';
import { useAppDispatch } from '../hooks/app';

const { Option } = Select;

const AddTodo = ({ shouldShowForm, insertTodo, children }) => {
    const dispatch = useAppDispatch();

    const [newTodoTitle, setNewTodoTitle] = useState('');
    const [newTodoDescription, setNewTodoDescription] = useState('');

    console.log('render at minute:', parseMinutes({ minutes: new Date().getMinutes() }));

    const addTodo = event => {
        event.preventDefault();
        insertTodo({ title: newTodoTitle, description: newTodoDescription });
    
    };

    return (
        <>
            {children}
            {shouldShowForm && <form>
                <div style={{ display: 'flex', flexDirection: 'column', width: 300 }}>
                    <label htmlFor='title'></label>
                    <input id='title' type='text' onChange={(event) => setNewTodoTitle(event.target.value)} />

                    <label htmlFor='description'></label>
                    <input id='description' type='description' onChange={(event) => setNewTodoDescription(event.target.value)} />

                    {/* <button type="submit">Add</button> */}


                    <Select>
                        <Option value="tomer">Tomer</Option>
                        <Option value="eugene">Eugene</Option>
                        <Option value="noa">Noa</Option>
                    </Select>
                </div>
                {/* <Button type="primary" htmlType="submit" size="large"> */}
                <button type="button" onClick={addTodo}>
                    Add
                    </button>
                {/* </Button> */}
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