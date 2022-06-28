import React from "react";
import {
  AboutMeLink,
  HeroContainer,
  HeroHeading,
  HeroPeeps,
  HeroSection,
  SocialIcons,
  SocialLinks,
} from "../../styles/components/sections/HeroStyle";
import {
  Content,
  MainHeading,
  Text,
} from "../../styles/GlobalStyle";
import { BsArrowRight } from "react-icons/bs";
import { socialIcons } from "../../data/socialIcons";
import heroPeep from '../../assets/heroPeep.svg';

function Hero() {
  return (
    <HeroSection>
      <HeroContainer>
        <Content>
          <MainHeading>mike arvene lantin</MainHeading>
          <HeroHeading>frontend developer</HeroHeading>
          <Text>
            A 21-year-old self-taught frontend web developer in the Philippines.
            I'm specialized in building responsive web applications using React.
          </Text>
          <AboutMeLink href="#about">
            <Text>
              see more about me
              <BsArrowRight />
            </Text>
          </AboutMeLink>
          <SocialIcons>
            {socialIcons.map((icon, index) => (
              <SocialLinks
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                {icon.icon}
              </SocialLinks>
            ))}
          </SocialIcons>
        </Content>
        <HeroPeeps src={heroPeep} />
      </HeroContainer>
    </HeroSection>
  );
}

export default Hero;
