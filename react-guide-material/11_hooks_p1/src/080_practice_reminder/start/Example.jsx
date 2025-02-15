import Todo from "./components/Todo";
import { TodoProvider } from "./contexts/TodoContext";
const Example = () => {
  return (
    <>
      <TodoProvider>
        <Todo />
      </TodoProvider>
    </>
  );
};

export default Example;
