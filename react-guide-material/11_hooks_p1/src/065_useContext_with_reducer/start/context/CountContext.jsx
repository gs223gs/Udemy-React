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

  const countUp = () => {
    dispatch({ type: "+", step: 2 });
  };
  const countDown = () => {
    dispatch({ type: "-", step: 2 });
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
