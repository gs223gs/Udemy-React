import { useReducer } from "react";
import Input from "./components/Input";
import Result from "./components/Result";
import Select from "./components/Select";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "change": {
      const { name, value } = payload;
      return { ...state, [name]: value };
    }
    case "add": {
      return { ...state, result: state.a + state.b };
    }
    case "minus": {
      return { ...state, result: state.a - state.b };
    }
    case "divide": {
      return { ...state, result: state.a / state.b };
    }
    case "multiply": {
      return { ...state, result: state.a * state.b };
    }
    default:
      throw new Error("operator is invalid");
  }
};

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);
  const calculate = (e) => {
    dispatch({ type: e.target.value });
  };
  return (
    <>
      <Input name="a" state={state} />
      <Input name="b" state={state} />
      <Select CALC_OPTIONS={CALC_OPTIONS} state={state} calculate={calculate} />
      <Result state={state} />
    </>
  );
};

export default Example;
