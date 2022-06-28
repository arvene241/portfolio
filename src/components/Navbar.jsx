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

function Navbar() {
  const pdfFile = "/assets/mike-arvene-lantin-resume.pdf";
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo href="#" toggle={toggle}>
          arvene
        </NavLogo>
        <IconContainer>
          <ToggleTheme toggle={toggle} />
          <MobileIcon onClick={handleClick} toggle={toggle}>
            {toggle ? <BiX /> : <BiMenu />}
          </MobileIcon>
        </IconContainer>
        <NavMenu toggle={toggle}>
          {["about", "project", "contact"].map((item) => (
            <NavItem key={item}>
              <NavLinks href={`#${item}`} onClick={() => setToggle(false)}>
                {item}
              </NavLinks>
            </NavItem>
          ))}
          <NavLinks href={pdfFile} target="_blank" download rel="noreferrer">
            Resume
          </NavLinks>
          <Text>Say Hello</Text>
          <NavLinks href="mailto:arvene.business@gmail.com">
            arvene.business@gmail.com
          </NavLinks>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
