import React, { useContext } from "react";
import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs";
import { MobileIcon } from "../styles/components/NavbarStyle";
import { ThemeModeContext } from "../context/ThemeModeContext";
import { motion } from "framer-motion";

const ToggleTheme = ({ toggle, variants }) => {
  const { theme, toggleTheme } = useContext(ThemeModeContext);

  return (
    <MobileIcon onClick={toggleTheme} toggle={toggle} as={motion.div} variants={variants}>
      {theme === "light" ? (
        <FiMoon className="themeIcon" />
      ) : (
        <BsSun className="themeIcon" />
      )}
    </MobileIcon>
  );
};

export default ToggleTheme;
