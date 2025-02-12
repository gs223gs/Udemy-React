import { useState, useContext, createContext } from "react";

export const ThemeContext = createContext();
export const ThemeUpdateContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeUpdateContext.Provider value={setTheme}>
      <ThemeContext.Provider value={theme}>
        {children}
      </ThemeContext.Provider>
    </ThemeUpdateContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export const useUpdateTheme = () => useContext(ThemeUpdateContext);
