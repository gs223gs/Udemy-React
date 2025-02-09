const TodoItem = ({ id, todo, onClick }) => {
  return (
    <div>
      <button
        onClick={() => {
          onClick(id);
        }}
      >
        完了
      </button>
      <span>{todo}</span>
    </div>
  );
};

export default TodoItem;
