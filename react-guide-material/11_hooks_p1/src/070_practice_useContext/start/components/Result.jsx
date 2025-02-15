import { useDispatch } from "../contexts/ClacContext";

const Result = () => {
  const [state,] = useDispatch()
  return (
    <div>
      <h3>結果：{state.result}</h3>
    </div>
  );
};

export default Result;
