import { createContext, useState } from "react";


const OtherChild = () => {
  const [ value, setValue ] = useState(0);
  console.log(value)
  const clickHandler = (e) => {
    setValue((prev) => prev + 1);
  };

  return (
    <div>
      <h3>他の子コンポーネント</h3>
      <button onClick={clickHandler}>+</button>
      <h3>{value}</h3>
    </div>
  );
};
export default OtherChild;
