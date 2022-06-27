import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    scroll-behavior: smooth;
  }
`;

export const flex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default GlobalStyle;
