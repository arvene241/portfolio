import styled from "styled-components";
import { flex } from "../GlobalStyle";

export const Nav = styled.nav`
  position: fixed;
  top: 25px;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.background};
  transition: top 0.3s;
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
  color: ${({ theme, toggle }) => (toggle ? theme.oppositeColor : theme.color)};
  z-index: 100;

  @media screen and (min-width: 428px) {
    font-size: var(--medium-fs);
    color: ${({ theme }) => theme.color};
  }

  @media screen and (min-width: 1024px) {
    font-size: var(--large-fs);
  }
`;

export const MobileIcon = styled.div`
  display: block;
  cursor: pointer;
  width: var(--small-is);
  height: var(--small-is);
  z-index: 100;
  ${flex};

  .themeIcon {
    width: 80%;
    height: 80%;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme, toggle }) =>
    toggle ? theme.background : theme.oppositeBackground};
  }

  @media screen and (min-width: 428px) {
    width: var(--md-is);
    height: var(--md-is);
  }

  @media screen and (min-width: 1024px) {
    width: var(--xl-is);
    height: var(--xl-is);
  }
`;

export const IconContainer = styled.div`
  ${flex};
  gap: 10px;
`;

export const NavMenu = styled.ul`
  position: fixed;
  top: ${({ toggle }) => (toggle ? 0 : `-100%`)};
  left: 0;
  width: 100%;
  height: 100%;
  ${flex};
  align-items: start;
  flex-direction: column;
  padding: 0 50px;
  background-color: ${({ theme, toggle }) =>
    toggle ? theme.oppositeBackground : theme.background};
  z-index: 99;
  gap: 1rem;

  p {
    padding-top: 20px;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    color: ${({ theme, toggle }) =>
      toggle ? theme.oppositeColor : theme.color};
  }

  @media screen and (min-width: 428px) {
    position: absolute;
    top: 0;
    right: 35px;
    left: unset;
    width: 370px;
    height: 450px;
    opacity: ${({ toggle }) => (toggle ? 1 : 0)};
    visibility: ${({ toggle }) => (toggle ? "visible" : "hidden")};
  }
`;

export const NavItem = styled.li``;

export const NavLinks = styled.a`
  color: ${({ theme, toggle }) =>
    toggle ? theme.color : theme.oppositeColor};
  font-size: var(--small-fs);
`;
