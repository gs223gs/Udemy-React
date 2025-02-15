import Item from "./Item";
import { useTodo } from "../contexts/TodoContext";
const List = () => {
  const [state,dispatch] = useTodo()

  const complete = (id) => {
    dispatch({type:'delete', payload:id})
  };
  return (
    <div>
      {state.map((todo) => {
        return (
          <div key={todo.id}>
            <Item todo={todo} complete={complete} dispatch={dispatch} />
          </div>
        );
      })}
    </div>
  );
};

export default List;
