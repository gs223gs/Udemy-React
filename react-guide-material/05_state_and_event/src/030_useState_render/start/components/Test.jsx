import { useState } from "react";

const Test = ({num}) => {
  const [count, setCount] = useState(0);
  console.log(num + "のレンダリングです");
  return (
    <>
    <input
      type="text"
      onChange={(e) => {
        setCount(e.target.value);
      }}
    />
    = {count}
    <br/>
  </>
  )

};

export default Test;
