import { useContext, createContext, useReducer } from "react";

export const CounterContext = createContext();
export const CounterUpdateContext = createContext();

export const CountProvider = ({ children }) => {
  const [state, dispatch] = useReducer((prev, { type, step }) => {
    switch (type) {
      case "+":
        return prev + step;
      case "-":
        return prev - step;
      default:
        throw new Error("不明なactionです。");
    }
  }, 0);

  const countUp = (e) => {
    console.log(e.target.value);
    const stepInt =parseInt(e.target.value)
    console.log(stepInt)
    dispatch({ type: "+", step: stepInt });
  };
  const countDown = (e) => {
    const stepInt =parseInt(e.target.value)
    dispatch({ type: "-", step: stepInt });
  };

  return (
    <CounterContext.Provider value={state}>
      <CounterUpdateContext.Provider value={[countUp, countDown]}>
        {children}
      </CounterUpdateContext.Provider>
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
export const useUpdateCounter = () => useContext(CounterUpdateContext);
