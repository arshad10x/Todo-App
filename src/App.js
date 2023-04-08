import { useState } from "react";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([
    "Learn React.js",
    "Learn JS",
    "Learn css",
    "Learn Sass",
    "Learn ",
  ]);

  const [inputTodo, setInputTodo] = useState("");
  const handleAddTask = () => {
    setTodos([...todos, inputTodo]);
    setInputTodo("");
  };

  // Deleting single Task
  const handleDeleteTask = (deletedTodo) => {
    const restTodos = todos.filter((todo) => todo !== deletedTodo);
    setTodos(restTodos);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInputTodo(e.target.value)}
        value={inputTodo}
      />
      <button onClick={handleAddTask}>ADD</button>
      <div>
        {todos.map((todo, index) => (
          <div className="todo" key={index}>
            <span>{todo}</span>
            <button onClick={() => handleDeleteTask(todo)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
