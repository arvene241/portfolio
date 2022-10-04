import styled from "styled-components";
import { flex } from "../GlobalStyle";

export const StyledButton = styled.a`
  width: 200px;
  height: 50px;
  position: relative;
  overflow: hidden;
  background: transparent;
  font-size: var(--default-fs);
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
  user-select: none;
  cursor: pointer;
  background-color: transparent;
`;

export const Hover = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  ${flex};
  border: 1px solid ${({ theme }) => theme.text};
  gap: 30px;

  svg {
    width: 35px;
    height: 25px;
  }

  :hover {
    color: ${({ theme }) => theme.body};
    fill: ${({ theme }) => theme.body};

    ::before {
      transform: translateX(0);
      background: ${({ theme }) => theme.text};
    }
  }

  ::before {
    content: "";
    background: ${({ theme }) => theme.text};
    position: absolute;
    top: -0.1em;
    bottom: 0;
    left: 0;
    right: 0;
    width: 101%;
    height: 108%;
    pointer-events: none;
    z-index: -1;
    transform: translateX(-90%);
    transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }
`;
