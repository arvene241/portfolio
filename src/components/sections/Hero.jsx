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
import { Content, MainHeading, Text } from "../../styles/GlobalStyle";
import { BsArrowRight } from "react-icons/bs";
import { socialIcons } from "../../data/socialIcons";
import heroPeep from "../../assets/heroPeep.svg";
import { motion } from "framer-motion";
import { YAnimate, XAnimate } from "../../data/animations";

function Hero() {
  const heroVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  return (
    <HeroSection id="home">
      <HeroContainer
        as={motion.div}
        initial={"hidden"}
        animate={"visible"}
        variants={heroVariants}
      >
        <Content
          as={motion.div}
          initial={"hidden"}
          animate={"visible"}
          variants={heroVariants}
        >
          <MainHeading as={motion.h1} variants={YAnimate}>
            mike arvene lantin
          </MainHeading>
          <HeroHeading as={motion.h2} variants={YAnimate}>
            frontend developer
          </HeroHeading>
          <Text as={motion.p} variants={YAnimate}>
            A 22-year-old self-taught front-end web developer in the Philippines. I'm specialized in building responsive web applications using React.
          </Text>
          <AboutMeLink href="#about" as={motion.a} variants={YAnimate}>
            <Text>
              see more about me
              <BsArrowRight />
            </Text>
          </AboutMeLink>
          <SocialIcons as={motion.div} variants={YAnimate}>
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
        <HeroPeeps src={heroPeep} as={motion.img} variants={XAnimate} />
      </HeroContainer>
    </HeroSection>
  );
}

export default Hero;
