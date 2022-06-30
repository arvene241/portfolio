import styled from "styled-components";
import { flex } from "./GlobalStyle";

export const TextPreloader = styled.section`
  ${flex};
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  z-index: 101;
  overflow: hidden;

  svg {
    fill: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.color};

    path {
      stroke: ${({ theme }) => theme.color};
    }
  }
  
  @media screen and (max-width: 960px) {
    padding: 0 50px;
  }
`;