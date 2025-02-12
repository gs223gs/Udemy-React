import { useState, createContext } from "react";
import "./Example.css";

import Header from "./components/Header";
import Main from "./components//Main";

export const MyContext = createContext();
const Example = () => {
  const [theme, setTheme] = useState("light");

  return (
    <MyContext.Provider value={[theme, setTheme]}>
      <Header />
      <Main />
    </MyContext.Provider>
  );
};

export default Example;
