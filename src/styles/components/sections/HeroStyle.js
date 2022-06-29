import styled from "styled-components";
import { Container, Section, Heading, icons } from "../../GlobalStyle";

export const HeroSection = styled(Section)`
  padding: 120px 0;

  @media screen and (min-width: 428px) {
    padding: 150px 0;
  }

  @media screen and (min-width: 1024px) {
    padding: 230px 0;
  }
`

export const HeroContainer = styled(Container)`
  gap: 45px;

  @media screen and (min-width: 1024px) {
    gap: 35px;
  }
`;

export const HeroHeading = styled(Heading)`
  margin: 15px 0;
  letter-spacing: 0.1em;

  @media screen and (min-width: 428px) {
    margin: 30px 0 15px;
  }
`;

export const AboutMeLink = styled.a`
  margin: 30px 0;
  width: 200px;
  z-index: 1;

  p {
    color: ${({ theme }) => theme.color} !important;
    text-transform: capitalize;
  }

  :hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.color};
  }

  svg {
    margin-left: 10px;
    vertical-align: middle;
    animation-name: forward;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    ${icons};
  }

  @keyframes forward {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 30px;
`;

export const SocialLinks = styled.a`
  ${icons};
`;

export const HeroPeeps = styled.img`
  width: 262px;
  height: 262px;

  @media screen and (min-width: 428px) {
    width: 320px;
    height: 320px;
  }

  @media screen and (min-width: 1024px) {
    width: 400px;
    height: 400px;
  }
`;
