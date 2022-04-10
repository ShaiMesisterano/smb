import React, { useState } from "react";
import { parseMinutes } from '../utils/datetime';
import { Button, Select } from 'antd';
import {Todo} from '../types/Todo';
import { useForm, Controller } from "react-hook-form";

// const { Option } = Select;

interface AddTodoProps {
    shouldShowForm: boolean;
    insertTodo: (todo: Todo) => void;
    children: React.ReactNode;
}

const assignees = [
    {value: 'tomer', label: 'Tomer'}, 
    {value: 'noa', label: 'Noa'}, 
    {value: 'eugene', label: 'Eugene'}, 
];

const AddTodo = ({ shouldShowForm, insertTodo, children }: AddTodoProps) => {
    const [newTodoTitle, setNewTodoTitle] = useState('');
    const [newTodoDescription, setNewTodoDescription] = useState('');
    const { control, formState: { errors }, register, handleSubmit } = useForm({mode: 'onChange', reValidateMode: "onChange"});

    console.log('render at minute:', parseMinutes({ minutes: new Date().getMinutes() }));

    // const addTodo = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     event.preventDefault();
    //     insertTodo({ title: newTodoTitle, description: newTodoDescription });
    
    // };

    const onSubmit = ({title, description, assignee}: any) => {
        insertTodo({ title, description, assignee });
    }

    return (
        <>
            {children}
            {shouldShowForm && <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ display: 'flex', flexDirection: 'column', width: 300 }}>
                    <label htmlFor='title'></label>
                    <input {...register("title", {required: true, maxLength: {value: 6, message: 'Too many characters'}})} id='title' type='text' />
                    {errors.title?.message}

                    <label htmlFor='description'></label>
                    <input {...register("description")} id='description' type='description' />

                    {/* <button type="submit">Add</button> */}


                    {/* <Select>
                        <Option value="tomer">Tomer</Option>
                        <Option value="eugene">Eugene</Option>
                        <Option value="noa">Noa</Option>
                    </Select> */}
                    <Controller
                        name="assignee"
                        control={control}
                        render={({ field }) => <Select {...field} options={assignees} />}
                    />
                </div>
                <Button type="primary" htmlType="submit" size="large">
                {/* <button type="button" onClick={addTodo}> */}
                    Add
                    {/* </button> */}
                </Button>
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