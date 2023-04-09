import Todo from "./Todo";

const TodoList = ({ handleFilter, toggleCompleteTask, handleDeleteTask }) => {
  return (
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
  );
};

export default TodoList;
