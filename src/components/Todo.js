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

export default Todo;
