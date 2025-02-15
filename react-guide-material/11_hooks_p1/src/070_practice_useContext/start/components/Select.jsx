import { useCALC } from "../contexts/ClacContext";
import { useDispatch } from "../contexts/ClacContext";

const Select = () => {
  const CALC_OPTIONS = useCALC();
  const [state, calculate, ] = useDispatch();
  return (
    <div>
      <select value={state.type} name="type" onChange={calculate}>
        {CALC_OPTIONS.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};
//
export default Select;
