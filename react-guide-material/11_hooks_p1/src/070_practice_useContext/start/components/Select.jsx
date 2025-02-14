const Select = ({ CALC_OPTIONS, state, calculate }) => {
  console.log(calculate)
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
