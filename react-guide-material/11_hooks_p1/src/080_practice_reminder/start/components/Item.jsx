import { useState } from "react";
import PropTypes from "prop-types";

const Item = ({ todo, complete, dispatch }) => {
  const isedit = () => {
    dispatch({ type: "editstart", payload: todo });
    setEditTodo(todo.content);
  };

  const [editTodo, setEditTodo] = useState("");

  const editsubmithandler = (e) => {
    e.preventDefault();
    console.log("edit submit");
    const newTodo = {
      ...todo,
      content: editTodo,
      editing: false,
    };
    dispatch({ type: "editend", payload: newTodo });
    setEditTodo("");
  };
  return (
    <div key={todo.id}>
      
      <form onSubmit={editsubmithandler}>
      <button type="button" onClick={() => complete(todo.id)}>完了</button>
        {todo.edit ? (

          <input
            type="text"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
        ) : (
          <span onDoubleClick={isedit}>{todo.content}</span>
        )}
      </form>
    </div>
  );
};

Item.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    content: PropTypes.string.isRequired,
    edit: PropTypes.bool,
  }).isRequired,
  complete: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Item;
