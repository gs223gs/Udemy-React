import TodoItem from './TodoItem'

const TodoList = ({filteredTodo,onClick}) =>{
  return(
    <div>
        {filteredTodo.length > 0 ? (
          filteredTodo.map((todo) => {
            console.log(todo)
            return (
              <div key={todo.id}>
                <TodoItem id={todo.id} todo={todo.todo} onClick={onClick}/>
              </div>
            );
          })
        ) : (
          <p>Todoはありません</p>
        )}
    </div>
  )
}

export default TodoList