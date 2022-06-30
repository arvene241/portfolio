import React from "react";
import { Section, SectionHeading } from "../../styles/GlobalStyle";
import { projectsData } from "../../data/projectsData";
import {
  IconLink,
  Icons,
  Project,
  ProjectContent,
  ProjectHeading,
  ProjectImage,
  ProjectsContainer,
  ProjectsList,
  ProjectText,
} from "../../styles/components/sections/ProjectsStyle";
import { motion } from "framer-motion";
import { YAnimate, parentAnimate } from "../../data/animations";

function Projects() {
  return (
    <Section id="project">
      <ProjectsContainer
        as={motion.div}
        initial={"hidden"}
        whileInView={"visible"}
        variants={parentAnimate}
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeading as={motion.h1} variants={YAnimate}>projects</SectionHeading>
        <ProjectsList>
          {projectsData.map((project, index) => (
            <Project key={index} as={motion.div} variants={YAnimate}>
              <ProjectImage src={project.img} alt={project.title}/>
              <ProjectContent className="project-content">
                <ProjectHeading>{project.title}</ProjectHeading>
                <ProjectText>{project.desc}</ProjectText>
                <Icons>
                  <IconLink
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.github_icon}
                  </IconLink>
                  <IconLink
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.open_icon}
                  </IconLink>
                </Icons>
              </ProjectContent>
            </Project>
          ))}
        </ProjectsList>
      </ProjectsContainer>
    </Section>
  );
}

export default Projects;
