import { TodoProvider } from "./context/TodoContext";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <TodoProvider>
      <div className="w-full">
        <header className="flex items-center h-18 pl-4 bg-emerald-700 mb-9">
            <h1 className="text-2xl sm:text-3xl text-white">Todo App</h1>
        </header>
        <div className="container max-w-[400px] mx-auto ">
          <AddTodoForm />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}
