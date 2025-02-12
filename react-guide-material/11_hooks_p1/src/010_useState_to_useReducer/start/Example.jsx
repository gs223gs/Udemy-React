import { useState } from "react";

const Example = () => {
const [count, setCount] = useState(0)
const buttonHandler = () =>{
  setCount((prev) => prev + 1)
}
  return (
    <div>
      {count}
      <button onClick={buttonHandler}>+</button>
    </div>
  );
};

export default Example;
