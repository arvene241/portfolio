import styled from "styled-components";
import { flex } from "../GlobalStyle";

export const Nav = styled.nav`
  position: fixed;
  padding: 20px 0;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.body};
  transition: top 0.3s;
  z-index: 100;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  height: 30px;
  padding: 0 20px;
  ${flex};
  justify-content: space-between;
  position: relative;

  @media screen and (min-width: 428px) {
    height: 40px;
    padding: 0 50px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1240px;
    margin: auto;
    height: 50px;
  }
`;

export const NavLogo = styled.a`
  font-size: var(--small-fs);
  font-family: var(--font-secondary);
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  z-index: 100;

  @media screen and (min-width: 428px) {
    font-size: var(--medium-fs);
  }

  @media screen and (min-width: 429px) and (max-width: 570px) {
    z-index: 90;
  }

  @media screen and (min-width: 1024px) {
    font-size: var(--large-fs);
  }
`;

export const MobileIcon = styled.div`
  display: block;
  cursor: pointer;
  z-index: 100;
  ${flex};
  width: var(--md-is);
  height: var(--md-is);

  @media screen and (min-width: 428px) {
    width: var(--large-is);
    height: var(--large-is);
  }

  @media screen and (min-width: 1024px) {
    width: var(--xl-is);
    height: var(--xl-is);
  }

  .themeIcon {
    width: 80%;
    height: 80%;
  }

  svg {
    width: 100%;
    height: 100%;

    @media screen and (min-width: 428px) {
      color: ${({ theme, toggle }) =>
        toggle ? theme.body : theme.text};
    }
  }
`;

export const IconContainer = styled.div`
  ${flex};
  gap: 10px;
`;

export const NavMenu = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${flex};
  align-items: start;
  flex-direction: column;
  padding: 0 50px;
  background-color: ${({ theme }) => theme.body};
  z-index: 99;
  gap: 1rem;
  opacity: ${({ toggle }) => (toggle ? 1 : 0)};
  visibility: ${({ toggle }) => (toggle ? "visible" : "hidden")};
  transition: opacity 0.4s;

  .nav-transition {
    opacity: ${({ toggle }) => (toggle ? 1 : 0)};
    transform: ${({ toggle }) =>
      toggle ? "translateY(0)" : "translateY(50px)"};
    transition: opacity, transform 0.3s;
    transition-delay: 200ms;
  }

  p {
    padding-top: 20px;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    color: ${({ theme }) => theme.text};

    @media screen and (min-width: 428px) {
      color: ${({ theme, toggle }) =>
        toggle ? theme.body : theme.text};
    }
  }

  @media screen and (min-width: 428px) {
    position: absolute;
    top: 0;
    right: 40px;
    left: unset;
    width: 370px;
    height: 450px;
    background-color: transparent;

    ::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${({ theme, toggle }) =>
        toggle ? theme.text : theme.body};
      transition: 0.3s;
      transform: ${({ toggle }) =>
        toggle ? "scale(1)" : "scaleX(.3826) scaleY(.27)"};
      transform-origin: top right;
      z-index: -1;
    }
  }
`;

export const NavItem = styled.li`
  a {
    text-transform: capitalize;
  }
`;

export const NavLinks = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: var(--small-fs);

  @media screen and (min-width: 428px) {
    color: ${({ theme, toggle }) =>
      toggle ? theme.text : theme.body};
  }
`;
