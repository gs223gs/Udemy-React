import { useReducer } from "react";
import List from "./List";
import Form from "./Form";

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
      edit: false,
    },
    {
      id: 2,
      content: "卵買う",
      edit: false,
    },
    {
      id: 3,
      content: "郵便出す",
      edit: false,
    },
  ];

  const [state, dispatch] = useReducer((prev, { type, payload }) => {
    switch (type) {
      case "delete":
        return prev.filter((todo) => todo.id !== payload);
      case "create":
        return [...prev, payload];
      case "editstart":
        return prev.map((todo) =>
          todo.id === payload.id ? { ...todo, edit: !payload.edit } : todo
        );
      case "editend":
        return prev.map((todo) =>
          todo.id === payload.id
            ? { ...todo, content: payload.content, edit: !payload.edit }
            : todo
        );
      case "editsubmit":
        return;
      default:
        throw new Error("不明なpaylord");
    }
  }, todosList);
  return (
    <>
      <List todos={state} dispatch={dispatch} />
      <Form dispatch={dispatch} />
    </>
  );
};
export default Todo;
