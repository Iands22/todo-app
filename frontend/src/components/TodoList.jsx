import { useState, useEffect } from 'react'
import { data } from "../static_data/data"
import TodoItem from './TodoItem'


export default function TodoList() {
    const [ todos, setTodos ] = useState([])

    useEffect(() => {
        setTodos(data)
    }, [])
  return (
    <div>
        <h1>Liste des tâches</h1>
        <ul>
            {
                todos.map(todo => <TodoItem key={todo.todoId} todo={todo}/>)
            }
        </ul>
    </div>
  )
}
