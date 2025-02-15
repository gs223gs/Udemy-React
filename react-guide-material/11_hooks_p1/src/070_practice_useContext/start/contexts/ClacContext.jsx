import { createContext, useContext, useReducer } from "react";



const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "change": {
      const { name, value } = payload;
      return { ...state, [name]: value };
    }
    case "add": {
      return { ...state, result: state.a + state.b };
    }
    case "minus": {
      return { ...state, result: state.a - state.b };
    }
    case "divide": {
      return { ...state, result: state.a / state.b };
    }
    case "multiply": {
      return { ...state, result: state.a * state.b };
    }
    default:
      throw new Error("operator is invalid");
  }
};


const ReducerContext = createContext()
const CALC_OPTIONSContext = createContext()

export const CalcProvider = ({ children }) => {

  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);
  const calculate = (e) => {
    dispatch({ type: e.target.value });
  };

  return (
    <ReducerContext.Provider value={[state,calculate]}>
      <CALC_OPTIONSContext.Provider value={CALC_OPTIONS}>
        {children}
      </CALC_OPTIONSContext.Provider>
    </ReducerContext.Provider>
  )
}

export const useCALC = () => useContext(CALC_OPTIONSContext)
export const useDispatch = () => useContext(ReducerContext)