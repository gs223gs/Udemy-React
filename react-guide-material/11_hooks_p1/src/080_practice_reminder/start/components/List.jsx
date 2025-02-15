import Item from "./Item";
const List = ({ todos,  dispatch }) => {
  const complete = (id) => {
    dispatch({type:'delete', payload:id})
  };
  return (
    <div>
      {todos.map((todo) => {
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
