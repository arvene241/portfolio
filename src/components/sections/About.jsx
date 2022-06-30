import React from "react";
import { BoldText } from "../../styles/components/sections/AboutStyle";
import {
  Container,
  Content,
  Section,
  SectionHeading,
  Text,
} from "../../styles/GlobalStyle";
import { motion } from "framer-motion";
import { YAnimate, parentAnimate } from "../../data/animations";

function About() {
  return (
    <Section id="about">
      <Container
        as={motion.div}
        initial={"hidden"}
        whileInView={"visible"}
        variants={parentAnimate}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Content>
          <SectionHeading as={motion.h1} variants={YAnimate}>
            about
          </SectionHeading>
          <Text as={motion.p} variants={YAnimate}>
            I’m college student and currently pursuing a bachelor's degree in
            Computer Science from Batangas State University. My main focus these
            days is building responsive and beautiful looking web applications
            and learning modern technologies for the web. I mostly work on
            personal projects and sometimes on freelance projects.
          </Text>
          <motion.div variants={YAnimate}>
            <BoldText>Technical</BoldText>
            <Text>
              Right now you can find me working with React.js,
              Styled-Components, and in general anything HTML, Javascript, and
              CSS related. Also been studying how to use Redux, and my goal is
              to become MERN stack developer.
            </Text>
          </motion.div>
        </Content>
      </Container>
    </Section>
  );
}

export default About;
