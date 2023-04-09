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

export default Footer;