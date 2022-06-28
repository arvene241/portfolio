import React from "react";
import { Section, SectionHeading } from "../../styles/GlobalStyle";
import { projectsData } from "../../data/projectsData";
import { IconLink, Icons, Project, ProjectContent, ProjectHeading, ProjectImage, ProjectsContainer, ProjectsList, ProjectText } from "../../styles/components/sections/ProjectsStyle";

function Projects() {
  return (
    <Section id="project">
      <ProjectsContainer>
        <SectionHeading>projects</SectionHeading>
        <ProjectsList>
          {projectsData.map((project, index) => (
            <Project key={index}>
              <ProjectImage src={project.img} />
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
