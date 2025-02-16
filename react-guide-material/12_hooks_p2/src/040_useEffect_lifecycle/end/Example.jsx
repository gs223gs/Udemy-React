// POINT useEffectの実行タイミング

import { useState, useEffect } from "react";

const Example = () => {
  const [state, setState] = useState(0);

  useEffect(
    function update() {
      console.log("10 update");

      return function cleanUp() {
        const arr =[]
        console.log("14 update cleanup");
        for(let i = 0; i < 5; i++){
          arr.push(i)
        }
        console.log(arr)
      };
    },
    [state]
  );

  useEffect(() => {
    console.log("25 mount");

    return () => {
      console.log("28 mount cleanup");
    };
  }, []);

  console.log("32 render");
  
  return (
    <>
      <button onClick={() => setState((prev) => prev + 1)}>更新</button>
      <h3>他のレクチャーを選ぶとunmountが呼ばれます。</h3>
    </>
  );
};

export default Example;
