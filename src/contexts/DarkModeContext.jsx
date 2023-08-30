import { createContext, useContext } from "react";
import useDarkMode from "../hooks/useDarkMode";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useDarkMode();

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDark() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeContext");

  return context;
}

export { DarkModeProvider, useDark };
