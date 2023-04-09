const InputTask = ({ setInputTodo, inputTodo, handleAddTask }) => {
  return (
    <>
      <input
        type="text"
        onChange={(e) => setInputTodo(e.target.value)}
        value={inputTodo}
      />
      <button className="btn-add" onClick={handleAddTask}>
        ADD
      </button>
    </>
  );
};
export default InputTask;
