import useCounter from "./hooks";
const Example = () => {
  //what:Hooks.jsのuseCounterからカウントとカウントアップの関数を分割代入
  //why: コードの可読性を上げるためにHooksに分割
  const {count, countup} = useCounter();
  return (
    <>
      <div>Counts: {count}</div>
      <button onClick={countup}>Count Up!</button>
    </>
  );
};

export default Example;
