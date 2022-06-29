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
`;

export const MainHeading = styled.h1`
  font-family: var(--font-secondary);
  font-size: var(--large-fs);
  font-weight: 900;
  text-transform: uppercase;
  line-height: 30px;

  @media screen and (min-width: 428px) {
    font-size: var(--xl-fs);
    line-height: 60px;
  }
`;

export const SectionHeading = styled(MainHeading)`
  margin-bottom: 35px;

  @media screen and (min-width: 428px) {
    margin-bottom: 40px;
  }
`;

export const Heading = styled.h2`
  font-size: var(--small-fs);
  font-weight: 400;
  text-transform: uppercase;

  @media screen and (min-width: 428px) {
    font-size: var(--medium-fs);
  }
`;

export const Text = styled.p`
  font-size: var(--default-fs);
  font-weight: 300;
  line-height: 30px;

  @media screen and (min-width: 428px) {
    font-size: var(--small-fs);
  }
`;

export const flex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const icons = css`
  width: var(--small-is);
  height: var(--small-is);

  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.color};

    :hover {
      opacity: 0.8;
      transform: scale(1.1);
    }
  }

  @media screen and (min-width: 428px) {
    width: var(--md-is);
    height: var(--md-is);
  }
`;

export const Container = styled.div`
  ${flex};
  flex-direction: column;
  padding: 0 20px;

  @media screen and (min-width: 428px) {
    padding: 0 50px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`

export const Section = styled.section`
  ${flex};
  max-width: 325px;
  margin: auto;
  height: auto;
  padding: 70px 0;

  @media screen and (min-width: 428px) {
    padding: 100px 0;
    max-width: 605px;
  }

  @media screen and (min-width: 1024px) {
    padding: 200px 0;
    max-width: 1028px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export default GlobalStyle;
