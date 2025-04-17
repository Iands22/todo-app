import { createContext, useState, useContext, useEffect } from "react";
import {
  addTodo as addTodoAPI,
  updateTodo as updateTodoAPI,
  deleteTodo as deleteTodoAPI,
  getTodos,
} from "../services/api/todoService";

const TodoContext = createContext();

export const useTodos = () => useContext(TodoContext);

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const data = await getTodos();
      setTodos(data);
      setFilteredTodos(data);
    }
    fetchTodos();
  }, []);

  const addTodo = async (todoName) => {
    const data = { todoName: todoName };
    const newTask = await addTodoAPI(data);
    setTodos((prevTodos) => [...prevTodos, newTask]);
  };

  const updateTodo = async (id, data) => {
    const updatedTodo = await updateTodoAPI(id, data);
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.todoId === id ? updatedTodo : todo))
    );
  };

  const deleteTodo = async (id) => {
    await deleteTodoAPI(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.todoId !== id));
  };

  const filterTodos = (searchTerm) => {
    const filterResult = todos.filter((todo) =>
      todo.todoName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTodos(filterResult);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        filteredTodos,
        addTodo,
        updateTodo,
        deleteTodo,
        filterTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
