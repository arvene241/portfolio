import React, { useContext } from "react";
import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs";
import { MobileIcon } from "../styles/sections/NavbarStyle";
import { ThemeModeContext } from "../context/ThemeModeContext";

const ToggleTheme = ({ toggle }) => {
  const { theme, toggleTheme } = useContext(ThemeModeContext);

  return (
    <MobileIcon onClick={toggleTheme} toggle={toggle}>
      {theme === "light" ? (
        <FiMoon className="themeIcon" />
      ) : (
        <BsSun className="themeIcon" />
      )}
    </MobileIcon>
  );
};

export default ToggleTheme;
