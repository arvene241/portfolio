import { createContext } from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from '../styles/Theme';
import { useDarkMode } from "../hooks/useDarkMode";

export const ThemeModeContext = createContext();

export default function ThemeContextProvider(props) {
  const [theme, toggleTheme] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeModeContext.Provider value={{theme, toggleTheme}}>
      <ThemeProvider theme={themeMode}>{props.children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
