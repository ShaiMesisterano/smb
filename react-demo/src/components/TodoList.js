import { Card } from 'antd';

const TodoList = ({ todos }) => {
    return (
            todos.map(({ title, description }, i) => <Card key={i} title={title}>{description}</Card>)
    )
}


export default TodoList;