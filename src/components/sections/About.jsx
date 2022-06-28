import React from 'react'
import { BoldText } from '../../styles/components/sections/AboutStyle'
import { Container, Content, Section, SectionHeading, Text } from '../../styles/GlobalStyle'

function About() {
  return (
    <Section id="about">
      <Container>
        <Content>
          <SectionHeading>
            about
          </SectionHeading>
          <Text>I’m college student and currently pursuing a bachelor's degree in Computer Science from Batangas State University. My main focus these days is building responsive and beautiful looking web applications and learning modern technologies for the web. I mostly work on personal projects and sometimes on freelance projects.</Text>
          <BoldText>Technical</BoldText>
          <Text>Right now you can find me working with React.js, Styled-Components, and in general anything HTML, Javascript, and CSS related. Also been studying how to use Redux, and my goal is to become MERN stack developer.</Text>
        </Content>
      </Container>
    </Section>
  )
}

export default About