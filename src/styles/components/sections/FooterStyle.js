import styled from "styled-components";
import { icons, Section, Text } from "../../GlobalStyle";

export const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.accent};
`;

export const FooterContainer = styled(Section)`
  padding: 70px 20px;
  width: 100%;
  flex-direction: column;

  @media screen and (min-width: 428px) {
    padding: 70px 50px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SocialIcons = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 30px;

  @media screen and (min-width: 1024px) {
    margin-top: 0;
  }
`;

export const FooterText = styled(Text)`
  color: ${({ theme }) => theme.body};
  text-align: center;

  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`;

export const SocialLinks = styled.a`
  ${icons};
  width: var(--md-is);
  height: var(--md-is);

  @media screen and (min-width: 428px) {
    width: var(--large-is);
    height: var(--large-is);
  }

  svg {
    fill: ${({ theme }) => theme.body};
  }
`;
