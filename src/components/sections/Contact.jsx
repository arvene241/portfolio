import React from "react";
import {
  BoldText,
  ContactContainer,
  ButtonContainer,
} from "../../styles/components/sections/ContactStyle";
import {
  Content,
  Section,
  SectionHeading,
  Text,
} from "../../styles/GlobalStyle";
import { BsArrowRight } from "react-icons/bs";
import Button from "../Button";
import { motion } from "framer-motion";
import { YAnimate, parentAnimate } from "../../data/animations";

function Contact() {
  const pdfFile = "/assets/mike arvene lantin - resume.pdf";

  return (
    <Section id="contact">
      <ContactContainer
        as={motion.div}
        initial={"hidden"}
        whileInView={"visible"}
        variants={parentAnimate}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Content as={motion.div} variants={YAnimate}>
          <SectionHeading>contact</SectionHeading>
          <BoldText>Don't be shy!</BoldText>
          <Text>
            My inbox is always open. Feel free to send me an
            email.
          </Text>
        </Content>
        <ButtonContainer>
          <Button
            link={pdfFile}
            text="resume"
            icon={<BsArrowRight />}
            download="true"
          />
          <Button
            link="mailto:arvene.business@gmail.com"
            text="say hello"
            icon={<BsArrowRight />}
          />
        </ButtonContainer>
      </ContactContainer>
    </Section>
  );
}

export default Contact;
