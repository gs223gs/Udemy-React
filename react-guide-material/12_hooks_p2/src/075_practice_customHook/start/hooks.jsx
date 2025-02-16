import { useState } from "react";
//what: Example.jsx内で使用するカウンター制御に関わるコード
//why: 可読性向上のためcostomhooksに分離
export const useCounter = () => {
  //what: カウンターの状態管理と制御
  //why: 不変性を保ち続けるためにstateで管理
  const [count, setCount] = useState(0);
  const countup = () => {
    setCount(prev => prev +1)
  };
  return {
    count,
    countup
  }
}

export default useCounter
