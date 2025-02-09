import { useDebugValue } from "react";
import { useState } from "react"

const Child = ({val}) => {
  return <p>現在のカウント数: {val}</p>
}

const Example = () => {
  const [count, setCount] = useState({ val: 0 });

  const countUp = () => {
    setCount((prevstate) => {
      const newState = { val: prevstate.val + 1 }
      return newState;
    });
  };

  return (
    <>
      <Child val={count.val} />
      <button onClick={countUp}>+</button>
    </>
  );
};

export default Example;
