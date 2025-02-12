import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const reducer = (prev, { action, input }) => {
  console.log(action, prev, "reducer");
  console.log("int :", input.int);
  console.log(input);

  switch (action) {
    case "add":
      return { ...prev, result: prev.a + prev.b };
    case "minus":
      return { ...prev, result: prev.a - prev.b };
    case "divide":
      return { ...prev, result: prev.a / prev.b };
    case "multiply":
      return { ...prev, result: prev.a * prev.b };
    case "change":
      return { ...prev, input: input.int, b: input.int };
    default:
      throw new Error("不明なactionです。");
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
    console.log(e.target.value);
    // dispatch(e.target.value)
    dispatch({ action: e.target.value, state });
  };

  const numChangeHandler = (e) => {
    console.log('name: ',e.target.name, 'int: ',e.target.value)
    dispatch({
      action: "change",
      input: { name: e.target.name, int: e.target.value },
    });
  };

  return (
    <>
      <h3>練習問題</h3>
      <p>useReducerを使って完成コードと同じ機能を作成してください。</p>
      <div>
        a:
        <input
          type="number"
          name="a"
          value={state.a}
          onChange={numChangeHandler}
        />
      </div>
      <div>
        b:
        <input
          type="number"
          name="b"
          value={state.b}
          onChange={numChangeHandler}
        />
      </div>
      <select value={state.type} onChange={calculate}>
        {CALC_OPTIONS.map((CALC_OPTION) => {
          return (
            <option key={CALC_OPTION} value={CALC_OPTION}>
              {CALC_OPTION}
            </option>
          );
        })}
      </select>
      <h1>結果：{state.result}</h1>
    </>
  );
};

export default Example;
