import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Template from './components/Template';

const Todos = () => {
  const [todos, setTodos] = useState([
    { title: 'learn react', description: 'fun, fun, fun' },
    { title: 'have a dessert', description: 'chocolate' },
    { title: 'have a sleep', description: 'after the dessert' },
  ]);

  const insertTodo = (props) => {
    setTodos((lastState) => [...lastState, props]);
  }

  return (
    <>
      <h1>{"Todos".toLocaleLowerCase()}</h1>
      {/* <header>
        header
        <ul>
          <li>list 1</li>
          <li>list 2</li>
        </ul>
      </header> */}

      <Template.Header>
        Page 1
      </Template.Header>

      <Template.Content>
        <ul>
          {todos.map(({ title, description }, i) => <li key={i}>{title}: {description}</li>)}
        </ul>
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