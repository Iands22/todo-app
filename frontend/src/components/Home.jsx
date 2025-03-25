import TodoList from './TodoList'
import SearchBar from './SearchBar'

export default function Home() {
  return (
    <div>
        <h1 className='text-emerald-700'>Todo App</h1>
        <SearchBar />
        <TodoList />
    </div>
  )
}
