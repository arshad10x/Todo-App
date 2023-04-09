import "./styles.css";
import { useState } from "react";
import Footer from "./components/Footer";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import InputTask from "./components/InputTask";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState("");
  const [filter, setFilter] = useState("All");

  const handleAddTask = () => {
    setTodos([
      ...todos,
      {
        task: inputTodo,
        id: Date.now().toString(),
        isCompleted: false,
      },
    ]);
    setInputTodo("");
  };

  // Deleting single Task
  const handleDeleteTask = (deletedTodoId) => {
    const restTodos = todos.filter((todo) => todo.id !== deletedTodoId);
    setTodos(restTodos);
  };

  // Filter completed and incompleted task

  const toggleCompleteTask = (taskId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === taskId) {
        return {
          id: todo.id,
          task: todo.task,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleFilter = () => {
    if (filter === "Active") {
      return todos.filter((todo) => todo.isCompleted === false);
    } else if (filter === "Completed") {
      return todos.filter((todo) => todo.isCompleted === true);
    } else {
      return todos;
    }
  };

  // clear all task
  const clearCompletedTodos = () => {
    const activeTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(activeTodos);
  };

  // Task remaining

  const getActiveTodos = () => {
    const activeTodos = todos.filter((todo) => !todo.isCompleted);
    return activeTodos.length;
  };

  return (
    <div>
      <InputTask
        setInputTodo={setInputTodo}
        inputTodo={inputTodo}
        handleAddTask={handleAddTask}
      />
      <TodoList
        handleFilter={handleFilter}
        toggleCompleteTask={toggleCompleteTask}
        handleDeleteTask={handleDeleteTask}
      />

      <Footer
        getActiveTodos={getActiveTodos}
        setFilter={setFilter}
        clearCompletedTodos={clearCompletedTodos}
      />
    </div>
  );
};
export default App;
