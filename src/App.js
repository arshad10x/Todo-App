import { useState } from "react";
import "./styles.css";

const Todo = ({ todo, toggleCompleteTask, handleDeleteTask }) => {
  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => toggleCompleteTask(todo.id)}
      />
      <span>{todo.task}</span>
      <button className="btn-delete" onClick={() => handleDeleteTask(todo.id)}>
        Delete
      </button>
    </div>
  );
};

const Footer = ({ getActiveTodos, setFilter, clearCompletedTodos }) => {
  return (
    <div>
      {getActiveTodos()} remaining todos
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Active")}>Active</button>
      <button onClick={() => setFilter("Completed")}>Completed</button>
      <button onClick={clearCompletedTodos}>Clear completed Task</button>
    </div>
  );
};

export default function App() {
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
      <input
        type="text"
        onChange={(e) => setInputTodo(e.target.value)}
        value={inputTodo}
      />
      <button className="btn-add" onClick={handleAddTask}>
        ADD
      </button>
      <div>
        {handleFilter().length > 0 ? (
          handleFilter().map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              toggleCompleteTask={toggleCompleteTask}
              handleDeleteTask={handleDeleteTask}
            />
          ))
        ) : (
          <p>No Task avaliable</p>
        )}
      </div>

      <Footer getActiveTodos={getActiveTodos} setFilter={setFilter} />
    </div>
  );
}
