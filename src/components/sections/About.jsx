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
            I'm a college student pursuing a bachelor's degree in Computer
            Science from Batangas State University. My main focus these days is
            building responsive and beautiful-looking web applications and
            learning modern technologies for the web. I primarily work on
            personal projects and looking for job opportunities that would help me grow as a developer.
          </Text>
          <motion.div variants={YAnimate}>
            <BoldText>Technical</BoldText>
            <Text>
              Right now, you can find me working with React.js,
              Tailwind CSS, and anything HTML, Javascript, and CSS related.
              I have also been studying how to use Next and Typescript.
            </Text>
          </motion.div>
        </Content>
      </Container>
    </Section>
  );
}

export default About;
