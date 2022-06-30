import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { Text } from "../styles/GlobalStyle";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  IconContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "../styles/components/NavbarStyle";
import ToggleTheme from "./ToggleTheme";
import { motion } from "framer-motion";

const navVariants = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

function Navbar() {
  const pdfFile = "/assets/mike-arvene-lantin-resume.pdf";
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <Nav>
      <NavbarContainer
        as={motion.div}
        initial={"hidden"}
        animate={"visible"}
        transition={{ staggerChildren: 0.1 }}
      >
        <NavLogo href="#" toggle={toggle} as={motion.a} variants={navVariants}>
          arvene
        </NavLogo>
        <IconContainer>
          <ToggleTheme toggle={toggle} variants={navVariants} />
          <MobileIcon
            onClick={handleClick}
            toggle={toggle}
            as={motion.div}
            variants={navVariants}
          >
            {toggle ? <BiX /> : <BiMenu />}
          </MobileIcon>
        </IconContainer>
        <NavMenu toggle={toggle}>
          {["about", "project", "contact"].map((item) => (
            <NavItem toggle={toggle} key={item} className="nav-transition">
              <NavLinks href={`#${item}`} onClick={() => setToggle(false)}>
                {item}
              </NavLinks>
            </NavItem>
          ))}
          <div className="nav-transition" toggle={toggle}>
            <NavLinks href={pdfFile} target="_blank" download rel="noreferrer">
              Resume
            </NavLinks>
            <Text>Say Hello</Text>
            <NavLinks href="mailto:hello@arvene.live">
              hello@arvene.live
            </NavLinks>
          </div>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
