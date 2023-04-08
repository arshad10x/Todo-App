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

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInputTodo(e.target.value)}
        value={inputTodo}
      />
      <button onClick={handleAddTask}>ADD</button>
      <div>
        {todos.map((todos, index) => (
          <div className="todo">
            <span key={index}>{todos}</span>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
