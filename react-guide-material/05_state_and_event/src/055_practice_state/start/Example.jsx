import { useState } from 'react'
const Example = () => {
  const [cnt, setCnt] = useState(0)

  const deCnt = () =>{setCnt(cnt - 1)}
  return (
    <>
      <h3>練習問題</h3>
      <p>
        記述を変更し、完成コードのように+と-ボタンをクリックすると現在のカウント数が1ずつ増減する機能を実装してください。*useStateを用いてcountとsetCountを定義してください。
      </p>
      <p>現在のカウント数: {cnt}</p>
      <button onClick={() => setCnt (cnt + 1)}>+</button>
      <button onClick={deCnt}>-</button>
    </>
  );
};

export default Example;
