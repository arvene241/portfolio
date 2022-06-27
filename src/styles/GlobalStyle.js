import styled, { createGlobalStyle, css } from "styled-components";
import Variables from "./Variables";

const GlobalStyle = createGlobalStyle`
  ${Variables};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--font-main);
    font-size: var(--default-fs);
    scroll-behavior: smooth;
  }

  body {
    background-color: #F7F9F8;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  p {
    font-size: var(--default-fs);

    @media screen and (min-width: 428px) {
      font-size: var(--small-fs);
    }
  }
  
`;

export const flex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  ${flex};
`;

export default GlobalStyle;
