import styled from "styled-components";
import { Text, Container, flex, Heading } from "../../GlobalStyle";

export const ProjectsContainer = styled(Container)`
  width: 100%;
  flex-direction: column;
`;

export const ProjectsList = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  gap: 20px;

  @media screen and (min-width: 769px) {
    gap: 25px 20px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Project = styled.div`
  ${flex};
  align-items: end;
  position: relative;
  height: 300px;
  filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07))
    drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06));

  ::after {
    content: "";
    position: absolute;
    display: inline-block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0)
      linear-gradient(to bottom, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0.7) 100%)
      repeat 0 0;
    z-index: 1;
  }

  @media screen and (min-width: 769px) {
    :hover {
      .project-content {
        transform: none;
        opacity: 1;
      }
    }
  }

  @media screen and (min-width: 769px) {
    height: 330px;
  }
`;

export const ProjectImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

export const ProjectContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  user-select: none;
  z-index: 2;
  padding: 2rem;

  @media screen and (min-width: 769px) {
    opacity: 0;
    transform: translateY(10%);
    transition: opacity 300ms ease-in-out 0s, transform 300ms ease-in-out 0s;
  }
`;

export const ProjectHeading = styled(Heading)`
  font-weight: 600;
  text-transform: capitalize;
  color: var(--primary-color);
`;

export const ProjectText = styled(Text)`
  color: var(--primary-color);
  line-height: normal;
`;

export const Icons = styled.div`
  display: flex;
  padding-top: 10px;
  gap: 10px;
`;

export const IconLink = styled.a`
  svg {
    width: var(--large-is);
    height: var(--large-is);
    fill: var(--primary-color);
    color: var(--primary-color);
  }
`;
