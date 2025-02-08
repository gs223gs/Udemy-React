import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
const Example = () => {
  const [todos, setTodos] = useState([
    { id: 1, todo: "買い物", complet: false },
    { id: 2, todo: "予約", complet: false },
    { id: 3, todo: "郵便", complet: true },
  ]);

  const [value, setValue] = useState("");

  const handleSubmit = () => {
    const newTodo = [{ id: new Date().getTime(), todo: value, complet: false}, ...todos]
    console.log(newTodo)
    setTodos(newTodo)
    setValue('')
  };


  const onChange = (e) =>{
    setValue(e.target.value)
  }

//ここだけ無理だった AI使った
  const onClick = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complet: true };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const filteredTodo = todos.filter((todo) => todo.complet == false);
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault();
        handleSubmit();
        }}>
        <input type="text" onChange={ onChange } value={value} />
        <input type="submit" value="送信" />
      </form>

      <ul>
        {filteredTodo.length > 0 ? (
          filteredTodo.map((todo) => {
            return (
              <div key={todo.id}>
                <button onClick={()=> {onClick(todo.id)}}>完了</button>
                <span>{todo.todo}</span>
              </div>
            );
          })
        ) : (
          <p>Todoはありません</p>
        )}
      </ul>
      <Todo />
      <TodoList />
      <TodoForm />
    </div>
  );
};

export default Example;
