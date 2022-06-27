import React, { useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { Nav, NavbarContainer, NavLogo, IconContainer, MobileIcon, NavMenu, NavItem, NavLinks } from '../styles/sections/NavbarStyle';
import ToggleTheme from "./ToggleTheme";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  // const [show, setShow] = useState("0");

  // var prevScrollpos = window.pageYOffset;

  // if (toggle) {
  //   document.body.style.overflow = "hidden";
  // } else {
  //   document.body.style.overflow = "scroll";
  // }

  // const controlNav = (window.onscroll = () => {
  //   var currentScrollPos = window.pageYOffset;
  //   if (prevScrollpos > currentScrollPos) {
  //     setShow("0");
  //   } else {
  //     setShow("-6rem");
  //   }
  //   prevScrollpos = currentScrollPos;
  // });

  // useEffect(() => {
  //   window.addEventListener("scroll", controlNav);

  //   return () => {
  //     window.removeEventListener("scroll", controlNav);
  //   };
  // }, []);

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
            {console.log(toggle)}
          </MobileIcon>
        </IconContainer>
        <NavMenu toggle={toggle}>
          {["About", "Skills", "Work", "Contact"].map((item) => (
            <NavItem key={item}>
              <NavLinks href={`#${item}`} onClick={() => setToggle(false)}>
                {item}
              </NavLinks>
            </NavItem>
          ))}
          <p>Say Hello</p>
          <NavLinks href="mailto:arvene.business@gmail.com">arvene.business@gmail.com</NavLinks>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
