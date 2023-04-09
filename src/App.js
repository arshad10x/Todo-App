import { useState } from "react";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState("");

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
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(newTodos);
    console.log(JSON.stringify(newTodos));
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
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <div className="todo" key={index}>
              <input
                type="checkbox"
                value={todo.isCompleted}
                onChange={() => toggleCompleteTask(todo.id)}
              />
              <span>{todo.task}</span>
              <button
                className="btn-delete"
                onClick={() => handleDeleteTask(todo.id)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No Task avaliable</p>
        )}
      </div>
    </div>
  );
}
