import { useState } from 'react'
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
const Todo = () =>{
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
      <TodoForm handleSubmit={handleSubmit} onChange={onChange} value={value}/>
      <TodoList filteredTodo={filteredTodo} onClick={onClick}/>
    </div>
  );
}

export default Todo