import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    "Learn React.js",
    "Learn JS",
    "Learn css",
    "Learn Sass",
    "Learn "
  ]);

  const [inputTodo, setInputTodo] = useState("");
  const handleAddTask = () => {
    setTodos([...todos, inputTodo]);
    setInputTodo("");
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
        {todos.map((todos, index) => (
          <p key={index}>{todos}</p>
        ))}
      </div>
    </div>
  );
}
