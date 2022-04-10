import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import Template from './components/Template';
import Card from './components/Card';
import { useAppSelector, useAppDispatch } from './hooks/app';
import { addTodo } from './store/slices/todo';

const Todos = () => {
  // const [todos, setTodos] = useState([
  //   { title: 'learn react', description: 'fun, fun, fun', assignee: 'tomer' },
  //   { title: 'have a dessert', description: 'chocolate', assignee: 'eugene' },
  //   { title: 'have a sleep', description: 'after the dessert', assignee: 'noa' },
  // ]);
  const todos = useAppSelector(state => state.todo);
  const dispatch = useAppDispatch();

  const insertTodo = (props) => {
    // setTodos((lastState) => [...lastState, props]);
    dispatch(addTodo(props));
  }

  return (
    <>
      <h1>{"Todos".toLocaleLowerCase()}</h1>

      <Template.Header>
        My todo list:
      </Template.Header>

      <Template.Content>
        <div style={{display: 'flex', columnGap: '10px'}}>
          {todos.map(({ title, description, assignee }, i) => <Card key={i} title={title} description={description} tag={assignee} color="lightblue" />)}
        </div>

        <h2>Assignees:</h2>
        {todos.map(({ assignee }, i) => <Card key={i} title={assignee.substring(1)} description={assignee.substring(2)} />)}

        <AddTodo shouldShowForm={true} insertTodo={insertTodo}>
          <h1>Add New</h1>
        </AddTodo>

      </Template.Content>



      {/* <footer>
        All rights reserved
      </footer> */}

      <Template.Footer>
        All rights reserved
      </Template.Footer>
    </>
  )
}

export default Todos;