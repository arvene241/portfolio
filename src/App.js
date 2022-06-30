import React, { useState, useEffect } from "react";
import ThemeContextProvider from "./context/ThemeModeContext";
import Homepage from "./pages/Homepage";
import GlobalStyle from "./styles/GlobalStyle";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from './components/Preloader';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, [isLoaded]);

  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            exit={{
              opacity: 0,
              transition: {
                ease: "easeInOut",
                duration: 0.2,
              },
            }}
          >
            <Preloader />
          </motion.div>
        )}
      </AnimatePresence>

      {isLoaded && <Homepage />}
    </ThemeContextProvider>
  );
}

export default App;
