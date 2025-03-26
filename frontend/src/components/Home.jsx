import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList'

export default function Home() {
  return (
    <div>
        <h1 className='text-emerald-700'>Todo App</h1>
        <AddTodoForm />
        <TodoList />
    </div>
  )
}
