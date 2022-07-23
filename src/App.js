import React from "react";
import ThemeContextProvider from "./context/ThemeModeContext";
import Homepage from "./pages/Homepage";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <Homepage />
    </ThemeContextProvider>
  );
}

export default App;
